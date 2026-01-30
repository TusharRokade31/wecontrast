// Import GSAP and ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        this.classList.toggle('active');
    });
}

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ===== GSAP Animations =====
gsap.registerPlugin(ScrollTrigger);

// Hero Title Animation
function initHeroAnimations() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        gsap.from(word, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    gsap.from('.hero-label', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.2
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6
    });

    gsap.from('.hero-ctas', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8
    });

    gsap.from('.hero-stats', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 1
    });

    // Animated blobs
    gsap.to('.blob-1', {
        x: 30,
        y: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.blob-2', {
        x: -30,
        y: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// Service Cards Animation
function initServiceAnimations() {
    const cards = gsap.utils.toArray('.service-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Portfolio Animation
function initPortfolioAnimations() {
    const items = gsap.utils.toArray('.portfolio-item');
    
    items.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Pricing Cards Animation
function initPricingAnimations() {
    const cards = gsap.utils.toArray('.pricing-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 80,
            duration: 0.9,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// About Items Animation
function initAboutAnimations() {
    const items = gsap.utils.toArray('.about-item');
    
    items.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Section Titles Animation
function initSectionTitles() {
    const titles = gsap.utils.toArray('.section-title');
    
    titles.forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Contact Form Animation
function initContactFormAnimation() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        gsap.from(form, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
                trigger: form,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('.btn');
            gsap.to(button, {
                scale: 0.95,
                duration: 0.2,
                onComplete: () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.2
                    });
                    alert('Thank you! We\'ll contact you within 2 hours.');
                    this.reset();
                }
            });
        });
    }
}

// Navbar Scroll Effect
function initNavbarAnimation() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 175, 193, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Button Hover Animations
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3
            });
        });
    });
}

// Stats Counter Animation
function initStatsAnimation() {
    const stats = gsap.utils.toArray('.stat h4');
    
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        
        gsap.from(stat, {
            textContent: 0,
            duration: 2.5,
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                stat.textContent = Math.ceil(this.targets()[0].textContent).toLocaleString();
            }
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    console.log('[v0] Initializing animations');
    
    initHeroAnimations();
    initServiceAnimations();
    initPortfolioAnimations();
    initPricingAnimations();
    initAboutAnimations();
    initSectionTitles();
    initContactFormAnimation();
    initNavbarAnimation();
    initButtonAnimations();
    initStatsAnimation();
    
    ScrollTrigger.refresh();
});

// Refresh on resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
