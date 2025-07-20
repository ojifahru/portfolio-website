// Multi-language functionality
const translations = {
    id: {
        // Loading
        'loading-text': 'Loading Portfolio...',
        
        // Navigation
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-projects': 'Proyek',
        'nav-contact': 'Kontak',
        
        // Hero Section
        'hero-greeting': '👋 Halo, Saya',
        'hero-title': 'University Web Developer & Server Administrator',
        'hero-typing-prefix': 'Saya adalah ',
        'hero-description': 'Berpengalaman dalam mengembangkan dan mengelola sistem informasi akademik universitas. Spesialis dalam Laravel, CodeIgniter, dan infrastruktur server untuk mendukung ekosistem pendidikan digital.',
        'hero-highlight-1': 'University Systems Expert',
        'hero-highlight-2': 'Laravel & CodeIgniter Specialist',
        'hero-highlight-3': 'Server Security & Management',
        'btn-view-projects': 'Lihat Proyek',
        'btn-contact': 'Hubungi Saya',
        
        // Stats
        'stat-users': 'Pengguna Aktif',
        'stat-projects': 'Proyek',
        'stat-uptime': '% Uptime',
        
        // About Section
        'section-about': 'Tentang Saya',
        'about-title': 'University Web Developer & System Administrator',
        'about-lead': 'Passionate developer dengan dedikasi tinggi dalam membangun solusi teknologi untuk dunia pendidikan.',
        'about-desc-1': 'Saya bekerja untuk sebuah universitas dengan spesialisasi dalam pengembangan dan pengelolaan sistem informasi akademik. Dengan pengalaman mendalam dalam Laravel dan CodeIgniter, saya telah membangun berbagai aplikasi yang mendukung proses pembelajaran dan administrasi universitas.',
        'about-desc-2': 'Selain sebagai developer, saya juga bertanggung jawab dalam mengelola infrastruktur server, VPS, dan memastikan semua sistem berjalan dengan optimal, aman, dan dapat diandalkan 24/7 untuk mendukung ribuan pengguna dalam ekosistem akademik.',
        
        // About Expertise
        'about-expertise-title': '🎓 Sistem Universitas yang Saya Kelola:',
        'expertise-elearning-title': 'E-Learning Platform',
        'expertise-elearning-desc': 'Learning Management System untuk 5000+ mahasiswa',
        'expertise-elibrary-title': 'E-Library System',
        'expertise-elibrary-desc': 'Digital library dengan koleksi ribuan buku dan jurnal',
        'expertise-ejurnal-title': 'E-Jurnal Platform',
        'expertise-ejurnal-desc': 'Publikasi jurnal ilmiah dengan peer review system',
        
        // Personal Info
        'personal-info-title': '📋 Informasi Personal:',
        'info-name-label': 'Nama Lengkap',
        'info-email-label': 'Email',
        'info-location-label': 'Lokasi',
        'info-location-value': 'Brebes, Jawa Tengah, Indonesia',
        'info-position-label': 'Posisi',
        'info-position-value': 'Senior Web Developer & System Admin',
        
        // Quote
        'about-quote-text': '"Teknologi adalah alat yang powerful untuk transformasi pendidikan. Saya berkomitmen membangun sistem yang tidak hanya functional, tapi juga memberikan impact positif bagi dunia akademik."',
        
        // Skills Section
        'section-skills': 'Keahlian',
        'skill-laravel-title': 'Laravel',
        'skill-laravel-desc': 'Framework PHP modern untuk pengembangan aplikasi web yang powerful dan elegant',
        'skill-codeigniter-title': 'CodeIgniter',
        'skill-codeigniter-desc': 'Framework PHP yang ringan dan mudah digunakan untuk rapid development',
        'skill-html5-title': 'HTML5',
        'skill-html5-desc': 'Membuat struktur website yang semantik dan accessible',
        'skill-css3-title': 'CSS3',
        'skill-css3-desc': 'Styling modern dengan flexbox, grid, dan animasi',
        'skill-server-title': 'Server Management',
        'skill-server-desc': 'Mengelola server Linux, VPS, dan konfigurasi web server',
        'skill-database-title': 'Database',
        'skill-database-desc': 'MySQL, PostgreSQL, dan optimasi database performance',
        
        // Projects Section
        'section-projects': 'Proyek Saya',
        'project1-title': 'University Information System',
        'project1-desc': 'Sistem informasi universitas yang terintegrasi, menangani berbagai aspek akademik termasuk manajemen mahasiswa, dosen, dan administrasi.',
        'project2-title': 'Server Management System',
        'project2-desc': 'Sistem manajemen server untuk monitoring dan pengelolaan infrastruktur IT universitas, dengan fitur monitoring real-time dan automation.',
        'project3-title': 'University Academic Systems',
        'project3-desc': 'Pengembangan dan pengelolaan berbagai sistem akademik universitas termasuk E-Learning, E-Library, E-Jurnal, dan SIM-EPK untuk mendukung kegiatan akademik.',
        
        // Contact Section
        'section-contact': 'Hubungi Saya',
        'contact-title': 'Mari Berkolaborasi!',
        'contact-description': 'Saya terbuka untuk peluang kerja baru dan proyek-proyek menarik. Jangan ragu untuk menghubungi saya!',
        
        // Typing animation texts
        'typing-texts': [
            'Laravel Developer 💻',
            'Server Administrator 🖥️', 
            'University IT Specialist 🎓',
            'System Architect 🏗️',
            'E-Learning Expert 📚',
            'Database Administrator 🗄️',
            'DevOps Engineer ⚙️'
        ]
    },
    en: {
        // Loading
        'loading-text': 'Loading Portfolio...',
        
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': '👋 Hello, I\'m',
        'hero-title': 'University Web Developer & Server Administrator',
        'hero-typing-prefix': 'I am a ',
        'hero-description': 'Experienced in developing and managing university academic information systems. Specialist in Laravel, CodeIgniter, and server infrastructure to support digital education ecosystems.',
        'hero-highlight-1': 'University Systems Expert',
        'hero-highlight-2': 'Laravel & CodeIgniter Specialist',
        'hero-highlight-3': 'Server Security & Management',
        'btn-view-projects': 'View Projects',
        'btn-contact': 'Contact Me',
        
        // Stats
        'stat-users': 'Active Users',
        'stat-projects': 'Projects',
        'stat-uptime': '% Uptime',
        
        // About Section
        'section-about': 'About Me',
        'about-title': 'University Web Developer & System Administrator',
        'about-lead': 'Passionate developer with high dedication in building technology solutions for the education world.',
        'about-desc-1': 'I work for a university specializing in developing and managing academic information systems. With deep experience in Laravel and CodeIgniter, I have built various applications that support university learning and administration processes.',
        'about-desc-2': 'Besides being a developer, I am also responsible for managing server infrastructure, VPS, and ensuring all systems run optimally, securely, and reliably 24/7 to support thousands of users in the academic ecosystem.',
        
        // About Expertise
        'about-expertise-title': '🎓 University Systems I Manage:',
        'expertise-elearning-title': 'E-Learning Platform',
        'expertise-elearning-desc': 'Learning Management System for 5000+ students',
        'expertise-elibrary-title': 'E-Library System',
        'expertise-elibrary-desc': 'Digital library with thousands of books and journals collection',
        'expertise-ejurnal-title': 'E-Journal Platform',
        'expertise-ejurnal-desc': 'Scientific journal publication with peer review system',
        
        // Personal Info
        'personal-info-title': '📋 Personal Information:',
        'info-name-label': 'Full Name',
        'info-email-label': 'Email',
        'info-location-label': 'Location',
        'info-location-value': 'Brebes, Central Java, Indonesia',
        'info-position-label': 'Position',
        'info-position-value': 'Senior Web Developer & System Admin',
        
        // Quote
        'about-quote-text': '"Technology is a powerful tool for educational transformation. I am committed to building systems that are not only functional, but also have a positive impact on the academic world."',
        
        // Skills Section
        'section-skills': 'My Skills',
        'skill-laravel-title': 'Laravel',
        'skill-laravel-desc': 'Modern PHP framework for developing powerful and elegant web applications',
        'skill-codeigniter-title': 'CodeIgniter',
        'skill-codeigniter-desc': 'Lightweight and easy-to-use PHP framework for rapid development',
        'skill-html5-title': 'HTML5',
        'skill-html5-desc': 'Creating semantic and accessible website structure',
        'skill-css3-title': 'CSS3',
        'skill-css3-desc': 'Modern styling with flexbox, grid, and animations',
        'skill-server-title': 'Server Management',
        'skill-server-desc': 'Managing Linux servers, VPS, and web server configuration',
        'skill-database-title': 'Database',
        'skill-database-desc': 'MySQL, PostgreSQL, and database performance optimization',
        
        // Projects Section
        'section-projects': 'My Projects',
        'project1-title': 'University Information System',
        'project1-desc': 'Integrated university information system, handling various academic aspects including student, lecturer, and administration management.',
        'project2-title': 'Server Management System',
        'project2-desc': 'Server management system for monitoring and managing university IT infrastructure, with real-time monitoring and automation features.',
        'project3-title': 'University Academic Systems',
        'project3-desc': 'Development and management of various university academic systems including E-Learning, E-Library, E-Journal, and SIM-EPK to support academic activities.',
        
        // Contact Section
        'section-contact': 'Contact Me',
        'contact-title': 'Let\'s Collaborate!',
        'contact-description': 'I am open to new job opportunities and exciting projects. Don\'t hesitate to contact me!',
        
        // Typing animation texts
        'typing-texts': [
            'Laravel Developer 💻',
            'Server Administrator 🖥️', 
            'University IT Specialist 🎓',
            'System Architect 🏗️',
            'E-Learning Expert 📚',
            'Database Administrator 🗄️',
            'DevOps Engineer ⚙️'
        ]
    }
};

