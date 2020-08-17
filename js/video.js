/**
 * 点击生成video的方法
 */
function video(url) {
  // 生成video
  var body = document.querySelector("body")
  var videoDivDelete = document.querySelector(".videoDiv")

  if (videoDivDelete) {
    videoDivDelete.remove()
  }
  var videoDiv = document.createElement("div")
  videoDiv.setAttribute("class", "videoDiv")

  var video = document.createElement("video")

  video.setAttribute("controls", true)
  video.setAttribute("preload", "auto")
  var width
  var time = window.setInterval(function() {
    width = document.documentElement.clientWidth
    marginLeft = (width-500) / 2
    videoDiv.style.marginLeft = marginLeft - 270 + "px"

  },100)
  
  var source = document.createElement("source")
  source.setAttribute("src", url)
  source.setAttribute("type", "video/mp4")
  videoDiv.appendChild(video)
  video.appendChild(source)
  body.appendChild(videoDiv)


  // 删除节点
  body.addEventListener("click", function(e) {

    if (e.target !== video && e.target.parentNode.getAttribute("class") !== "videoImgDiv" && e.target.parentNode.getAttribute("class") !== "course1ImgDiv") {

      document.querySelector(".videoDiv").innerHTML = ""
      clickNum = 0
    }
  })
}
