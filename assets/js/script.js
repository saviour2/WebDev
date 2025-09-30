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
    "completed": [
        {
            id: 1,
            title: "Portfolio Website v1.0",
            description: "Successfully designed and developed a modern, responsive portfolio website with advanced animations, certificate categorization system, and improved user experience. Features dual-theme support and modern security terminal aesthetic with fully functional project filtering.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
            status: "completed",
            imageUrl: "assets/Files/Terminal_Portfolio.png",
            liveUrl: "https://saviour2.github.io/WebDev/",
            githubUrl: "https://github.com/saviour2/WebDev"
        }
    ],
    "in-progress": [
        
    ],
    "planned": [
        {
            id: 2,
            title: "Automated Cloud Security Scanner",
            description: "Build an automated security scanner for cloud infrastructure. Will include vulnerability assessment, compliance checking, and real-time alerting capabilities.",
            technologies: ["Python", "AWS/Azure", "Security APIs", "Docker"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 3,
            title: "Simple REST API (Book/Movie Catalog)",
            description: "Develop a comprehensive REST API for managing book and movie catalogs with full CRUD operations, user authentication, and database integration.",
            technologies: ["Node.js", "Express", "MongoDB", "JWT", "RESTful APIs"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 4,
            title: "Basic User Authentication System",
            description: "Implement a secure user authentication system with registration, login, password reset, and session management features.",
            technologies: ["Node.js", "Express", "MongoDB", "bcrypt", "JWT"],
            status: "planned",
            timeline: "Q4 2025"
        },
        {
            id: 5,
            title: "Web Scraper & Data Aggregator",
            description: "Create an intelligent web scraper to collect and aggregate data from multiple sources with data processing and visualization capabilities.",
            technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas", "SQLite"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 6,
            title: "Containerized Backend Deployment",
            description: "Containerize and deploy a backend application on cloud VM with Docker, implementing CI/CD pipeline and monitoring.",
            technologies: ["Docker", "Docker Compose", "AWS/GCP", "CI/CD", "Monitoring"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 7,
            title: "Simple Serverless Web App",
            description: "Build a serverless web application using cloud functions, demonstrating modern cloud-native development practices.",
            technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation"],
            status: "planned",
            timeline: "Q1 2026"
        },
        {
            id: 8,
            title: "Terraform Infrastructure Lab",
            description: "Hands-on Infrastructure as Code project using Terraform to provision and manage cloud resources with best practices.",
            technologies: ["Terraform", "AWS/Azure", "IaC", "Git", "CI/CD"],
            status: "planned",
            timeline: "Q3 2026"
        },
        {
            id: 9,
            title: "Automated Backup Script",
            description: "Develop a comprehensive backup solution with automated scheduling, encryption, and cloud storage integration.",
            technologies: ["Python", "Cron", "Cloud Storage", "Encryption", "Logging"],
            status: "planned",
            timeline: "Q3 2026"
        },
        {
            id: 10,
            title: "Secure CI/CD Pipeline",
            description: "Implement a secure continuous integration and deployment pipeline with vulnerability scanning and automated testing.",
            technologies: ["GitHub Actions", "Docker", "Security Scanning", "SAST", "DAST"],
            status: "planned",
            timeline: "Q4 2026"
        },
        {
            id: 11,
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
        
        // Initialize zoom functionality and protection
        initializeResumeProtection();
    }
}

function openResumeModal() {
    AppState.isResumeModalOpen = true;
    DOMElements.resumeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Reset zoom and position
    currentZoom = 1;
    imagePosition.x = 0;
    imagePosition.y = 0;
    isDragging = false;
    
    // Add fade-in animation
    requestAnimationFrame(() => {
        DOMElements.resumeModal.classList.add('opacity-100');
        const modalContent = DOMElements.resumeModal.querySelector('.bg-white, .dark\\:bg-gray-800');
        modalContent?.classList.add('scale-100');
        
        // Re-initialize protection after modal is visible
        setTimeout(() => {
            console.log('🔄 Re-initializing resume protection');
            initializeResumeProtection();
        }, 100);
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
    // Verify DOM elements exist
    if (!DOMElements.projectGrid) {
        console.error('Project grid element not found! ID: projects-grid');
        return;
    }
    
    if (!DOMElements.projectTabs || DOMElements.projectTabs.length === 0) {
        console.error('Project filter buttons not found! Class: project-filter-btn');
        return;
    }
    
    // Add event listeners to filter buttons
    DOMElements.projectTabs.forEach((tab, index) => {
        const filter = tab.dataset.filter;
        if (!filter) {
            console.error(`Project tab ${index} missing data-filter attribute`);
            return;
        }
        
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            if (filter !== AppState.currentProjectFilter) {
                switchProjectFilter(filter);
            }
        });
    });
    
    // Load initial projects with error handling
    try {
        switchProjectFilter('completed');
    } catch (error) {
        console.error('Failed to initialize project filtering:', error);
        // Fallback: try to display any projects
        renderProjects('completed');
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
    // Validate filter parameter
    if (!filter || typeof filter !== 'string') {
        console.error('Invalid filter parameter:', filter);
        return;
    }
    
    // Get projects for the filter
    const projects = ProjectsData[filter] || [];
    
    if (!DOMElements.projectGrid) {
        console.error('❌ Project grid element not found!');
        return;
    }
    
    // Clear grid with smooth transition
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
            projects.forEach((project, index) => {
                const projectCard = createProjectCard(project);
                if (projectCard) {
                    DOMElements.projectGrid.appendChild(projectCard);
                    // Add show class with staggered delay for animation
                    setTimeout(() => {
                        projectCard.classList.add('show');
                    }, index * 100 + 100);
                }
            });
        }
        
        // Fade in with delay and ensure section is visible
        setTimeout(() => {
            DOMElements.projectGrid.style.opacity = '1';
            // Ensure projects section is visible
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.classList.add('projects-loaded', 'fade-in');
            }
            // Debug: Check final state
            console.log('✅ Projects rendered. Grid children:', DOMElements.projectGrid.children.length);
        }, 50);
    }, 150);
}

