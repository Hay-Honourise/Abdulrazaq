/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


/*==================== scroll sections autive link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky sections autive link ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

 /*==================== scroll reveal ====================*/

window.srup = ScrollReveal();

// Define the reveal configuration
srup.reveal('.srup', {
  duration: 2000,
  delay: 200,
  distance: '80px',
  easing: 'ease-out',
  origin: 'top',
  reset: true,
});

window.srbottom = ScrollReveal();

// Define the reveal configuration
srbottom.reveal('.srbottom', {
  duration: 2000,
  delay: 200,
  distance: '80px',
  easing: 'ease-out',
  origin: 'bottom',
  reset: true,
});

window.srleft = ScrollReveal();

// Define the reveal configuration
srleft.reveal('.srup p', {
  duration: 2000,
  delay: 200,
  distance: '80px',
  easing: 'ease-out',
  origin: 'right', // Updated origin to 'left'
  reset: true,
});


srleft.reveal('.srup h1, .about img', {
    duration: 2000,
    delay: 200,
    distance: '80px',
    easing: 'ease-out',
    origin: 'left', // Updated origin to 'left'
    reset: true,
  });


  /*==================== typed js ====================*/
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger', 'Graphic Designer', 'App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  function showMessageBox(abdulrazaq) {
    alert(" With an impressive track record and a maximum number of years in the field, Currently studying in prestigious University of Ibadan purchueing a Bachelor's degree in Computer Science,he has received comprehensive training and a solid foundation in the fundamental principles of programming and web development.Abdulrazaq's ability to design innovative and user-friendly websites, Blogs, Android Apps, combined with his strong problem-solving skills.");
  }


 /*==================== Form Validation ====================*/


  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Perform your custom validation here if needed
    // For example, check for valid email format, etc.

    // Send the email using the user's email client
    this.submit();

    // Reset the form after submission
    this.reset();
  });

  
  



