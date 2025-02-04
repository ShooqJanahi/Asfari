//============================ FLOATING NAV
const floatingNavs = document.querySelectorAll('.floatingNav a')
const removeActiveNavs = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveNavs();
        nav.classList.add('active')
    })
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.floatingNav a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active')
// 		}else{
// 			sectionsClass.classList.remove('active')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

















//============================ RESUME
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `<h4>Experience</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa molestiae velit ea reiciendis veritatis.</p>
                <ul>
                    <li>
                        <h6>2018 - 2019</h6>
                        <h5>Intern</h5>
                        <p>Mobile Telecom Company</p>
                    </li>
                    <li>
                        <h6>2019 - 2021</h6>
                        <h5>Freelance Web Designer</h5>
                        <p>Fiver and Upwork</p>
                    </li>
                    <li>
                        <h6>2021 - 2022</h6>
                        <h5>Frontend Developer</h5>
                        <p>MTN Ghana</p>
                    </li>
                    <li>
                        <h6>2022 - 2024</h6>
                        <h5>Fullstack Freelancer</h5>
                        <p>Self Employed</p>
                    </li>
                </ul>`

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add('primary')
        // remove classes from other buttons
        aboutBtn.classList.remove('primary')
        educationBtn.classList.remove('primary')
        skillsBtn.classList.remove('primary')
})

// set experience content as the default content resume right when the page loads
resumeRight.innerHTML = experienceContent;




const educationContent = `<h4>Education</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores.</p>
                <ul>
                    <li>
                        <h5>College Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Frontend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Backend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                </ul>`
const educationBtn = document.querySelector('.education__btn')
educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = 'resume__right education'
    educationBtn.classList.add('primary')
        // remove classes from other buttons
        experienceBtn.classList.remove('primary')
        aboutBtn.classList.remove('primary')
        skillsBtn.classList.remove('primary')
})




const skillsContent = `
<h4>Skills</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li><img src="./assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="./assets/next.png" alt="NextJS logo"></li>
                    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="./assets/prisma.png" alt="Prisma logo"></li>
                    <li><img src="./assets/mongo.jpg" alt="MongoDB logo"></li>
                    <li><img src="./assets/jwt.png" alt="JWT logo"></li>
                    <li><img src="./assets/node.png" alt="NodeJS logo"></li>
                </ul>`

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = "resume__right skills"
    skillsBtn.classList.add('primary')
        // remove classes from other buttons
        experienceBtn.classList.remove('primary')
        educationBtn.classList.remove('primary')
        aboutBtn.classList.remove('primary')
})




const aboutContent = `
<h4>About me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis excepturi quibusdam.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Ernest Achiever</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>6+ years</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>youremail@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Ghanaian</h5>
                    </li>
                    <li>
                        <h6>Freelance & collabs:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>+233557097546</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@yourhandle</h5>
                    </li>
                </ul>`


    const aboutBtn = document.querySelector('.about__btn')
    aboutBtn.addEventListener('click', () => {
        resumeRight.innerHTML = aboutContent;
        resumeRight.className = "resume__right about"
        aboutBtn.classList.add('primary')
        // remove classes from other buttons
        experienceBtn.classList.remove('primary')
        educationBtn.classList.remove('primary')
        skillsBtn.classList.remove('primary')
    })




















//============================ MIXITUP (projects section)
const containerEl = document.querySelector('.projects__container');
let mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');


















//============================ SWIPER (testimonials section) 
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
    });

















//============================ ACCORDION
const faqs = document.querySelectorAll('.faqs__item');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const p = faq.querySelector('p');
        const icon = faq.querySelector('.faq__icon')
        if(p.classList.contains('show')) {
            p.classList.remove('show')
            icon.innerHTML = `<i class="uil uil-angle-down"></i>`
        } else {
            p.classList.add('show')
            icon.innerHTML = `<i class="uil uil-angle-up"></i>`
        }
    })
})














// =================================== THEME
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    if(document.body.className == '') {
        themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
        window.localStorage.setItem('portfolio-theme', '')
    } else {
        themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
        window.localStorage.setItem('portfolio-theme','dark-theme-variables' )
    }
})

// use theme from local storage on page load
    const bodyClass = window.localStorage.getItem('portfolio-theme')
    document.body.className = bodyClass
