"use strict"

// check mobile
function is_touch_device() {
    return ('ontouchstart' in window);
}

function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
// scroll document false

//chech device
function is_touch_device() {
    return ('ontouchstart' in window);
  }

  function bodyFixed() { //scroll - false
    if(is_touch_device()) {
      document.body.classList.add('fixed')
    } else {
      let x=window.scrollX;
      let y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
  }
  
  function bodyNotFixed() { // scroll - true
    if(is_touch_device()) {
      document.body.classList.remove('fixed')
    } else {
      window.onscroll=function(){window.scrollTo()};
  
    }
  }

  
function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}

//header sticky
// window.onscroll = function() {headerFixed()};

// let header = document.querySelector(".header-w");

// let sticky = header.offsetTop;

// function headerFixed() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }
// }
// if (window.pageYOffset >= sticky) {
//     header.classList.add("fixed");
//     document.querySelector('.preview').style.paddingBottom = "127px"
//   } else {
//     header.classList.remove("fixed");
//     document.querySelector('.preview').style.paddingBottom = "47px"
//   }



//Popup close if there was a click on another area
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup')) {
    target.classList.remove('active')
    bodyNotFixed()
  }
  if(target.classList.contains('completed__slide')) {
    target.closest(".popup").classList.remove('active')
    bodyNotFixed()
  }
  if(!target.classList.contains('profile__input') && !target.classList.contains('profile__field-arrow')) {
    let editFeild = document.querySelectorAll('.profile__item-field')
    changerActive(editFeild)
  }
}
)

// close popup if clicl exit btn
let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
        popupClose[i].closest('.popup').classList.remove('active')
        bodyNotFixed()
    })
}

function closeAllPopups() {
  let popups = document.querySelectorAll('.popup')
  for(let i=0;i<popups.length;i++) {
    popups[i].classList.remove('active')
  }
}

//Menu mobile
let nav_icon = document.querySelectorAll('.nav-icon')
let headerMobile = document.querySelector('.header-m')
for(let i=0 ; i < nav_icon.length ; i++) {
  nav_icon[i].addEventListener("click",
  function() {
    document.querySelector('.header__menu').classList.toggle('active')
    headerMobile.classList.toggle('active')
    for(let i = 0; i < nav_icon.length;i++) {
      nav_icon[i].classList.toggle('open')
    }
  })
}

// Size-control
window.addEventListener('resize', function(event){
  //close mobile menu
    if(window.innerWidth > 767) {
      document.querySelector('.header__menu').classList.remove('active')
      document.querySelector('.header-m').classList.remove('active')
      for(let i = 0; i < nav_icon.length;i++) {
        nav_icon[i].classList.remove('open')
      }
    }
  //close profile settings
    if(window.innerWidth > 539) {
      let profileSettings = document.querySelector('.profile__action-content')
      if(document.querySelector('.profile__action-content'))
      if(profileSettings.classList.contains('active')) {
        bodyNotFixed()
        profileSettings.classList.remove('active')
        profileSettings.style.height = 'auto'
      }
    }
    // change bg on slide create-swiper
    changeSlideImg()
})

//excerpts swiper
if(document.querySelectorAll('.excerpts__swiper').length) {
  const swiper_excerpts= new Swiper('.excerpts__swiper', {
    slidesPerView: 2,
    spaceBetween: 36,
    pagination: {
      el: '.excerpts__pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 36
      },
    }
  })
}

//create swiper
if(document.querySelectorAll('.create__swiper').length) {
  const swiper_gallery= new Swiper('.create__swiper', {
    slidesPerView: 1,
    pagination: {
      el: '.create__pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.create__next',
      prevEl: '.create__prev',
    },
  })
}


//registration and authorization btns

let regBtn = document.querySelectorAll('.reg-btn')
let regLog = document.querySelectorAll('.log-btn')

let registrationPopup = document.querySelector('.registration')
let authorizationPopup = document.querySelector('.authorization')

for(let i=0 ; i < regBtn.length ; i++) {
  regBtn[i].addEventListener("click",
  function() {
    closeAllPopups()
    registrationPopup.classList.add('active')
    bodyFixed()
  })
}

for(let i=0 ; i < regLog.length ; i++) {
  regLog[i].addEventListener("click",
  function() {
    closeAllPopups()
    authorizationPopup.classList.add('active')
    bodyFixed()
  })
}

