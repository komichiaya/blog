let header = document.getElementsByClassName('header')[0]
let ad = document.getElementsByClassName('ad')[0]
var scroll = document.documentElement.scroll;
let b = ad.offsetTop - document.documentElement.scrollTop

let a = document.addEventListener("scroll", function (e) {
  setTimeout(() => {
    if (window.scrollY != 0) {
      header.style.position = "fixed"
      header.style.top = 0
      header.style.left = 0

    } else {
      header.style.position = "static"
    }

    if (window.scrollY > 300) {
      ad.style.position = "fixed"
      ad.style.top = 60 + 'px'
      ad.style.width = 232 + 'px';


    } else {
      ad.style.position = "static"
    }
  }, 0)
})