let currentLanguage = 'id';

// Language toggle functionality
const languageToggle = document.getElementById('lang-toggle');
const flagElement = languageToggle.querySelector('.flag');
const langTextElement = languageToggle.querySelector('.lang-text');

function updateLanguageButton() {
    if (currentLanguage === 'id') {
        flagElement.textContent = '🇬🇧';
        langTextElement.textContent = 'EN';
    } else {
        flagElement.textContent = '🇮🇩';
        langTextElement.textContent = 'ID';
    }
}

function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-id]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-id');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Update typing animation texts
    typingTexts.length = 0;
    typingTexts.push(...translations[language]['typing-texts']);
    
    // Restart typing animation with new language
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    
    currentLanguage = language;
    updateLanguageButton();
    
    // Save language preference
    localStorage.setItem('preferred-language', language);
}

// Language toggle event listener
languageToggle.addEventListener('click', () => {
    const newLanguage = currentLanguage === 'id' ? 'en' : 'id';
    translatePage(newLanguage);
});

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferred-language') || 'id';
    if (savedLanguage !== 'id') {
        translatePage(savedLanguage);
    }
    updateLanguageButton();
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Particles.js Configuration
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-bg', {
            particles: {
                number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                },
                color: { value: "#ffffff" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});

// Typing Animation
let typingTexts = [
    'Laravel Developer 💻',
    'Server Administrator 🖥️', 
    'University IT Specialist 🎓',
    'System Architect 🏗️',
    'E-Learning Expert 📚',
    'Database Administrator 🗄️',
    'DevOps Engineer ⚙️'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeText() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 200;
        let count = 0;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.ceil(count);
            }
        }, 10);
    });
}