// Show password 

let passwordEye = document.querySelectorAll('.password-control')

for(let i = 0 ; i < passwordEye.length; i ++) {
  passwordEye[i].addEventListener("click",
  function(event) {
    event = event || window.event;
    let target = event.target
    target.parentElement.classList.toggle('active')
    let parent = target.closest('.password-eye')
    let input = parent.querySelector('.input_purple')
    if(input.getAttribute('type') == "password") 
      input.setAttribute('type', 'text')
    else
      input.setAttribute('type', 'password')
  })
}

//profile info

let editBtn = document.querySelectorAll('.profile__field-arrow')
let editFeild = document.querySelectorAll('.profile__item-field')
for(let i=0 ; i < editBtn.length ; i++) {
  editBtn[i].addEventListener("click",
  function() {
    let editList = editBtn[i].closest('.profile__item-field')
    if(editList.classList.contains('active')) {
      changerActive(editFeild)
    } else {
      changerActive(editFeild)
      editList.classList.add('active')
    }
  })
}

let editItem = document.querySelectorAll('.profile__drop-item')
for(let i=0 ; i < editItem.length ; i++) {
  editItem[i].addEventListener("click",
  function() {
    if(editItem[i].classList.contains('profile__drop-item-codes')) {
      editCodes(editItem[i])
    } else {
      editInfo(editItem[i])
    }
  })
}

function editInfo(item) {
  let value = item.innerHTML
  let editList = item.closest('.profile__item-field')
  let input = editList.querySelector('.profile__input')
  input.value = value
}
function editCodes(item) {
  let value = item.querySelector('.profile__drop-text').innerHTML
  let flag = item.querySelector('.profile__drop-flag').getAttribute('src')
  let editList = item.closest('.profile__item-field')
  let input = editList.querySelector('.profile__input')
  let img = editList.querySelector('.profile__flag')
  input.value = value
  img.setAttribute('src', flag)
}


//social 
let socialitem = document.querySelectorAll('.create__social-item')
for(let i=0 ; i < socialitem.length ; i++) {
  socialitem[i].addEventListener("click",
  function() {
    socialitem[i].classList.toggle('active')
  })
}

//create slide bg img - if the picture is not added

let createSlide = document.querySelectorAll('.create__slide-pic')

function changeSlideImg() {
  for(let i=0 ; i < createSlide.length ; i++) {
    if(createSlide[i].getAttribute('src') == "img/pic/slide-preview.svg" || createSlide[i].getAttribute('src') == "img/pic/slide-preview-mob.png") {
      createSlide[i].classList.add('border')
      if(window.innerWidth < 540) {
        createSlide[i].setAttribute('src', 'img/pic/slide-preview-mob.png')
      } else {
        createSlide[i].setAttribute('src', 'img/pic/slide-preview.svg')
      }
    } else {
      createSlide[i].classList.remove('border')
    }
  }
}
changeSlideImg()

// account details open 

let accountDetailsBtn = document.querySelector('.account-details-btn')
let profileSettings = document.querySelector('.profile__action-content')
let availableScreenHeight = window.innerHeight
if(document.querySelectorAll('.account-details-btn').length) {
  accountDetailsBtn.onclick = function() {
    if(window.innerWidth < 540) {
      profileSettings.classList.add('active')
      profileSettings.style.height = '100vh'
      bodyFixed()
    }
  }
}


//close settings
let closeSettings = document.querySelector('.profile__action-back_mob')
if(document.querySelectorAll('.profile__action-back_mob').length) {
  closeSettings.onclick = function() {
    profileSettings.classList.remove('active')
    profileSettings.style.height = 'auto'
    bodyNotFixed()
  }
}



//scroll to block id
let profileNavitem = document.querySelectorAll('.profile__action-bar-item')

let profileActionItem = document.querySelectorAll('.profile__action-item')
for (let anchor of profileNavitem) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    // anchor.classList.add('active')
    const blockID = anchor.getAttribute('href')
    changerActive(profileNavitem)
    changerActive(profileActionItem)
    this.classList.add('active')
    let toBlock = document.querySelector(blockID)
    console.log(toBlock)
    if(toBlock!== null) {
        toBlock.classList.add('active')
    }
  })
}