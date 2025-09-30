/* ===================================
   SECURITY TERMINAL - MAIN SCRIPT
   Version: 1.3.0
   Author: Portfolio System
   =================================== */

// Application State
const AppState = {
    currentTheme: 'light',
    isMobileMenuOpen: false,
    currentProjectFilter: 'completed',
    isResumeModalOpen: false
};

// Application state for certificate filtering
let currentCertFilter = 'all';

// Project Data Structure
const ProjectsData = {
    completed: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "Developed a fully responsive personal portfolio to showcase skills and projects, featuring a clean UI and personalized theme. Implemented the website using GSAP library for animated backgrounds, contents and layout of the page.",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            status: "completed",
            liveUrl: "https://github.com/saviour2/portfolio",
            githubUrl: "https://github.com/saviour2/portfolio"
        },
        {
            id: 2,
            title: "E-Commerce Application", 
            description: "Built a functional desktop e-commerce application with distinct portals for customers and sellers. Implemented a MySQL database to manage user authentication, product listings, wishlists, and cart data.",
            technologies: ["Java", "JavaFX", "MySQL"],
            status: "completed",
            liveUrl: "https://github.com/saviour2/minipro",
            githubUrl: "https://github.com/saviour2/minipro"
        }
    ],
    inProgress: [
        {
            id: 3,
            title: "Portfolio Website v2.0",
            description: "Redesigning and enhancing the portfolio website with advanced animations, certificate categorization system, and improved user experience. Features dual-theme support and modern security terminal aesthetic.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "GSAP"],
            status: "in-progress",
            imageUrl: "assets/Files/Terminal_Portfolio.png",
            githubUrl: "https://github.com/saviour2/WebDev"
        },
        {
            id: 4,
            title: "Google Student Ambassador Program",
            description: "Leading AI workshops, organizing tech events, and driving conversations around AI innovation among peers as part of Google's student leadership program.",
            technologies: ["AI", "Community Building", "Event Management", "Leadership"],
            status: "in-progress",
            githubUrl: "https://github.com/saikatdas0790"
        },
        {
            id: 5,
            title: "IBM SkillsBuild Internship",
            description: "Completing a comprehensive 6-week intensive internship focused on modern Front-End Web Development practices under the guidance of industry mentors.",
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "Modern Frontend"],
            status: "in-progress",
            githubUrl: "https://github.com/saikatdas0790"
        }
    ],
    planned: [
        {
            id: 6,
            title: "Automated Cloud Security Scanner",
            description: "Build an automated security scanner for cloud infrastructure. Will include vulnerability assessment, compliance checking, and real-time alerting capabilities.",
            technologies: ["Python", "AWS/Azure", "Security APIs", "Docker"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 7,
            title: "Simple REST API (Book/Movie Catalog)",
            description: "Develop a comprehensive REST API for managing book and movie catalogs with full CRUD operations, user authentication, and database integration.",
            technologies: ["Node.js", "Express", "MongoDB", "JWT", "RESTful APIs"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 8,
            title: "Basic User Authentication System",
            description: "Implement a secure user authentication system with registration, login, password reset, and session management features.",
            technologies: ["Node.js", "Express", "MongoDB", "bcrypt", "JWT"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 9,
            title: "Web Scraper & Data Aggregator",
            description: "Create an intelligent web scraper to collect and aggregate data from multiple sources with data processing and visualization capabilities.",
            technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas", "SQLite"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 10,
            title: "Containerized Backend Deployment",
            description: "Containerize and deploy a backend application on cloud VM with Docker, implementing CI/CD pipeline and monitoring.",
            technologies: ["Docker", "Docker Compose", "AWS/GCP", "CI/CD", "Monitoring"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 11,
            title: "Simple Serverless Web App",
            description: "Build a serverless web application using cloud functions, demonstrating modern cloud-native development practices.",
            technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 12,
            title: "Terraform Infrastructure Lab",
            description: "Hands-on Infrastructure as Code project using Terraform to provision and manage cloud resources with best practices.",
            technologies: ["Terraform", "AWS/Azure", "IaC", "Git", "CI/CD"],
            status: "planned",
            timeline: "Q3 2026"
        },
        {
            id: 13,
            title: "Automated Backup Script",
            description: "Develop a comprehensive backup solution with automated scheduling, encryption, and cloud storage integration.",
            technologies: ["Python", "Cron", "Cloud Storage", "Encryption", "Logging"],
            status: "planned",
            timeline: "Q3 2026"
        },
        {
            id: 14,
            title: "Secure CI/CD Pipeline",
            description: "Implement a secure continuous integration and deployment pipeline with vulnerability scanning and automated testing.",
            technologies: ["GitHub Actions", "Docker", "Security Scanning", "SAST", "DAST"],
            status: "planned",
            timeline: "Q4 2026"
        },
        {
            id: 15,
            title: "Infrastructure as Code Deployment",
            description: "Deploy a complete application stack using Infrastructure as Code principles with Terraform and cloud best practices.",
            technologies: ["Terraform", "Kubernetes", "Helm", "AWS/GCP", "GitOps"],
            status: "planned",
            timeline: "Q4 2026"
        }
    ]
};

// DOM Elements Cache
const DOMElements = {
    // Theme Toggle
    themeToggle: null,
    
    // Mobile Menu
    mobileMenuBtn: null,
    mobileMenu: null,
    
    // Resume Modal
    resumeBtn: null,
    resumeModal: null,
    resumeCloseBtn: null,
    
    // Project Filtering
    projectTabs: null,
    projectGrid: null,
    
    // Navigation Links
    navLinks: null,
    
    // Scroll Elements
    scrollElements: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('🚀 Security Terminal Initializing...');
    
    // Cache DOM elements
    cacheDOMElements();
    
    // Initialize all features
    initializeTheme();
    initializeMobileMenu();
    initializeResumeModal();
    initializeProjectFiltering();
    initializeCertificateFiltering();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    
    console.log('✅ Security Terminal Online - All Systems Operational');
}

function cacheDOMElements() {
    DOMElements.themeToggle = document.getElementById('theme-toggle');
    DOMElements.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    DOMElements.mobileMenu = document.getElementById('mobile-menu');
    DOMElements.resumeBtn = document.getElementById('resume-btn');
    DOMElements.resumeModal = document.getElementById('resume-modal');
    DOMElements.resumeCloseBtn = document.getElementById('close-modal');
    DOMElements.projectTabs = document.querySelectorAll('.project-filter-btn');
    DOMElements.projectGrid = document.getElementById('projects-grid');
    DOMElements.certificationsGrid = document.getElementById('certifications-grid');
    DOMElements.navLinks = document.querySelectorAll('.nav-link');
    DOMElements.scrollElements = document.querySelectorAll('.fade-in, .slide-up');
}

// =====================================
// THEME MANAGEMENT
// =====================================

function initializeTheme() {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    AppState.currentTheme = savedTheme;
    
    // Apply theme
    applyTheme(savedTheme);
    
    // Add event listeners
    if (DOMElements.themeToggle) {
        DOMElements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Add mobile theme toggle listener
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const newTheme = AppState.currentTheme === 'light' ? 'dark' : 'light';
    AppState.currentTheme = newTheme;
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add visual feedback
    DOMElements.themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        DOMElements.themeToggle.style.transform = 'scale(1)';
    }, 150);
}

function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    
    // Update theme toggle icon
    updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
    // Update desktop theme toggle
    const sunIcon = DOMElements.themeToggle?.querySelector('.fa-sun');
    const moonIcon = DOMElements.themeToggle?.querySelector('.fa-moon');
    
    // Update mobile theme toggle
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    const mobileSunIcon = mobileThemeToggle?.querySelector('.fa-sun');
    const mobileMoonIcon = mobileThemeToggle?.querySelector('.fa-moon');
    
    if (theme === 'dark') {
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
        mobileSunIcon?.classList.remove('hidden');
        mobileMoonIcon?.classList.add('hidden');
    } else {
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
        mobileSunIcon?.classList.add('hidden');
        mobileMoonIcon?.classList.remove('hidden');
    }
}

// =====================================
// MOBILE MENU MANAGEMENT
// =====================================

function initializeMobileMenu() {
    if (DOMElements.mobileMenuBtn && DOMElements.mobileMenu) {
        DOMElements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking nav links
        const mobileNavLinks = DOMElements.mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (AppState.isMobileMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (AppState.isMobileMenuOpen && 
                !DOMElements.mobileMenu.contains(e.target) && 
                !DOMElements.mobileMenuBtn.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;
    
    const menuIcon = DOMElements.mobileMenuBtn.querySelector('i');
    
    if (AppState.isMobileMenuOpen) {
        DOMElements.mobileMenu.classList.remove('hidden');
        DOMElements.mobileMenu.style.maxHeight = DOMElements.mobileMenu.scrollHeight + 'px';
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        DOMElements.mobileMenu.style.maxHeight = '0';
        menuIcon.classList.replace('fa-times', 'fa-bars');
        
        setTimeout(() => {
            DOMElements.mobileMenu.classList.add('hidden');
        }, 300);
    }
}

// =====================================
// RESUME MODAL MANAGEMENT
// =====================================

function initializeResumeModal() {
    if (DOMElements.resumeBtn && DOMElements.resumeModal) {
        DOMElements.resumeBtn.addEventListener('click', openResumeModal);
        
        if (DOMElements.resumeCloseBtn) {
            DOMElements.resumeCloseBtn.addEventListener('click', closeResumeModal);
        }
        
        // Close modal when clicking backdrop
        DOMElements.resumeModal.addEventListener('click', (e) => {
            if (e.target === DOMElements.resumeModal) {
                closeResumeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && AppState.isResumeModalOpen) {
                closeResumeModal();
            }
        });
    }
}

function openResumeModal() {
    AppState.isResumeModalOpen = true;
    DOMElements.resumeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    requestAnimationFrame(() => {
        DOMElements.resumeModal.classList.add('opacity-100');
        const modalContent = DOMElements.resumeModal.querySelector('.bg-white, .dark\\:bg-gray-800');
        modalContent?.classList.add('scale-100');
    });
}

function closeResumeModal() {
    AppState.isResumeModalOpen = false;
    DOMElements.resumeModal.classList.remove('opacity-100');
    const modalContent = DOMElements.resumeModal.querySelector('.bg-white, .dark\\:bg-gray-800');
    modalContent?.classList.remove('scale-100');
    
    setTimeout(() => {
        DOMElements.resumeModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// =====================================
// PROJECT FILTERING SYSTEM
// =====================================

function initializeProjectFiltering() {
    if (DOMElements.projectTabs.length > 0 && DOMElements.projectGrid) {
        DOMElements.projectTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = tab.dataset.filter;
                if (filter && filter !== AppState.currentProjectFilter) {
                    switchProjectFilter(filter);
                }
            });
        });
        
        // Load initial projects
        switchProjectFilter('completed');
    }
}

function switchProjectFilter(filter) {
    AppState.currentProjectFilter = filter;
    
    // Update active tab
    DOMElements.projectTabs.forEach(tab => {
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
            tab.classList.add('text-cloud-primary', 'dark:text-cyber-primary');
            tab.classList.remove('text-gray-600', 'dark:text-gray-400');
        } else {
            tab.classList.remove('active');
            tab.classList.remove('text-cloud-primary', 'dark:text-cyber-primary');
            tab.classList.add('text-gray-600', 'dark:text-gray-400');
        }
    });
    
    // Render projects
    renderProjects(filter);
}

function renderProjects(filter) {
    const projects = ProjectsData[filter] || [];
    
    if (!DOMElements.projectGrid) return;
    
    // Add fade-out effect
    DOMElements.projectGrid.style.opacity = '0';
    
    setTimeout(() => {
        DOMElements.projectGrid.innerHTML = '';
        
        if (projects.length === 0) {
            DOMElements.projectGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-folder-open text-4xl text-gray-400 dark:text-gray-600 mb-4"></i>
                    <p class="text-gray-500 dark:text-gray-400 text-lg">No projects in this category yet.</p>
                </div>
            `;
        } else {
            projects.forEach(project => {
                const projectCard = createProjectCard(project);
                DOMElements.projectGrid.appendChild(projectCard);
            });
        }
        
        // Fade-in effect
        DOMElements.projectGrid.style.opacity = '1';
    }, 150);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2';
    
    const statusBadge = getStatusBadge(project.status);
    const technologies = project.technologies.map(tech => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">${tech}</span>`).join('');
    
    const liveButton = project.liveUrl ? 
        `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-cloud-primary dark:bg-cyber-primary text-white rounded-lg text-sm hover:shadow-lg transition-all">
            <i class="fas fa-external-link-alt mr-2"></i>Live Demo
        </a>` : '';
    
    const githubButton = project.githubUrl ? 
        `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm hover:shadow-lg transition-all">
            <i class="fab fa-github mr-2"></i>GitHub
        </a>` : '';
    
    // Add project image if available
    const projectImage = project.imageUrl ? 
        `<div class="mb-4 rounded-lg overflow-hidden">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
        </div>` : '';
    
    // Add timeline for planned projects
    const timeline = project.timeline ? 
        `<div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <i class="fas fa-calendar-alt mr-1"></i>Timeline: ${project.timeline}
        </div>` : '';
    
    card.innerHTML = `
        ${projectImage}
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cloud-primary dark:group-hover:text-cyber-primary transition-colors">
                ${project.title}
            </h3>
            ${statusBadge}
        </div>
        
        ${timeline}
        
        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            ${project.description}
        </p>
        
        <div class="flex flex-wrap gap-2 mb-6">
            ${technologies}
        </div>
        
        <div class="flex gap-3">
            ${liveButton}
            ${githubButton}
        </div>
    `;
    
    return card;
}

function getStatusBadge(status) {
    const badges = {
        completed: '<span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">✅ Completed</span>',
        'in-progress': '<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">🔄 In Progress</span>',
        planned: '<span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full">📋 Planned</span>'
    };
    
    return badges[status] || '';
}

// =====================================
// CERTIFICATE FILTERING
// =====================================

function initializeCertificateFiltering() {
    const filterButtons = document.querySelectorAll('.cert-filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterCertificates(filter);
                updateCertFilterActiveState(this);
            });
        });
    }
}

