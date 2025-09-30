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

// Certifications Data Structure
const CertificationsData = [
    // Google Certifications
    {
        id: 1,
        title: "Google Cloud Technical Series",
        issuer: "Google Cloud",
        date: "2024",
        icon: "fab fa-google",
        image: "assets/certificates/Google/Cloud Technical Series.jpg"
    },
    
    // Microsoft Learn Certifications
    {
        id: 2,
        title: "ASP.NET Core Web Development",
        issuer: "Microsoft Learn",
        date: "2024",
        icon: "fab fa-microsoft",
        image: "assets/certificates/Microsoft/first ASP.NET Core web app.pdf"
    },
    {
        id: 3,
        title: "React Development",
        issuer: "Microsoft Learn",
        date: "2024",
        icon: "fab fa-react",
        image: "assets/certificates/Microsoft/React.pdf"
    },
    {
        id: 4,
        title: "MEAN Stack Development",
        issuer: "Microsoft Learn",
        date: "2024",
        icon: "fab fa-node-js",
        image: "assets/certificates/Microsoft/MEAN stack.pdf"
    },
    {
        id: 5,
        title: "HTML and CSS Fundamentals",
        issuer: "Microsoft Learn",
        date: "2024",
        icon: "fab fa-html5",
        image: "assets/certificates/Microsoft/HTML and CSS.pdf"
    },
    {
        id: 6,
        title: "Web Accessibility",
        issuer: "Microsoft Learn",
        date: "2024",
        icon: "fas fa-universal-access",
        image: "assets/certificates/Microsoft/Basic Web Accessibility.pdf"
    },
    
    // IBM Certifications
    {
        id: 7,
        title: "GitHub Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "2024",
        icon: "fab fa-github",
        image: "assets/certificates/IBM/GitHub.pdf"
    },
    {
        id: 8,
        title: "Web Applications Development",
        issuer: "IBM SkillsBuild",
        date: "2024",
        icon: "fas fa-globe",
        image: "assets/certificates/IBM/Web Apps.pdf"
    },
    {
        id: 9,
        title: "SkillsBuild Orientation",
        issuer: "IBM Edunet Foundation",
        date: "2024",
        icon: "fab fa-ibm",
        image: "assets/certificates/IBM/Edunet - SkillsBuild Orientatio _ SkillsBuild copy.pdf"
    },
    
    // Forage Certifications - Virtual Work Experience
    {
        id: 10,
        title: "Cybersecurity Virtual Experience",
        issuer: "Deloitte - Forage",
        date: "2024",
        icon: "fas fa-shield-alt",
        image: "assets/certificates/Forage/Deloitte/Cyber.pdf"
    },
    {
        id: 11,
        title: "Data Analytics Virtual Experience",
        issuer: "Deloitte - Forage",
        date: "2024",
        icon: "fas fa-chart-bar",
        image: "assets/certificates/Forage/Deloitte/Data Analytics.pdf"
    },
    
    // Infosys Springboard Certifications
    {
        id: 12,
        title: "HTML5 Fundamentals",
        issuer: "Infosys Springboard",
        date: "2024",
        icon: "fab fa-html5",
        image: "assets/certificates/Infosys/HTML5.pdf"
    },
    {
        id: 13,
        title: "CSS3 Styling",
        issuer: "Infosys Springboard", 
        date: "2024",
        icon: "fab fa-css3-alt",
        image: "assets/certificates/Infosys/CSS3.pdf"
    },
    {
        id: 14,
        title: "JavaScript Programming",
        issuer: "Infosys Springboard",
        date: "2024",
        icon: "fab fa-js-square",
        image: "assets/certificates/Infosys/Javascript.pdf"
    },
    {
        id: 15,
        title: "Professional Email Writing",
        issuer: "Infosys Springboard",
        date: "2024",
        icon: "fas fa-envelope",
        image: "assets/certificates/Infosys/Email writing.pdf"
    },
    {
        id: 16,
        title: "Time Management",
        issuer: "Infosys Springboard",
        date: "2024",
        icon: "fas fa-clock",
        image: "assets/certificates/Infosys/Time Management.pdf"
    },
    
    // Scaler Academy
    {
        id: 17,
        title: "React Bootcamp",
        issuer: "Scaler Academy",
        date: "2024",
        icon: "fab fa-react",
        image: "assets/certificates/Scaler/React Bootcamp.png"
    },
    
    // HP Life Learning
    {
        id: 18,
        title: "AI for Beginners",
        issuer: "HP Life",
        date: "2024",
        icon: "fas fa-robot",
        image: "assets/certificates/HP Life/AI for Beginners.pdf"
    },
    
    // College Achievement
    {
        id: 19,
        title: "Phantom JIS CTF Competition",
        issuer: "College/University",
        date: "2024",
        icon: "fas fa-trophy",
        image: "assets/certificates/College/Phantom JIS CTF.png"
    },
    
    // Let's Upgrade Certifications
    {
        id: 20,
        title: "Data Structures & Algorithms",
        issuer: "Let's Upgrade",
        date: "2024",
        icon: "fas fa-code",
        image: "assets/certificates/Let's Upgrade/LUEDSAMAY125522.pdf"
    },
    {
        id: 21,
        title: "JavaScript Programming",
        issuer: "Let's Upgrade", 
        date: "2024",
        icon: "fab fa-js-square",
        image: "assets/certificates/Let's Upgrade/LUEJSMAY125875.pdf"
    },
    
    // Outskill Certification
    {
        id: 22,
        title: "Professional Development Certificate",
        issuer: "Outskill",
        date: "2024",
        icon: "fas fa-graduation-cap",
        image: "assets/certificates/Outskill/Saikat_Das_Certificate.pdf"
    }
];

