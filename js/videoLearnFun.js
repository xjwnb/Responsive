/**
 * 生成的中间课程节点方法
 */
function videoLearnFun(videoData, device) {

  for(let key in videoData) {

      var div1 = document.createElement("div")
      var divOdd = document.createElement("div")
      var FillImg = document.createElement("img")
      var playImg2 = document.createElement("img")
      var course1ImgDiv = document.createElement("div")
      var course1Img = document.createElement("img")
      var numImgDiv = document.createElement("div")
      var numImg = document.createElement("img")
      var messageTitleDiv = document.createElement("div")
      var messageLineDiv = document.createElement("div")
      var messageTite = document.createElement("div")
      var messageText = document.createElement("p")
      var messageDiv = document.createElement("div")
      var messageMsg = document.createElement("p")
      var messageAllMsgDiv = document.createElement("div")
      var messageDetailedDiv = document.createElement("div")
      var buyBtn = document.createElement("div")
      var rectDiv = document.createElement("div")
      var rectImg = document.createElement("img")
      var title = document.createElement("div")



      var videoLearn = document.querySelector(".video-learn")






      div1.setAttribute("class", "learn")
      divOdd.setAttribute("class", "odd")
      FillImg.setAttribute("src", "./assets/images/"+ device +"/" + videoData[key].images.FillImg)
      divOdd.appendChild(FillImg)
      div1.appendChild(divOdd)
      videoLearn.appendChild(div1)
      course1ImgDiv.setAttribute("class", "course1ImgDiv")
      course1Img.setAttribute("class", "course1Img")
      course1Img.setAttribute("src", "./assets/images/"+ device +"/"+ videoData[key].images.courseImg)
      playImg2.setAttribute("class", "playImg2")
      playImg2.setAttribute("src", "./assets/images/" + device + "/" +videoData[key].images.playImg)
      course1ImgDiv.appendChild(playImg2)
      videoLearn.appendChild(course1Img)
      course1ImgDiv.appendChild(course1Img)
      divOdd.appendChild(course1ImgDiv)
      numImgDiv.setAttribute("class", "numOdd")
      numImg.setAttribute("src", "./assets/images/"+ device +"/" + videoData[key].images.numImg)
      numImgDiv.appendChild(numImg)
      divOdd.append(numImgDiv)
      messageTitleDiv.setAttribute("class", "messageTitleDiv")
      messageLineDiv.setAttribute("class", "line")
      messageTitleDiv.appendChild(messageLineDiv)
      divOdd.appendChild(messageTitleDiv)
      messageTite.setAttribute("class", "messageTitle")
      messageTite.setAttribute("class", "messageText")
      messageText.innerHTML = videoData[key].messages.title
      messageTite.appendChild(messageText)
      messageTitleDiv.appendChild(messageTite)
      divOdd.appendChild(messageTitleDiv)
      messageMsg.setAttribute("class", " messageMsg")
      messageDiv.setAttribute("class", "messageDiv")
      messageMsg.innerHTML = videoData[key].messages.msg
      messageDiv.appendChild(messageMsg)
      divOdd.appendChild(messageDiv)

      messageAllMsgDiv.setAttribute("class", "messageAllMsgDiv")
      messageAllMsgDiv.appendChild(course1ImgDiv)
      messageDetailedDiv.setAttribute("class", "messageDetailedDiv")
      buyBtn.setAttribute("class", "buyBtn")
      buyBtn.innerHTML = videoData[key].btn.btnText
      buyBtn.addEventListener("click", function() {
        window.open(videoData[key].btn.href[device])
      })
      // buyBtn.setAttribute("background", "url("+"\"./assets/images/pc/" + videoData[key].btn.btnImg + "\")")
      messageDetailedDiv.appendChild(numImgDiv)
      messageDetailedDiv.appendChild(messageTitleDiv)
      messageDetailedDiv.appendChild(messageDiv)
      messageDetailedDiv.appendChild(buyBtn)
      messageAllMsgDiv.appendChild(messageDetailedDiv)
      divOdd.appendChild(messageAllMsgDiv)
      rectDiv.setAttribute("class", "rectDiv")
      rectImg.setAttribute("src", "./assets/images/"+ device +"/" + videoData[key].images.rectImg)
      rectDiv.appendChild(rectImg)
      div1.appendChild(rectDiv)
      title.setAttribute("class", "title")
      title.innerHTML = videoData[key].title.titleText
      rectDiv.appendChild(title)

      var learnListDiv = document.createElement("div")
      learnListDiv.setAttribute("class", "learnListDiv")
      rectDiv.appendChild(learnListDiv)
      var length = videoData[key].learnList.length
      for (var i = 0; i < length; i ++) {
        var learnDiv = document.createElement("div")
        learnDiv.setAttribute("class", "learnDiv")
        var videoImgDiv = document.createElement("div")
        videoImgDiv.setAttribute("class", "videoImgDiv")
        var playImg = document.createElement("img")
        playImg.setAttribute("src", "./assets/images/" + device + "/" + videoData[key].learnList[i].playImg)
        videoImgDiv.appendChild(playImg)
        var videoImg = document.createElement("img")
        videoImg.setAttribute("src", "./assets/images/"+ device +"/" + videoData[key].learnList[i].videoImg)
        var videoMsg = document.createElement("p")
        videoMsg.setAttribute("class", "videoMsg")
        videoMsg.innerHTML = videoData[key].learnList[i].msg
        videoImgDiv.appendChild(videoImg)
        learnDiv.appendChild(videoImgDiv)
        learnDiv.appendChild(videoMsg)
        learnListDiv.appendChild(learnDiv)
      }

  }
}