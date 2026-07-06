
// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let autoRotateTimer;

    // Function to update carousel display
    function updateCarousel(index) {
        // Remove active class from all images and dots
        carouselImages.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current image and dot
        carouselImages[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Function to show next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarousel(currentIndex);
        resetAutoRotate();
    }

    // Function to show previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel(currentIndex);
        resetAutoRotate();
    }

    // Function to show specific image by index
    function goToImage(index) {
        currentIndex = index;
        updateCarousel(currentIndex);
        resetAutoRotate();
    }

    // Auto rotate every 4 seconds
    function startAutoRotate() {
        autoRotateTimer = setInterval(() => {
            nextImage();
        }, 4000);
    }

    // Reset auto rotate timer when user clicks buttons
    function resetAutoRotate() {
        clearInterval(autoRotateTimer);
        startAutoRotate();
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToImage(index));
    });

    // Start auto rotate on page load
    startAutoRotate();
});

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp button hover effects
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(37, 211, 102, 0.6)';
        this.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
        this.style.transform = 'scale(1)';
    });
});

// ===== SCROLL-TRIGGERED FADE-IN ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.home, .carousel-container, .about-section, .about-card, .home-btn').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// ===== PARALLAX SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const home = document.querySelector('.home');
    if (home) {
        home.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
    
    // Parallax for carousel
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===== MOUSE FOLLOW GLOW EFFECT =====
const createMouseFollowGlow = () => {
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
};

createMouseFollowGlow();

// ===== ENHANCED CARD HOVER EFFECTS =====
document.querySelectorAll('.about-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// ===== BUTTON GLOW ON HOVER =====
document.querySelectorAll('.btn-1, .btn-2, .carousel-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.6)';
        this.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
        this.style.transform = 'scale(1)';
    });
});

// ===== TEXT REVEAL ANIMATION =====
const revealTextAnimation = () => {
    const textElements = document.querySelectorAll('.first-text-home, .title, .subtile, .subtile-2');
    
    textElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `slideInUp 0.8s ease ${index * 0.2}s forwards`;
    });
};

revealTextAnimation();

// ===== NAV LINK UNDERLINE EFFECT =====
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.borderBottom = '2px solid var(--color-text-dark)';
        this.style.paddingBottom = '5px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.borderBottom = 'none';
        this.style.paddingBottom = '0';
    });
});

