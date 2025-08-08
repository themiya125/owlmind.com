   document.addEventListener("DOMContentLoaded", () => {
            const projects = [
                {
                    title: "Samarasinghe Auto Mobile",
                    category: "wordpress",
                    image: "images/samarasinghe-auto-mobile.jpg",
                    type: "Website",
                    link: "https://samarasingheautomobile.lk/"
                },
                {
                    title: "Onblogexplore Blog Web UI / UX Design",
                    category: "uiux",
                    image: "images/ui-design-figma-blog.jpg",
                    type: "UI/UX Design",
                    link: "https://www.figma.com/design/1fdpeLgvtGkVwPUSQUSZdv/onblogexplore?node-id=31-74&t=yz0qhfZY26pkBX2V-0"
                },
                {
                    title: "Herbal Shop Website",
                    category: "wordpress",
                    image: "images/herbal.jpg",
                    type: "E-commerce Website",
                    link: ""
                }
            ];

            const portfolioGrid = document.getElementById('portfolioGrid');
            const filterBtns = document.querySelectorAll('.filter-btn');

            // Display projects dynamically
            function displayProjects(filter = 'all') {
                portfolioGrid.innerHTML = '';
                const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

                filtered.forEach(project => {
                    const item = document.createElement('div');
                    item.classList.add('portfolio-item');
                    item.innerHTML = `
                        <img src="${project.image}" alt="${project.title}">
                        <div class="portfolio-content">
                            <p>${project.type}</p>
                            <h3>${project.title}</h3>
                            <a href="${project.link}" class="view-btn" target="_blank">View Project</a>
                        </div>
                    `;
                    portfolioGrid.appendChild(item);
                });
            }

            // Filter buttons click event
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    displayProjects(btn.dataset.category);
                });
            });

            // Initial load
            displayProjects();



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active"); // Toggle only the clicked item
  });
});



const texts = ["Hi, I'm Themiya Jayakodi"];
const heading = document.querySelector(".main-heading");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 250;

function typeEffect() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        heading.textContent = currentText.substring(0, charIndex--);
    } else {
        heading.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause before erasing
        isDeleting = true;
        typingSpeed = 100;
        setTimeout(typeEffect, 1500); 
        return;
    } 
    else if (isDeleting && charIndex === 0) {
        // Move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : typingSpeed); 
}

typeEffect();



  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const animation = target.getAttribute("data-animate");
        target.classList.add("animate__animated", animation);
        target.style.opacity = 1;
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  document.querySelectorAll("[data-animate]").forEach(el => {
    el.style.opacity = 0; // Make invisible before scroll
    observer.observe(el);
  });



      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetClass = this.getAttribute('href').substring(1); // remove #
    const targetSection = document.querySelector('.' + targetClass);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


  const topBtn = document.getElementById("topBtn");
    const top = document.getElementById("top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // Smooth scroll to top
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
  top.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });



  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  function toggleMenu() {
    const isActive = mobileMenu.classList.contains('active');
    if (isActive) {
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
    } else {
      mobileMenu.classList.add('active');
      menuOverlay.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);

        });