function createProjectCard(project) {
    if (!project) {
        console.error('Invalid project data');
        return null;
    }
    
    // Validate and sanitize project data
    const safeProject = {
        title: sanitizeInput(project.title || ''),
        description: sanitizeInput(project.description || ''),
        technologies: Array.isArray(project.technologies) ? project.technologies.map(tech => sanitizeInput(tech)) : [],
        status: project.status || 'planned',
        liveUrl: isValidUrl(project.liveUrl) ? project.liveUrl : null,
        githubUrl: isValidUrl(project.githubUrl) ? project.githubUrl : null,
        imageUrl: isValidUrl(project.imageUrl) ? project.imageUrl : null,
        timeline: project.timeline ? sanitizeInput(project.timeline) : null
    };
    
    const card = document.createElement('div');
    card.className = 'project-card group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2';
    
    // Create elements safely using createElement
    const cardContent = document.createElement('div');
    
    // Add project image if available
    if (safeProject.imageUrl) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'mb-4 rounded-lg overflow-hidden';
        const img = document.createElement('img');
        img.src = safeProject.imageUrl;
        img.alt = safeProject.title;
        img.className = 'w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105';
        imageContainer.appendChild(img);
        cardContent.appendChild(imageContainer);
    }
    
    // Header with title and status
    const header = document.createElement('div');
    header.className = 'flex justify-between items-start mb-4';
    
    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cloud-primary dark:group-hover:text-cyber-primary transition-colors';
    title.textContent = safeProject.title;
    
    const statusBadge = createStatusBadge(safeProject.status);
    
    header.appendChild(title);
    if (statusBadge) header.appendChild(statusBadge);
    cardContent.appendChild(header);
    
    // Timeline for planned projects
    if (safeProject.timeline) {
        const timelineDiv = document.createElement('div');
        timelineDiv.className = 'text-sm text-gray-500 dark:text-gray-400 mb-2';
        const icon = document.createElement('i');
        icon.className = 'fas fa-calendar-alt mr-1';
        timelineDiv.appendChild(icon);
        timelineDiv.appendChild(document.createTextNode(`Timeline: ${safeProject.timeline}`));
        cardContent.appendChild(timelineDiv);
    }
    
    // Description
    const description = document.createElement('p');
    description.className = 'text-gray-600 dark:text-gray-300 mb-4 leading-relaxed';
    description.textContent = safeProject.description;
    cardContent.appendChild(description);
    
    // Technologies
    const techContainer = document.createElement('div');
    techContainer.className = 'flex flex-wrap gap-2 mb-6';
    safeProject.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.className = 'px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full';
        techSpan.textContent = tech;
        techContainer.appendChild(techSpan);
    });
    cardContent.appendChild(techContainer);
    
    // Buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex gap-3';
    
    if (safeProject.liveUrl) {
        const liveButton = createSecureButton(safeProject.liveUrl, 'Live Demo', 'fas fa-external-link-alt', 'bg-cloud-primary dark:bg-cyber-primary');
        buttonContainer.appendChild(liveButton);
    }
    
    if (safeProject.githubUrl) {
        const githubButton = createSecureButton(safeProject.githubUrl, 'GitHub', 'fab fa-github', 'bg-gray-800 dark:bg-gray-700');
        buttonContainer.appendChild(githubButton);
    }
    
    cardContent.appendChild(buttonContainer);
    card.appendChild(cardContent);
    
    return card;
}

