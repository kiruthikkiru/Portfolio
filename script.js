document.addEventListener("DOMContentLoaded", function() {
 // Get all anchor links with hash (#)
 const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
 // Iterate over each anchor link
 anchorLinks.forEach(anchor => {
     
     anchor.addEventListener('click', function(e) {
         
         e.preventDefault();
         
   
         const targetId = this.getAttribute('href').substring(1);
         
       
         const targetSection = document.getElementById(targetId);
         
         if (targetSection) {
           
             targetSection.scrollIntoView({ behavior: 'smooth' });
         }
     });
 });   

  //  Toggle audio button
  const audio = document.querySelector('audio');
  const audioToggleButton = document.getElementById('audio-toggle-button');
  
  audioToggleButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      audioToggleButton.textContent = 'Mute Audio';
    } else {
      audio.pause();
      audioToggleButton.textContent = 'Unmute Audio';
    }
  });
});

// Function to toggle display of education and skills sections
const toggleSections = () => {
  const educationSection = document.querySelector('.education');
  const skillsSection = document.querySelector('.skills');

  educationSection.classList.toggle('hidden');
  skillsSection.classList.toggle('hidden');
};

// Add click event listeners to the "Education" and "Skills" headings
const educationHeading = document.querySelector('.education h3');
const skillsHeading = document.querySelector('.skills h3');

educationHeading.addEventListener('click', toggleSections);
skillsHeading.addEventListener('click', toggleSections);


  // JavaScript for opening links in a new tab
  var links = document.querySelectorAll('.social-media-links a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action of following the link
      var url = this.getAttribute('href'); // Get the URL from the href attribute
      window.open(url, '_blank'); // Open the URL in a new tab
    });
  });

  //hero section
  const changeColorButton = document.getElementById('changeColorButton');
  const heroSection = document.querySelector('.hero');

  changeColorButton.addEventListener('click', function() {
    // Change the background color of the hero section
    heroSection.style.backgroundColor = getRandomColor();
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
    // Click event listener for project titles in the portfolio
    const projectTitles = document.querySelectorAll('.project h3');
  
    projectTitles.forEach(title => {
      title.addEventListener('click', function() {
        const projectName = this.textContent;
        alert(`Clicked on ${projectName}`);
      });
    });
  
    // JavaScript to detect cursor position and apply animation to images
    const images = document.querySelectorAll('.project img');
  
    images.forEach(image => {
      image.addEventListener('mousemove', function(event) {
        const boundingRect = image.getBoundingClientRect();
        const mouseX = event.clientX - boundingRect.left;
        const mouseY = event.clientY - boundingRect.top;
  
        const imageCenterX = boundingRect.width / 2;
        const imageCenterY = boundingRect.height / 2;
  
        const deltaX = mouseX - imageCenterX;
        const deltaY = mouseY - imageCenterY;
  
        const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.sqrt(imageCenterX * imageCenterX + imageCenterY * imageCenterY);
  
        const scale = 1 + (0.5 * (distanceFromCenter / maxDistance));
  
        image.style.transform = `scale(${scale})`;
      });
  
      image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
      });
    });
  

      // Form validation
      const form = document.querySelector('.contact-form form');
    
      form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
    
        if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
          return;
        }
    
        alert('Form submitted successfully!');
      });
    
    
  