// Intersection Observer for animations
const animationObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate counters when hero section is visible
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
            
            // Add stagger animation to skill cards
            if (entry.target.classList.contains('scale-in')) {
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        }
    });
}, animationObserverOptions);

// Enhanced scroll effects
function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update active nav link with smooth transition
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }
}

// Interactive button effects
function addInteractiveEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .interactive-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s linear;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });
    
    // Add magnetic effect to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Setup fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .hero-stats');
    fadeElements.forEach(el => {
        animationObserver.observe(el);
    });
    
    // Initialize interactive effects
    addInteractiveEffects();
    
    // Initialize language system
    const savedLanguage = localStorage.getItem('preferred-language') || 'id';
    if (savedLanguage !== 'id') {
        translatePage(savedLanguage);
    }
    updateLanguageButton();
    
    // Add smooth scroll behavior to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
});

// Enhanced scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Mohon lengkapi semua field!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Format email tidak valid!');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Pesan berhasil dikirim! Terima kasih atas pesan Anda.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Loading screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skill cards animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards interactive effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const overlay = card.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const overlay = card.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #6c5ce7;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Back to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Portfolio. All rights reserved.`;
}

// Console message for developers
console.log(`
🚀 Portfolio Website
==================
Terima kasih telah mengunjungi source code website ini!
Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript.

Teknologi yang digunakan:
- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

Fitur:
✅ Responsive Design
✅ Smooth Scrolling
✅ Mobile Navigation
✅ Form Validation
✅ Loading Animation
✅ Parallax Effects
✅ Intersection Observer API

© ${currentYear} - Portfolio Website
`);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
    });
}

// ===========================
// 🌓 DARK MODE FUNCTIONALITY
// ===========================
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button icon
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        
        // Trigger custom event
        document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add a nice transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    getTheme() {
        return this.currentTheme;
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// =============================
// 🎨 ENHANCED ANIMATIONS
// =============================
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.addFloatingElements();
        this.addMouseFollower();
        this.addTextGlitchEffect();
        this.addParallaxBackground();
    }

    addFloatingElements() {
        // Create floating geometric shapes
        const shapes = ['circle', 'triangle', 'square'];
        const container = document.querySelector('.hero');
        
        if (!container) return;

        for (let i = 0; i < 6; i++) {
            const shape = document.createElement('div');
            shape.className = `floating-shape floating-${shapes[i % shapes.length]}`;
            shape.style.cssText = `
                position: absolute;
                width: ${Math.random() * 50 + 20}px;
                height: ${Math.random() * 50 + 20}px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: ${shapes[i % shapes.length] === 'circle' ? '50%' : '0'};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                z-index: 1;
            `;
            container.appendChild(shape);
        }
    }

    addMouseFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseout', () => {
            cursor.style.opacity = '0';
        });
    }

    addTextGlitchEffect() {
        const title = document.querySelector('.hero h1');
        if (!title) return;

        title.addEventListener('mouseenter', () => {
            title.style.animation = 'glitch 0.5s ease-in-out';
            setTimeout(() => {
                title.style.animation = '';
            }, 500);
        });
    }

    addParallaxBackground() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Initialize animation manager