// Security helper functions
function isValidUrl(url) {
    if (!url) return false;
    
    // Allow relative URLs for local assets
    if (url.startsWith('assets/') || url.startsWith('./') || url.startsWith('../')) {
        return true;
    }
    
    // Validate absolute URLs
    try {
        const urlObj = new URL(url);
        return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
        return false;
    }
}

function createSecureButton(url, text, iconClass, bgClass) {
    const button = document.createElement('a');
    button.href = url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.className = `inline-flex items-center px-4 py-2 ${bgClass} text-white rounded-lg text-sm hover:shadow-lg transition-all`;
    
    const icon = document.createElement('i');
    icon.className = `${iconClass} mr-2`;
    
    button.appendChild(icon);
    button.appendChild(document.createTextNode(text));
    
    return button;
}

function createStatusBadge(status) {
    const badges = {
        completed: { text: '✅ Completed', classes: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' },
        'in-progress': { text: '🔄 In Progress', classes: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' },
        planned: { text: '📋 Planned', classes: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' }
    };
    
    const badgeInfo = badges[status];
    if (!badgeInfo) return null;
    
    const badge = document.createElement('span');
    badge.className = `px-3 py-1 ${badgeInfo.classes} text-xs font-medium rounded-full`;
    badge.textContent = badgeInfo.text;
    
    return badge;
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

// Resume protection and zoom functionality
let currentZoom = 1;
const minZoom = 0.5;
const maxZoom = 3;
const zoomStep = 0.25;
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let imagePosition = { x: 0, y: 0 };

function initializeResumeProtection() {
    const resumeImage = document.getElementById('resume-image');
    const resumeContainer = document.getElementById('resume-container');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const resetZoomBtn = document.getElementById('reset-zoom');
    
    if (!resumeImage || !resumeContainer) {
        console.log('❌ Resume elements not found');
        return;
    }
    
    console.log('✅ Resume protection initialized');
    
    // Set initial properties
    resumeImage.draggable = false;
    resumeImage.style.pointerEvents = 'auto'; // Ensure mouse events work
    
    // Disable right-click context menu (but don't block mousedown)
    resumeContainer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Disable native drag
    resumeImage.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
    
    // Simplified and robust drag functionality
    let dragHandler = {
        handleMouseDown: function(e) {
            if (currentZoom > 1) {
                isDragging = true;
                dragStart.x = e.clientX - imagePosition.x;
                dragStart.y = e.clientY - imagePosition.y;
                resumeImage.style.cursor = 'grabbing';
                resumeContainer.style.userSelect = 'none';
                console.log('🟢 Drag started:', { zoom: currentZoom, start: dragStart });
                e.preventDefault();
                e.stopPropagation();
            }
        },
        
        handleMouseMove: function(e) {
            if (isDragging && currentZoom > 1) {
                imagePosition.x = e.clientX - dragStart.x;
                imagePosition.y = e.clientY - dragStart.y;
                
                // Apply reasonable constraints
                const maxMove = 150;
                imagePosition.x = Math.max(-maxMove, Math.min(maxMove, imagePosition.x));
                imagePosition.y = Math.max(-maxMove, Math.min(maxMove, imagePosition.y));
                
                // Direct transform application for immediate response
                resumeImage.style.transform = `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${currentZoom})`;
                resumeImage.style.transition = 'none';
                
                console.log('🔄 Dragging:', imagePosition);
                e.preventDefault();
            }
        },
        
        handleMouseUp: function(e) {
            if (isDragging) {
                isDragging = false;
                resumeContainer.style.userSelect = '';
                if (currentZoom > 1) {
                    resumeImage.style.cursor = 'grab';
                } else {
                    resumeImage.style.cursor = 'default';
                }
                console.log('🔴 Drag ended at:', imagePosition);
            }
        }
    };
    
    // Remove any existing listeners and add new ones
    resumeImage.addEventListener('mousedown', dragHandler.handleMouseDown);
    document.addEventListener('mousemove', dragHandler.handleMouseMove);
    document.addEventListener('mouseup', dragHandler.handleMouseUp);
    
    // Disable keyboard shortcuts for saving/copying
    document.addEventListener('keydown', (e) => {
        if (AppState.isResumeModalOpen) {
            // Disable Ctrl+S, Ctrl+A, Ctrl+C, F12, etc.
            if ((e.ctrlKey || e.metaKey) && ['s', 'a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                return false;
            }
            // Disable F12 (Developer Tools)
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
        }
    });
    
    // Zoom functionality
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            console.log('🔍 Zoom In clicked');
            if (currentZoom < maxZoom) {
                currentZoom += zoomStep;
                console.log('📈 New zoom:', currentZoom);
                applyZoom();
            }
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (currentZoom > minZoom) {
                currentZoom -= zoomStep;
                applyZoom();
            }
        });
    }
    
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', () => {
            currentZoom = 1;
            imagePosition.x = 0;
            imagePosition.y = 0;
            applyZoom();
        });
    }
    
    // Mouse wheel zoom
    resumeContainer.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
            if (e.deltaY < 0 && currentZoom < maxZoom) {
                currentZoom += zoomStep;
                applyZoom();
            } else if (e.deltaY > 0 && currentZoom > minZoom) {
                currentZoom -= zoomStep;
                applyZoom();
            }
        }
    });
}

function applyZoom() {
    const resumeImage = document.getElementById('resume-image');
    if (resumeImage) {
        // Only apply transform if we're not actively dragging (to avoid conflicts)
        if (!isDragging) {
            const transform = `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${currentZoom})`;
            resumeImage.style.transform = transform;
            resumeImage.style.transformOrigin = 'center center';
            resumeImage.style.transition = 'transform 0.3s ease';
        }
        
        // Cursor and behavior management
        if (currentZoom > 1) {
            resumeImage.style.cursor = isDragging ? 'grabbing' : 'grab';
        } else {
            resumeImage.style.cursor = 'default';
            // Reset position when zoomed out completely
            if (currentZoom === 1) {
                imagePosition.x = 0;
                imagePosition.y = 0;
                resumeImage.style.transform = `translate(0px, 0px) scale(1)`;
            }
        }
        
        console.log('📏 Zoom applied:', { zoom: currentZoom, position: imagePosition, dragging: isDragging });
    }
}

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
