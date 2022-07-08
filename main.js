// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// add eventListener to hearts
const heartBtns = document.querySelectorAll(".like-glyph");
for (let i = 0; i < heartBtns.length; i++){
  heartBtns[i].addEventListener("click", handleClickHeart);
}

// requests and responds to server
function handleClickHeart(e) {
  mimicServerCall()
  .then(() => {
    if (e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.setAttribute("class", "activated-heart");
    } else {
      e.target.innerText = EMPTY_HEART;
      e.target.removeAttribute("class");
    }
  })
  .catch(() => {
    document.querySelector("#modal").removeAttribute("class");
    setTimeout(() => {
      document.querySelector("#modal").setAttribute("class", "hidden")
    }, 3000);
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