const animationManager = new AnimationManager();

// =============================
// 🎯 SKILL FILTERING SYSTEM
// =============================
class SkillFilter {
    constructor() {
        this.filterTabs = document.querySelectorAll('.filter-tab');
        this.skillCards = document.querySelectorAll('.skill-card');
        this.init();
    }

    init() {
        this.filterTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterSkills(filter);
                this.updateActiveTab(e.target);
            });
        });

        // Initialize progress bars on scroll
        this.initProgressBars();
    }

    filterSkills(filter) {
        this.skillCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.display = 'block';
                // Trigger entrance animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    updateActiveTab(activeTab) {
        this.filterTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }

    initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.dataset.progress;
                    
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                    }, 500);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }
}

// Initialize skill filter
const skillFilter = new SkillFilter();

// =============================
// 🎨 ADVANCED INTERACTIONS
// =============================
class InteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.addParticleTrail();
        this.addHoverSoundEffects();
        this.addScrollProgress();
        this.addTypingEffect();
    }

    addParticleTrail() {
        document.addEventListener('mousemove', (e) => {
            // Create particle on random chance
            if (Math.random() < 0.1) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: var(--primary-color);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${e.clientX}px;
                    top: ${e.clientY}px;
                    animation: particleFloat 1s ease-out forwards;
                `;
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1000);
            }
        });
    }

    addHoverSoundEffects() {
        // Add subtle visual feedback for interactive elements
        const interactiveElements = document.querySelectorAll('button, .btn, .skill-card, .project-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.filter = 'brightness(1.1)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.filter = 'brightness(1)';
            });
        });
    }

    addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--gradient-primary);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    addTypingEffect() {
        const typingText = document.querySelector('.typing-text');
        if (!typingText) return;

        const phrases = [
            'Full-Stack Developer',
            'System Administrator', 
            'Laravel Expert',
            'Server Specialist',
            'University Developer'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        type();
    }
}

// Initialize interactive elements
const interactiveElements = new InteractiveElements();

// Add CSS for new animations
const moreStyles = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0);
        }
    }

    .filter-tab {
        position: relative;
        overflow: hidden;
    }

    .filter-tab::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s ease;
    }

    .filter-tab:hover::before {
        left: 100%;
    }

    .typing-text {
        color: var(--accent-color);
        font-weight: 600;
    }

    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;

// Add more styles
const moreStyleSheet = document.createElement('style');
moreStyleSheet.textContent = moreStyles;
document.head.appendChild(moreStyleSheet);

// Add CSS animations
const additionalStyles = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
        75% { transform: translateY(-15px) rotate(270deg); }
    }

    @keyframes glitch {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(2px); }
        60% { transform: translateX(-1px); }
        80% { transform: translateX(1px); }
    }

    .floating-shape {
        opacity: 0.6;
        transition: opacity 0.3s ease;
    }

    .floating-shape:hover {
        opacity: 1;
    }

    .custom-cursor {
        mix-blend-mode: difference;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Testimonial Carousel
function initTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const formData = new FormData(contactForm);
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success feedback
            showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Error feedback
            showNotification('Terjadi kesalahan. Silakan coba lagi nanti.', 'error');
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles for notification
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left: 4px solid #22c55e;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .notification-content i:first-child {
            color: ${type === 'success' ? '#22c55e' : '#ef4444'};
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: #6b7280;
            margin-left: auto;
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const notificationStyleSheet = document.createElement('style');
        notificationStyleSheet.id = 'notification-styles';
        notificationStyleSheet.textContent = notificationStyles;
        document.head.appendChild(notificationStyleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Handle close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Achievement Counter Animation
function initAchievementCounters() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
    
    achievementCards.forEach(card => observer.observe(card));
}

// Enhanced Project Hover Effects
function initProjectEnhancements() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize new components
document.addEventListener('DOMContentLoaded', () => {
    initTestimonialCarousel();
    initContactForm();
    initAchievementCounters();
    initProjectEnhancements();
});
