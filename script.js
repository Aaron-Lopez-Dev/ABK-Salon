window.addEventListener('scroll', monitorYPosition)
window.addEventListener('scroll', navBarColorChange)

const heroSection = document.getElementById('hero')
const serviceSection = document.getElementById('services')
const contactSection = document.getElementById('contact')
const sectionTitle = document.getElementById('sectionName')
const navbar = document.getElementById('navbar');
const sectionName = document.getElementById('sectionName');


function navBarColorChange() {

  if (window.scrollY > 200) {
    navbar.classList.add('scrolled');
    sectionName.classList.add('scrolled');


  } else {
    navbar.classList.remove('scrolled');
    sectionName.classList.remove('scrolled');
  }
};

function monitorYPosition() {

  const heroSectionPosition = heroSection.getBoundingClientRect()
  const serviceSectionPosition = serviceSection.getBoundingClientRect()
  const contactSectionPosition = contactSection.getBoundingClientRect()

  const yTarget = window.innerHeight / 2
  console.log(heroSectionPosition.y + " and " + serviceSectionPosition.y)
  if (heroSectionPosition.y == 0 && serviceSectionPosition.y > yTarget * .80) {
    sectionTitle.textContent = "ABK SALON"
    console.log("YES")
  }
  else if (serviceSectionPosition.y <= yTarget && serviceSectionPosition.y >= 0 && contactSectionPosition.y > yTarget * .80) {
    sectionTitle.textContent = 'SERVICES'
  }
  else if (contactSectionPosition.y <= yTarget && contactSectionPosition.y >= 0) {
    sectionTitle.textContent = 'CONTACT'
  }

}
// For Initial Load
monitorYPosition()

//Hero Section
ScrollReveal().reveal('.heading');
ScrollReveal().reveal('.subheading', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 1500 });

//Service Section
ScrollReveal().reveal('.serviceOne')
ScrollReveal().reveal('.serviceTwo', { delay: 300 })
ScrollReveal().reveal('.serviceThree', { delay: 400 })
ScrollReveal().reveal('.serviceFour', { delay: 500 })

//Contact Section
ScrollReveal().reveal('.hoursHedaing', { delay: 100 });
ScrollReveal().reveal('.hours', { delay: 300 })
ScrollReveal().reveal('.phone', { delay: 400 });
ScrollReveal().reveal('.address', { delay: 500 });
ScrollReveal().reveal('.googleMap', { delay: 1000 });