function filterCertificates(filter) {
    currentCertFilter = filter;
    const certificates = document.querySelectorAll('.cert-card[data-category]');
    
    certificates.forEach(cert => {
        const category = cert.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            cert.style.display = 'block';
            cert.classList.remove('hidden');
        } else {
            cert.style.display = 'none';
            cert.classList.add('hidden');
        }
    });
}

function updateCertFilterActiveState(activeButton) {
    // Remove active class from all buttons
    document.querySelectorAll('.cert-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeButton.classList.add('active');
}

// =====================================
// SCROLL ANIMATIONS
// =====================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in classes
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up, section');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// =====================================
// SMOOTH SCROLLING
// =====================================

function initializeSmoothScrolling() {
    // Smooth scroll for navigation links
    DOMElements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add active navigation highlighting
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            DOMElements.navLinks.forEach(link => {
                link.classList.remove('text-cloud-primary', 'dark:text-cyber-primary');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-cloud-primary', 'dark:text-cyber-primary');
                }
            });
        }
    });
}

// =====================================
// UTILITY FUNCTIONS
// =====================================

// Sanitize user input (for future backend integration)
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console security message
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    🔒 SECURITY TERMINAL                      ║
║                      ACCESS GRANTED                          ║
║                                                              ║
║  This is a secure system. All activities are monitored.      ║
║  Portfolio Version: 1.5.0                                    ║
║  Made with love and care by Saikat :3                        ║
╚══════════════════════════════════════════════════════════════╝
`);

// Export for potential future module usage
window.SecurityTerminal = {
    AppState,
    ProjectsData,
    toggleTheme,
    switchProjectFilter
};