// Project Data Structure
const ProjectsData = {
    completed: [
        {
            id: 1,
            title: "Multi-Cloud Infrastructure Migration",
            description: "Led migration of legacy on-premises infrastructure to hybrid multi-cloud environment (AWS, Azure, GCP) with 99.9% uptime and 40% cost reduction.",
            technologies: ["AWS", "Azure", "GCP", "Terraform", "Ansible", "Python"],
            status: "completed",
            liveUrl: "#",
            githubUrl: "https://github.com/saikatdas0790"
        },
        {
            id: 2,
            title: "Security-First DevOps Pipeline", 
            description: "Implemented comprehensive DevSecOps pipeline with automated vulnerability scanning, reducing security incidents by 75% and deployment time by 60%.",
            technologies: ["Jenkins", "GitLab CI/CD", "SonarQube", "OWASP ZAP", "Docker", "Kubernetes"],
            status: "completed",
            liveUrl: "#",
            githubUrl: "https://github.com/saikatdas0790"
        },
        {
            id: 3,
            title: "Enterprise Cloud Security Framework",
            description: "Designed and deployed comprehensive security monitoring and incident response system for enterprise cloud infrastructure serving 10K+ users.",
            technologies: ["ELK Stack", "Prometheus", "Grafana", "AWS CloudTrail", "Splunk", "Python"],
            status: "completed",
            liveUrl: "#",
            githubUrl: "https://github.com/saikatdas0790"
        },
        {
            id: 4,
            title: "Automated Compliance & Governance",
            description: "Built automated compliance checking system for SOC 2, ISO 27001, and GDPR requirements across cloud infrastructure.",
            technologies: ["AWS Config", "Azure Policy", "GCP Security Command Center", "Terraform", "Python"],
            status: "completed",
            liveUrl: "#",
            githubUrl: "https://github.com/saikatdas0790"
        }
    ],
    inProgress: [
        {
            id: 5,
            title: "Zero-Trust Network Implementation",
            description: "Architecting and implementing zero-trust security model with micro-segmentation for container workloads and cloud services.",
            technologies: ["Istio Service Mesh", "Cilium", "HashiCorp Vault", "Calico", "Kubernetes"],
            status: "in-progress",
            githubUrl: "https://github.com/saikatdas0790"
        },
        {
            id: 6,
            title: "AI-Enhanced Security Operations",
            description: "Developing machine learning pipeline for automated threat detection, incident classification, and response orchestration.",
            technologies: ["Python", "TensorFlow", "SIEM", "SOAR", "ElasticSearch", "Kafka"],
            status: "in-progress",
            githubUrl: "https://github.com/saikatdas0790"
        }
    ],
    planned: [
        {
            id: 7,
            title: "Cloud-Native Security Platform",
            description: "Building comprehensive security-as-code platform for cloud-native applications with automated policy enforcement.",
            technologies: ["Open Policy Agent", "Falco", "Kubernetes", "Go", "GraphQL"],
            status: "planned"
        },
        {
            id: 8,
            title: "Quantum-Resistant Security Framework",
            description: "Research and implementation of post-quantum cryptographic standards for future-proofing enterprise security infrastructure.",
            technologies: ["Post-Quantum Cryptography", "NIST Standards", "Research", "C++", "Mathematics"],
            status: "planned"
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
    initializeCertifications();
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
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cloud-primary dark:group-hover:text-cyber-primary transition-colors">
                ${project.title}
            </h3>
            ${statusBadge}
        </div>
        
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
// CERTIFICATIONS MANAGEMENT
// =====================================

function initializeCertifications() {
    if (DOMElements.certificationsGrid) {
        loadCertifications();
    }
}

function loadCertifications() {
    if (CertificationsData.length === 0) {
        // Show placeholder message when no certificates are loaded
        DOMElements.certificationsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-certificate text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Certificates Loading...</h3>
                <p class="text-gray-500 dark:text-gray-500 mb-4">
                    Please copy your certificates from:<br>
                    <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">
                        /Users/saikat/Documents/Personal/Certificates → assets/certificates/
                    </code>
                </p>
                <p class="text-sm text-gray-400 dark:text-gray-600">
                    Then update the CertificationsData array in script.js
                </p>
            </div>
        `;
        return;
    }
    
    // Clear existing certificates
    DOMElements.certificationsGrid.innerHTML = '';
    
    // Render certificates
    CertificationsData.forEach(cert => {
        const certCard = createCertificationCard(cert);
        DOMElements.certificationsGrid.appendChild(certCard);
    });
}

function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'cert-card bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2';
    
    card.innerHTML = `
        <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
                <i class="${cert.icon} text-3xl text-cloud-primary dark:text-cyber-primary"></i>
            </div>
            <div class="flex-grow">
                <h3 class="font-bold text-lg mb-1 text-gray-900 dark:text-white">${cert.title}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${cert.issuer}</p>
                <p class="text-xs text-gray-500 dark:text-gray-500">Issued: ${cert.date}</p>
                ${cert.image ? `
                    <button 
                        onclick="viewCertificate('${cert.image}')" 
                        class="mt-3 text-xs text-cloud-primary dark:text-cyber-primary hover:underline"
                    >
                        <i class="fas fa-eye mr-1"></i>View Certificate
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function viewCertificate(imagePath) {
    // Open certificate in a modal or new tab
    window.open(imagePath, '_blank', 'noopener,noreferrer');
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
║  This is a secure system. All activities are monitored.     ║
║  Portfolio Version: 1.3.0                                   ║
║  Theme: Dual Mode (Cloud/Cybersecurity)                     ║
╚══════════════════════════════════════════════════════════════╝
`);

// Export for potential future module usage
window.SecurityTerminal = {
    AppState,
    ProjectsData,
    toggleTheme,
    switchProjectFilter
};
