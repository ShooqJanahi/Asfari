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
const experienceContent = `<h4>Our Services</h4>
    <p>We specialize in comprehensive travel and accounting solutions to meet all your needs.</p>
    <ul>
        <li>
            <h5>Travel Planning & Tours</h5>
            <p>Custom travel itineraries, guided tours, and vacation packages</p>
        </li>
       
        <li>
            <h5>Business Accounting</h5>
            <p>Professional financial management and consulting</p>
        </li>
       
    </ul>`

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right education'
    experienceBtn.classList.add('primary')
        // remove classes from other buttons
        aboutBtn.classList.remove('primary')
        educationBtn.classList.remove('primary')
        skillsBtn.classList.remove('primary')
})

// set experience content as the default content resume right when the page loads
resumeRight.innerHTML = experienceContent;




const educationContent = `
    <h4>Destinations & Services</h4>
    <p>Explore our popular destinations and comprehensive accounting services.</p>
    <ul>
        <li>
            <h5>Travel Packages</h5>
            <p>
                Discover our curated travel experiences to Europe, Asia, Africa, and the Americas. 
                Includes guided tours, luxury accommodations, and personalized itineraries.
            </p>
        </li>
        <li>
            <h5>Accounting Solutions</h5>
            <p>
                Professional accounting services including bookkeeping, tax preparation, financial planning, 
                and business consulting for individuals and companies.
            </p>
        </li>
        <li>
            <h5>Special Offers</h5>
            <p>
                Seasonal travel deals, group discounts, and tailored accounting packages for businesses. 
                
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



const accountingContent = `
    <h4>Special Accounting Package</h4>
    <p>Free Profit and Loss Account for the first year with comprehensive financial services.</p>
    <ul>
        <li>
            <h5>Package Includes</h5>
            <p>• Financial consultations<br>
               • Profit and loss account (1st year free)<br>
               • Asset valuation<br>
               • Bank account review<br>
               • Tax consultations<br>
               • Future project planning</p>
        </li>
        <li>
            <h5>Core Services</h5>
            <p>• Bookkeeping<br>
               • Accounting<br>
               • Tax consultations</p>
        </li>
        <li>
            <h5>Terms & Conditions</h5>
            <p>• 3-year contract<br>
               • Valid until June 30, 2025<br>
               • Special financial reports</p>
        </li>
    </ul>`;

   const accountingBtn = document.querySelector('.accounting__btn')
accountingBtn.addEventListener('click', () => {
    resumeRight.innerHTML = accountingContent;
    resumeRight.className = 'resume__right accounting';
    // Remove primary from all buttons first
    experienceBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    aboutBtn.classList.remove('primary');
    // Add primary to accounting button
    accountingBtn.classList.add('primary');
});





const aboutContent = `
    <h4>Company Information</h4>
    <p>Your trusted partner for travel and accounting solutions.</p>
    <ul>
        <li>
            <h5>Company Details</h5>
            <p>
                <strong>Name:</strong> Asfari <br>
                <strong>Established:</strong> Since 2013<br>
                <strong>Location:</strong> Arad, Bahrain
            </p>
        </li>
        <li>
            <h5>Contact Information</h5>
            <p>
                <strong>Email:</strong> <a href="mailto:Khalid@asfari.bh" style="color: var(--color-primary); text-decoration: underline; cursor: pointer;">Khalid@asfari.bh</a><br>
                <strong>Phone Number:</strong> +973 17430055, +973 36331919, +973 39291010<br>
                
            </p>
        </li>
        <li>
            <h5>Business Hours</h5>
            <p>
                
                <strong>Hours:</strong> 9:00 AM - 8:00 PM<br>
                <strong>Languages:</strong> English, Arabic
            </p>
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



// Get all category buttons
const buttons = document.querySelectorAll('.resume__left menu button');

// Function to handle button clicks
const handleButtonClick = (activeButton, content) => {
    // Remove primary class from all buttons
    buttons.forEach(button => button.classList.remove('primary'));
    
    // Add primary class to clicked button
    activeButton.classList.add('primary');
    
    // Update content
    resumeRight.innerHTML = content;
    resumeRight.className = `resume__right ${activeButton.className.includes('experience') ? 'education' : 
                                          activeButton.className.includes('education') ? 'education' : 
                                          activeButton.className.includes('accounting') ? 'accounting' : 'about'}`;
};

// Add event listeners
experienceBtn.addEventListener('click', () => handleButtonClick(experienceBtn, experienceContent));
educationBtn.addEventListener('click', () => handleButtonClick(educationBtn, educationContent));
accountingBtn.addEventListener('click', () => handleButtonClick(accountingBtn, accountingContent));
aboutBtn.addEventListener('click', () => handleButtonClick(aboutBtn, aboutContent));

// Set default active button
experienceBtn.classList.add('primary');






























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
