const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.navLink')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const blurHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('blur-header') 
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


let swiperEducation = new Swiper('.education__swiper', {
  loop: true,
  slidesPerView:'auto',
  centeredSlides:'auto',
  grabCursor: true,

  breakpoints:{
    768:{
        slidesPerView: 3,
    }
  }
})

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// activelink
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)





// scrollreveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '400px',
    duration: '2000',
})

sr.reveal('.educationContainer, .contactsContainer, .header')
sr.reveal('.footerContainer', {origin: 'bottom'})
sr.reveal('.homeTitle span:nth-child(1)', {origin: 'top', opacity: 1, delay: 100})
sr.reveal('.homeTitle span:nth-child(2)', {origin: 'top', opacity: 1, delay: 200})
sr.reveal('.homeTitle span:nth-child(3)', {origin: 'top', opacity: 1, delay: 300})
sr.reveal('.homeTitle span:nth-child(4)', {origin: 'top', opacity: 1, delay: 400})
sr.reveal('.homeTitle span:nth-child(5)', {origin: 'top', opacity: 1, delay: 500})
sr.reveal('.homeTitle span:nth-child(10)', {origin: 'right', opacity: 1, delay: 2400.4})

sr.reveal('.ri-account-box-fill', {origin: 'right', delay: 1100})


sr.reveal('.homeTitle span:nth-child(6)', {origin: 'top', opacity: 1, delay: 700})
sr.reveal('.homeTitle span:nth-child(7)', {origin: 'top', opacity: 1, delay: 800})
sr.reveal('.homeTitle span:nth-child(8)', {origin: 'top', opacity: 1, delay: 900})
sr.reveal('.homeTitle span:nth-child(9)', {origin: 'top', opacity: 1, delay: 1000})

sr.reveal('.homeSocial, .aboutData, .projectContainer', {origin: 'left'})
sr.reveal('.aboutImg, .skillsContainer', {origin: 'right'})


