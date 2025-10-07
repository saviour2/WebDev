/* ===================================
   SECURITY TERMINAL - MAIN SCRIPT
   Version: 2.1.1
   =================================== */

// Application State
const AppState = {
	currentTheme: "dark",
	isMobileMenuOpen: false,
	currentProjectFilter: "completed",
	isResumeModalOpen: false,
};

// Application state for certificate filtering
let currentCertFilter = "all";

// Project Data Structure
const ProjectsData = {
	completed: [
		{
			id: 1,
			title: "Portfolio Website v1.0",
			description:
				"Successfully designed and developed a modern, responsive portfolio website with advanced animations, certificate categorization system, and improved user experience. Features dual-theme support and modern security terminal aesthetic with fully functional project filtering.",
			technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
			status: "completed",
			imageUrl: "assets/Files/Terminal_Portfolio.png",
			liveUrl: "https://terminalv1.pages.dev/",
			githubUrl: "https://github.com/saviour2/WebDev",
		},
	],
	"in-progress": [],
	planned: [
		{
			id: 2,
			title: "Automated Cloud Security Scanner",
			description:
				"Build an automated security scanner for cloud infrastructure. Will include vulnerability assessment, compliance checking, and real-time alerting capabilities.",
			technologies: ["Python", "AWS/Azure", "Security APIs", "Docker"],
			status: "planned",
			timeline: "Q4 2025",
		},
		{
			id: 3,
			title: "Simple REST API (Book/Movie Catalog)",
			description:
				"Develop a comprehensive REST API for managing book and movie catalogs with full CRUD operations, user authentication, and database integration.",
			technologies: ["Node.js", "Express", "MongoDB", "JWT", "RESTful APIs"],
			status: "planned",
			timeline: "Q4 2025",
		},
		{
			id: 4,
			title: "Basic User Authentication System",
			description:
				"Implement a secure user authentication system with registration, login, password reset, and session management features.",
			technologies: ["Node.js", "Express", "MongoDB", "bcrypt", "JWT"],
			status: "planned",
			timeline: "Q4 2025",
		},
		{
			id: 5,
			title: "Web Scraper & Data Aggregator",
			description:
				"Create an intelligent web scraper to collect and aggregate data from multiple sources with data processing and visualization capabilities.",
			technologies: ["Python", "BeautifulSoup", "Scrapy", "Pandas", "SQLite"],
			status: "planned",
			timeline: "Q1 2026",
		},
		{
			id: 6,
			title: "Containerized Backend Deployment",
			description:
				"Containerize and deploy a backend application on cloud VM with Docker, implementing CI/CD pipeline and monitoring.",
			technologies: [
				"Docker",
				"Docker Compose",
				"AWS/GCP",
				"CI/CD",
				"Monitoring",
			],
			status: "planned",
			timeline: "Q1 2026",
		},
		{
			id: 7,
			title: "Simple Serverless Web App",
			description:
				"Build a serverless web application using cloud functions, demonstrating modern cloud-native development practices.",
			technologies: [
				"AWS Lambda",
				"API Gateway",
				"DynamoDB",
				"S3",
				"CloudFormation",
			],
			status: "planned",
			timeline: "Q1 2026",
		},
		{
			id: 8,
			title: "Terraform Infrastructure Lab",
			description:
				"Hands-on Infrastructure as Code project using Terraform to provision and manage cloud resources with best practices.",
			technologies: ["Terraform", "AWS/Azure", "IaC", "Git", "CI/CD"],
			status: "planned",
			timeline: "Q3 2026",
		},
		{
			id: 9,
			title: "Automated Backup Script",
			description:
				"Develop a comprehensive backup solution with automated scheduling, encryption, and cloud storage integration.",
			technologies: [
				"Python",
				"Cron",
				"Cloud Storage",
				"Encryption",
				"Logging",
			],
			status: "planned",
			timeline: "Q3 2026",
		},
		{
			id: 10,
			title: "Secure CI/CD Pipeline",
			description:
				"Implement a secure continuous integration and deployment pipeline with vulnerability scanning and automated testing.",
			technologies: [
				"GitHub Actions",
				"Docker",
				"Security Scanning",
				"SAST",
				"DAST",
			],
			status: "planned",
			timeline: "Q4 2026",
		},
		{
			id: 11,
			title: "Infrastructure as Code Deployment",
			description:
				"Deploy a complete application stack using Infrastructure as Code principles with Terraform and cloud best practices.",
			technologies: ["Terraform", "Kubernetes", "Helm", "AWS/GCP", "GitOps"],
			status: "planned",
			timeline: "Q4 2026",
		},
	],
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
	resumeBtnMobile: null,
	resumeModal: null,
	resumeCloseBtn: null,

	// Project Filtering
	projectTabs: null,
	projectGrid: null,

	// Navigation Links
	navLinks: null,

	// Scroll Elements
	scrollElements: null,
};

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
	initializeApp();
});

function initializeApp() {
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

	// Initialize cyberpunk cursor effects
	new CyberpunkCursor();
}

function cacheDOMElements() {
	DOMElements.themeToggle = document.getElementById("theme-toggle");
	DOMElements.mobileMenuBtn = document.getElementById("mobile-menu-btn");
	DOMElements.mobileMenu = document.getElementById("mobile-menu");
	DOMElements.resumeBtn = document.getElementById("resume-btn");
	DOMElements.resumeBtnMobile = document.getElementById("resume-btn-mobile");
	DOMElements.resumeModal = document.getElementById("resume-modal");
	DOMElements.resumeCloseBtn = document.getElementById("close-modal");
	DOMElements.projectTabs = document.querySelectorAll(".project-filter-btn");
	DOMElements.projectGrid = document.getElementById("projects-grid");
	DOMElements.certificationsGrid = document.getElementById(
		"certifications-grid"
	);
	DOMElements.navLinks = document.querySelectorAll(".nav-link");
	DOMElements.scrollElements = document.querySelectorAll(".fade-in, .slide-up");
}

// =====================================
// THEME MANAGEMENT
// =====================================

function initializeTheme() {
	// Check for saved theme or default to dark
	const savedTheme = localStorage.getItem("theme") || "dark";
	AppState.currentTheme = savedTheme;

	// Apply theme
	applyTheme(savedTheme);

	// Add event listeners
	if (DOMElements.themeToggle) {
		DOMElements.themeToggle.addEventListener("click", toggleTheme);
	}

	// Add mobile theme toggle listener
	const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
	if (mobileThemeToggle) {
		mobileThemeToggle.addEventListener("click", toggleTheme);
	}
}

function toggleTheme() {
	const newTheme = AppState.currentTheme === "light" ? "dark" : "light";
	AppState.currentTheme = newTheme;

	applyTheme(newTheme);
	localStorage.setItem("theme", newTheme);

	// Add visual feedback
	DOMElements.themeToggle.style.transform = "scale(0.95)";
	setTimeout(() => {
		DOMElements.themeToggle.style.transform = "scale(1)";
	}, 150);
}

function applyTheme(theme) {
	const html = document.documentElement;

	if (theme === "dark") {
		html.classList.add("dark");
	} else {
		html.classList.remove("dark");
	}

	// Update theme toggle icon
	updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
	// Update desktop theme toggle
	const sunIcon = DOMElements.themeToggle?.querySelector(".fa-sun");
	const moonIcon = DOMElements.themeToggle?.querySelector(".fa-moon");

	// Update mobile theme toggle
	const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
	const mobileSunIcon = mobileThemeToggle?.querySelector(".fa-sun");
	const mobileMoonIcon = mobileThemeToggle?.querySelector(".fa-moon");

	if (theme === "dark") {
		sunIcon?.classList.remove("hidden");
		moonIcon?.classList.add("hidden");
		mobileSunIcon?.classList.remove("hidden");
		mobileMoonIcon?.classList.add("hidden");
	} else {
		sunIcon?.classList.add("hidden");
		moonIcon?.classList.remove("hidden");
		mobileSunIcon?.classList.add("hidden");
		mobileMoonIcon?.classList.remove("hidden");
	}
}

// =====================================
// MOBILE MENU MANAGEMENT
// =====================================

function initializeMobileMenu() {
	if (DOMElements.mobileMenuBtn && DOMElements.mobileMenu) {
		DOMElements.mobileMenuBtn.addEventListener("click", toggleMobileMenu);

		// Close menu when clicking nav links
		const mobileNavLinks = DOMElements.mobileMenu.querySelectorAll("a");
		mobileNavLinks.forEach((link) => {
			link.addEventListener("click", () => {
				if (AppState.isMobileMenuOpen) {
					toggleMobileMenu();
				}
			});
		});

		// Close menu when clicking outside
		document.addEventListener("click", (e) => {
			if (
				AppState.isMobileMenuOpen &&
				!DOMElements.mobileMenu.contains(e.target) &&
				!DOMElements.mobileMenuBtn.contains(e.target)
			) {
				toggleMobileMenu();
			}
		});
	}
}

function toggleMobileMenu() {
	AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;

	const menuIcon = DOMElements.mobileMenuBtn.querySelector("i");

	if (AppState.isMobileMenuOpen) {
		DOMElements.mobileMenu.classList.remove("hidden");
		DOMElements.mobileMenu.style.maxHeight =
			DOMElements.mobileMenu.scrollHeight + "px";
		menuIcon.classList.replace("fa-bars", "fa-times");
	} else {
		DOMElements.mobileMenu.style.maxHeight = "0";
		menuIcon.classList.replace("fa-times", "fa-bars");

		setTimeout(() => {
			DOMElements.mobileMenu.classList.add("hidden");
		}, 300);
	}
}

// =====================================
// RESUME MODAL MANAGEMENT
// =====================================

function initializeResumeModal() {
	if (DOMElements.resumeModal) {
		// Add event listeners for both desktop and mobile resume buttons
		if (DOMElements.resumeBtn) {
			DOMElements.resumeBtn.addEventListener("click", openResumeModal);
		}
		if (DOMElements.resumeBtnMobile) {
			DOMElements.resumeBtnMobile.addEventListener("click", openResumeModal);
		}

		if (DOMElements.resumeCloseBtn) {
			DOMElements.resumeCloseBtn.addEventListener("click", closeResumeModal);
		}

		// Close modal when clicking backdrop
		DOMElements.resumeModal.addEventListener("click", (e) => {
			if (e.target === DOMElements.resumeModal) {
				closeResumeModal();
			}
		});

		// Close modal with Escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && AppState.isResumeModalOpen) {
				closeResumeModal();
			}
		});

		// Initialize zoom functionality and protection
		initializeResumeProtection();
	}
}

function openResumeModal() {
	AppState.isResumeModalOpen = true;
	DOMElements.resumeModal.classList.remove("hidden");
	document.body.style.overflow = "hidden";

	// Reset zoom and position
	currentZoom = 1;
	imagePosition.x = 0;
	imagePosition.y = 0;
	isDragging = false;

	// Add fade-in animation
	requestAnimationFrame(() => {
		DOMElements.resumeModal.classList.add("opacity-100");
		const modalContent = DOMElements.resumeModal.querySelector(
			".bg-white, .dark\\:bg-gray-800"
		);
		modalContent?.classList.add("scale-100");

		// Re-initialize protection after modal is visible
		setTimeout(() => {
			initializeResumeProtection();
		}, 100);
	});
}

function closeResumeModal() {
	AppState.isResumeModalOpen = false;
	DOMElements.resumeModal.classList.remove("opacity-100");
	const modalContent = DOMElements.resumeModal.querySelector(
		".bg-white, .dark\\:bg-gray-800"
	);
	modalContent?.classList.remove("scale-100");

	setTimeout(() => {
		DOMElements.resumeModal.classList.add("hidden");
		document.body.style.overflow = "";
	}, 300);
}

// =====================================
// PROJECT FILTERING SYSTEM
// =====================================

function initializeProjectFiltering() {
	if (
		!DOMElements.projectGrid ||
		!DOMElements.projectTabs ||
		DOMElements.projectTabs.length === 0
	) {
		return;
	}

	DOMElements.projectTabs.forEach((tab) => {
		const filter = tab.dataset.filter;
		if (!filter) {
			return;
		}

		tab.addEventListener("click", (e) => {
			e.preventDefault();
			if (filter !== AppState.currentProjectFilter) {
				switchProjectFilter(filter);
			}
		});
	});

	try {
		switchProjectFilter("completed");
	} catch (error) {
		renderProjects("completed");
	}
}

function switchProjectFilter(filter) {
	AppState.currentProjectFilter = filter;

	// Update active tab
	DOMElements.projectTabs.forEach((tab) => {
		if (tab.dataset.filter === filter) {
			tab.classList.add("active");
			tab.classList.add("text-cloud-primary", "dark:text-cyber-primary");
			tab.classList.remove("text-gray-600", "dark:text-gray-400");
		} else {
			tab.classList.remove("active");
			tab.classList.remove("text-cloud-primary", "dark:text-cyber-primary");
			tab.classList.add("text-gray-600", "dark:text-gray-400");
		}
	});

	// Render projects
	renderProjects(filter);
}

function renderProjects(filter) {
	if (!filter || typeof filter !== "string") {
		return;
	}

	const projects = ProjectsData[filter] || [];

	if (!DOMElements.projectGrid) {
		return;
	}

	DOMElements.projectGrid.style.opacity = "0";

	setTimeout(() => {
		while (DOMElements.projectGrid.firstChild) {
			DOMElements.projectGrid.removeChild(DOMElements.projectGrid.firstChild);
		}

		if (projects.length === 0) {
			const emptyDiv = document.createElement("div");
			emptyDiv.className = "col-span-full text-center py-12";

			const icon = document.createElement("i");
			icon.className =
				"fas fa-folder-open text-4xl text-gray-400 dark:text-gray-600 mb-4";

			const message = document.createElement("p");
			message.className = "text-gray-500 dark:text-gray-400 text-lg";
			message.textContent = "No projects in this category yet.";

			emptyDiv.appendChild(icon);
			emptyDiv.appendChild(message);
			DOMElements.projectGrid.appendChild(emptyDiv);
		} else {
			projects.forEach((project, index) => {
				const projectCard = createProjectCard(project);
				if (projectCard) {
					DOMElements.projectGrid.appendChild(projectCard);
					// Add show class with staggered delay for animation
					setTimeout(() => {
						projectCard.classList.add("show");
					}, index * 100 + 100);
				}
			});
		}

		// Fade in with delay and ensure section is visible
		setTimeout(() => {
			DOMElements.projectGrid.style.opacity = "1";
			// Ensure projects section is visible
			const projectsSection = document.getElementById("projects");
			if (projectsSection) {
				projectsSection.classList.add("projects-loaded", "fade-in");
			}
			// Projects rendered successfully
		}, 50);
	}, 150);
}

function createProjectCard(project) {
	if (!project) {
		return null;
	}

	const safeProject = {
		title: sanitizeInput(project.title || ""),
		description: sanitizeInput(project.description || ""),
		technologies: Array.isArray(project.technologies)
			? project.technologies.map((tech) => sanitizeInput(tech))
			: [],
		status: project.status || "planned",
		liveUrl: isValidUrl(project.liveUrl) ? project.liveUrl : null,
		githubUrl: isValidUrl(project.githubUrl) ? project.githubUrl : null,
		imageUrl: isValidUrl(project.imageUrl) ? project.imageUrl : null,
		timeline: project.timeline ? sanitizeInput(project.timeline) : null,
	};

	const card = document.createElement("div");
	card.className =
		"project-card group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2";

	// Create elements safely using createElement
	const cardContent = document.createElement("div");

	// Add project image if available
	if (safeProject.imageUrl) {
		const imageContainer = document.createElement("div");
		imageContainer.className = "mb-4 rounded-lg overflow-hidden";
		const img = document.createElement("img");
		img.src = safeProject.imageUrl;
		img.alt = safeProject.title;
		img.className =
			"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105";
		imageContainer.appendChild(img);
		cardContent.appendChild(imageContainer);
	}

	// Header with title and status
	const header = document.createElement("div");
	header.className = "flex justify-between items-start mb-4";

	const title = document.createElement("h3");
	title.className =
		"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cloud-primary dark:group-hover:text-cyber-primary transition-colors";
	title.textContent = safeProject.title;

	const statusBadge = createStatusBadge(safeProject.status);

	header.appendChild(title);
	if (statusBadge) header.appendChild(statusBadge);
	cardContent.appendChild(header);

	// Timeline for planned projects
	if (safeProject.timeline) {
		const timelineDiv = document.createElement("div");
		timelineDiv.className = "text-sm text-gray-500 dark:text-gray-400 mb-2";
		const icon = document.createElement("i");
		icon.className = "fas fa-calendar-alt mr-1";
		timelineDiv.appendChild(icon);
		timelineDiv.appendChild(
			document.createTextNode(`Timeline: ${safeProject.timeline}`)
		);
		cardContent.appendChild(timelineDiv);
	}

	// Description
	const description = document.createElement("p");
	description.className =
		"text-gray-600 dark:text-gray-300 mb-4 leading-relaxed";
	description.textContent = safeProject.description;
	cardContent.appendChild(description);

	// Technologies
	const techContainer = document.createElement("div");
	techContainer.className = "flex flex-wrap gap-2 mb-6";
	safeProject.technologies.forEach((tech) => {
		const techSpan = document.createElement("span");
		techSpan.className =
			"px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full";
		techSpan.textContent = tech;
		techContainer.appendChild(techSpan);
	});
	cardContent.appendChild(techContainer);

	// Buttons
	const buttonContainer = document.createElement("div");
	buttonContainer.className = "flex gap-3";

	if (safeProject.liveUrl) {
		const liveButton = createSecureButton(
			safeProject.liveUrl,
			"Live Demo",
			"fas fa-external-link-alt",
			"bg-cloud-primary dark:bg-cyber-primary"
		);
		buttonContainer.appendChild(liveButton);
	}

	if (safeProject.githubUrl) {
		const githubButton = createSecureButton(
			safeProject.githubUrl,
			"GitHub",
			"fab fa-github",
			"bg-gray-800 dark:bg-gray-700"
		);
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
	if (
		url.startsWith("assets/") ||
		url.startsWith("./") ||
		url.startsWith("../")
	) {
		return true;
	}

	// Validate absolute URLs
	try {
		const urlObj = new URL(url);
		return ["http:", "https:"].includes(urlObj.protocol);
	} catch {
		return false;
	}
}

function createSecureButton(url, text, iconClass, bgClass) {
	const button = document.createElement("a");
	button.href = url;
	button.target = "_blank";
	button.rel = "noopener noreferrer";
	button.className = `inline-flex items-center px-4 py-2 ${bgClass} text-white rounded-lg text-sm hover:shadow-lg transition-all`;

	const icon = document.createElement("i");
	icon.className = `${iconClass} mr-2`;

	button.appendChild(icon);
	button.appendChild(document.createTextNode(text));

	return button;
}

function createStatusBadge(status) {
	const badges = {
		completed: {
			text: "✅ Completed",
			classes:
				"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
		},
		"in-progress": {
			text: "🔄 In Progress",
			classes: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
		},
		planned: {
			text: "📋 Planned",
			classes:
				"bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
		},
	};

	const badgeInfo = badges[status];
	if (!badgeInfo) return null;

	const badge = document.createElement("span");
	badge.className = `px-3 py-1 ${badgeInfo.classes} text-xs font-medium rounded-full`;
	badge.textContent = badgeInfo.text;

	return badge;
}

// =====================================
// CERTIFICATE FILTERING
// =====================================

function initializeCertificateFiltering() {
	const filterButtons = document.querySelectorAll(".cert-filter-btn");

	if (filterButtons.length > 0) {
		filterButtons.forEach((btn) => {
			btn.addEventListener("click", function () {
				const filter = this.getAttribute("data-filter");
				filterCertificates(filter);
				updateCertFilterActiveState(this);
			});
		});
	}
}

function filterCertificates(filter) {
	currentCertFilter = filter;
	const certificates = document.querySelectorAll(".cert-card[data-category]");

	certificates.forEach((cert) => {
		const category = cert.getAttribute("data-category");

		if (filter === "all" || category === filter) {
			cert.style.display = "block";
			cert.classList.remove("hidden");
		} else {
			cert.style.display = "none";
			cert.classList.add("hidden");
		}
	});
}

function updateCertFilterActiveState(activeButton) {
	// Remove active class from all buttons
	document.querySelectorAll(".cert-filter-btn").forEach((btn) => {
		btn.classList.remove("active");
	});

	// Add active class to clicked button
	activeButton.classList.add("active");
}

// =====================================
// SCROLL ANIMATIONS
// =====================================

function initializeScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in");
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all elements with fade-in classes
	const elementsToAnimate = document.querySelectorAll(
		".fade-in, .slide-up, section"
	);
	elementsToAnimate.forEach((el) => {
		observer.observe(el);
	});
}

// =====================================
// SMOOTH SCROLLING
// =====================================

function initializeSmoothScrolling() {
	// Smooth scroll for navigation links
	DOMElements.navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			const href = link.getAttribute("href");
			if (href.startsWith("#")) {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		});
	});

	// Add active navigation highlighting
	window.addEventListener("scroll", updateActiveNavigation);
}

function updateActiveNavigation() {
	const sections = document.querySelectorAll("section[id]");
	const scrollPos = window.scrollY + 100;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.getAttribute("id");

		if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
			DOMElements.navLinks.forEach((link) => {
				link.classList.remove("text-cloud-primary", "dark:text-cyber-primary");
				if (link.getAttribute("href") === `#${sectionId}`) {
					link.classList.add("text-cloud-primary", "dark:text-cyber-primary");
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
	const resumeImage = document.getElementById("resume-image");
	const resumeContainer = document.getElementById("resume-container");
	const zoomInBtn = document.getElementById("zoom-in");
	const zoomOutBtn = document.getElementById("zoom-out");
	const resetZoomBtn = document.getElementById("reset-zoom");

	if (!resumeImage || !resumeContainer) {
		return;
	}

	// Set initial properties
	resumeImage.draggable = false;
	resumeImage.style.pointerEvents = "auto"; // Ensure mouse events work

	// Disable right-click context menu (but don't block mousedown)
	resumeContainer.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	});

	// Disable native drag
	resumeImage.addEventListener("dragstart", (e) => {
		e.preventDefault();
	});

	// Simplified and robust drag functionality
	let dragHandler = {
		handleMouseDown: function (e) {
			if (currentZoom > 1) {
				isDragging = true;
				dragStart.x = e.clientX - imagePosition.x;
				dragStart.y = e.clientY - imagePosition.y;
				resumeImage.style.cursor = "grabbing";
				resumeContainer.style.userSelect = "none";

				e.preventDefault();
				e.stopPropagation();
			}
		},

		handleMouseMove: function (e) {
			if (isDragging && currentZoom > 1) {
				imagePosition.x = e.clientX - dragStart.x;
				imagePosition.y = e.clientY - dragStart.y;

				// Apply reasonable constraints
				const maxMove = 150;
				imagePosition.x = Math.max(
					-maxMove,
					Math.min(maxMove, imagePosition.x)
				);
				imagePosition.y = Math.max(
					-maxMove,
					Math.min(maxMove, imagePosition.y)
				);

				// Direct transform application for immediate response
				resumeImage.style.transform = `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${currentZoom})`;
				resumeImage.style.transition = "none";

				e.preventDefault();
			}
		},

		handleMouseUp: function (e) {
			if (isDragging) {
				isDragging = false;
				resumeContainer.style.userSelect = "";
				if (currentZoom > 1) {
					resumeImage.style.cursor = "grab";
				} else {
					resumeImage.style.cursor = "default";
				}
			}
		},
	};

	// Remove any existing listeners and add new ones
	resumeImage.addEventListener("mousedown", dragHandler.handleMouseDown);
	document.addEventListener("mousemove", dragHandler.handleMouseMove);
	document.addEventListener("mouseup", dragHandler.handleMouseUp);

	// Disable keyboard shortcuts for saving/copying
	document.addEventListener("keydown", (e) => {
		if (AppState.isResumeModalOpen) {
			// Disable Ctrl+S, Ctrl+A, Ctrl+C, F12, etc.
			if (
				(e.ctrlKey || e.metaKey) &&
				["s", "a", "c", "v", "x"].includes(e.key.toLowerCase())
			) {
				e.preventDefault();
				return false;
			}
			// Disable F12 (Developer Tools)
			if (e.key === "F12") {
				e.preventDefault();
				return false;
			}
		}
	});

	// Zoom functionality
	if (zoomInBtn) {
		zoomInBtn.addEventListener("click", () => {
			if (currentZoom < maxZoom) {
				currentZoom += zoomStep;

				applyZoom();
			}
		});
	}

	if (zoomOutBtn) {
		zoomOutBtn.addEventListener("click", () => {
			if (currentZoom > minZoom) {
				currentZoom -= zoomStep;
				applyZoom();
			}
		});
	}

	if (resetZoomBtn) {
		resetZoomBtn.addEventListener("click", () => {
			currentZoom = 1;
			imagePosition.x = 0;
			imagePosition.y = 0;
			applyZoom();
		});
	}

	// Mouse wheel zoom
	resumeContainer.addEventListener("wheel", (e) => {
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
	const resumeImage = document.getElementById("resume-image");
	if (resumeImage) {
		// Only apply transform if we're not actively dragging (to avoid conflicts)
		if (!isDragging) {
			const transform = `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${currentZoom})`;
			resumeImage.style.transform = transform;
			resumeImage.style.transformOrigin = "center center";
			resumeImage.style.transition = "transform 0.3s ease";
		}

		// Cursor and behavior management
		if (currentZoom > 1) {
			resumeImage.style.cursor = isDragging ? "grabbing" : "grab";
		} else {
			resumeImage.style.cursor = "default";
			// Reset position when zoomed out completely
			if (currentZoom === 1) {
				imagePosition.x = 0;
				imagePosition.y = 0;
				resumeImage.style.transform = `translate(0px, 0px) scale(1)`;
			}
		}
	}
}

// Sanitize user input (for future backend integration)
function sanitizeInput(input) {
	const div = document.createElement("div");
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

// =====================================
// CYBERPUNK CURSOR EFFECTS
// =====================================

class CyberpunkCursor {
	constructor() {
		this.cursorGlow = document.getElementById("cursor-glow");
		this.mouseSpotlight = document.getElementById("mouse-spotlight");
		this.isActive = false;
		this.trails = [];
		this.lastTrailTime = 0;

		this.init();
	}

	init() {
		if (!this.cursorGlow || !this.mouseSpotlight) return;

		// Enforce cursor hiding immediately and continuously
		this.enforceCursorHiding();

		// Mouse movement tracking
		document.addEventListener("mousemove", (e) => this.handleMouseMove(e));
		document.addEventListener("mouseenter", () => this.show());
		document.addEventListener("mouseleave", () => this.hide());

		// Click effects
		document.addEventListener("mousedown", () => this.handleMouseDown());
		document.addEventListener("mouseup", () => this.handleMouseUp());

		// Touch support for mobile
		document.addEventListener("touchstart", (e) => this.handleTouch(e));
		document.addEventListener("touchmove", (e) => this.handleTouch(e));

		// Additional cursor hiding enforcement
		document.addEventListener("DOMContentLoaded", () =>
			this.enforceCursorHiding()
		);
		window.addEventListener("load", () => this.enforceCursorHiding());

		// Periodic enforcement to catch any dynamic elements
		setInterval(() => this.enforceCursorHiding(), 1000);
	}

	handleMouseMove(e) {
		const x = e.clientX;
		const y = e.clientY;

		// Update cursor position
		this.cursorGlow.style.left = x + "px";
		this.cursorGlow.style.top = y + "px";

		// Update spotlight position
		this.mouseSpotlight.style.left = x + "px";
		this.mouseSpotlight.style.top = y + "px";

		// Create trail effect
		this.createTrail(x, y);

		if (!this.isActive) {
			this.show();
		}
	}

	createTrail(x, y) {
		const now = Date.now();
		if (now - this.lastTrailTime > 50) {
			// Throttle trail creation
			const trail = document.createElement("div");
			trail.className = "cursor-trail";
			trail.style.left = x + "px";
			trail.style.top = y + "px";
			document.body.appendChild(trail);

			// Remove trail after animation
			setTimeout(() => {
				if (trail.parentNode) {
					trail.parentNode.removeChild(trail);
				}
			}, 800);

			this.lastTrailTime = now;
		}
	}

	handleMouseDown() {
		document.body.classList.add("cursor-clicking");
		this.mouseSpotlight.classList.add("clicking");
	}

	handleMouseUp() {
		document.body.classList.remove("cursor-clicking");
		this.mouseSpotlight.classList.remove("clicking");
	}

	handleTouch(e) {
		if (e.touches.length > 0) {
			const touch = e.touches[0];
			this.handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
		}
	}

	show() {
		this.isActive = true;
		this.cursorGlow.classList.add("active");
		this.mouseSpotlight.classList.add("active");
	}

	hide() {
		this.isActive = false;
		this.cursorGlow.classList.remove("active");
		this.mouseSpotlight.classList.remove("active");
		document.body.classList.remove("cursor-clicking");
		this.mouseSpotlight.classList.remove("clicking");
	}

	enforceCursorHiding() {
		// Force cursor hiding on document and body
		document.documentElement.style.cursor = "none";
		document.body.style.cursor = "none";

		// Find and fix any elements that might have cursor styles
		const allElements = document.querySelectorAll("*");
		allElements.forEach((element) => {
			element.style.cursor = "none";

			// Remove any cursor-related classes
			const cursorClasses = [
				"cursor-auto",
				"cursor-default",
				"cursor-pointer",
				"cursor-wait",
				"cursor-text",
				"cursor-move",
				"cursor-help",
				"cursor-not-allowed",
				"cursor-context-menu",
				"cursor-progress",
				"cursor-cell",
				"cursor-crosshair",
				"cursor-vertical-text",
				"cursor-alias",
				"cursor-copy",
				"cursor-no-drop",
				"cursor-grab",
				"cursor-grabbing",
			];

			cursorClasses.forEach((className) => {
				if (element.classList.contains(className)) {
					element.classList.remove(className);
				}
			});
		});

		// Override any CSS cursor rules dynamically
		if (!document.getElementById("cursor-override-style")) {
			const style = document.createElement("style");
			style.id = "cursor-override-style";
			style.textContent = `
                * { cursor: none !important; }
                *:hover { cursor: none !important; }
                *:active { cursor: none !important; }
                *:focus { cursor: none !important; }
            `;
			document.head.appendChild(style);
		}
	}
}

// =====================================
// PARTICLE SYSTEM & PARALLAX EFFECTS
// =====================================

class ParticleSystem {
	constructor() {
		this.canvas = document.getElementById("particles-canvas");
		this.ctx = this.canvas.getContext("2d");
		this.particles = [];
		this.mousePos = { x: 0, y: 0 };
		this.animationId = null;
		this.time = 0;

		this.init();
	}

	init() {
		this.resize();
		this.createParticles();
		this.animate();

		window.addEventListener("resize", () => this.resize());
		document.addEventListener("scroll", () => this.handleScroll());
		document.addEventListener("mousemove", (e) => this.handleMouse(e));
	}

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.particles = [];
		this.createParticles();
	}

	handleMouse(e) {
		this.mousePos.x = e.clientX;
		this.mousePos.y = e.clientY;
	}

	createParticles() {
		const particleCount = Math.min(
			80,
			Math.floor((window.innerWidth * window.innerHeight) / 12000)
		);
		const symbols = [
			"0",
			"1",
			"{",
			"}",
			"<",
			">",
			"/",
			"\\",
			"*",
			"+",
			"-",
			"=",
			"$",
			"#",
		];

		for (let i = 0; i < particleCount; i++) {
			const type =
				Math.random() < 0.7 ? "dot" : Math.random() < 0.5 ? "symbol" : "star";
			this.particles.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				size: Math.random() * 3 + 1,
				speedX: (Math.random() - 0.5) * 0.8,
				speedY: (Math.random() - 0.5) * 0.8,
				opacity: Math.random() * 0.6 + 0.3,
				color: this.getParticleColor(),
				type: type,
				symbol: symbols[Math.floor(Math.random() * symbols.length)],
				pulse: Math.random() * Math.PI * 2,
				pulseSpeed: 0.02 + Math.random() * 0.03,
				connections: [],
			});
		}

		// Add some matrix rain particles
		for (let i = 0; i < 12; i++) {
			this.particles.push({
				x: Math.random() * this.canvas.width,
				y: -Math.random() * 200,
				size: 12,
				speedX: 0,
				speedY: 1 + Math.random() * 2,
				opacity: 0.6,
				color: this.getMatrixColor(),
				type: "matrix",
				symbol: symbols[Math.floor(Math.random() * symbols.length)],
				trail: [],
				trailLength: 8,
			});
		}
	}

	getParticleColor() {
		const isDark = document.documentElement.classList.contains("dark");
		const colors = isDark
			? [
					"rgba(0, 245, 255, ",
					"rgba(157, 0, 255, ",
					"rgba(255, 0, 128, ",
					"rgba(0, 255, 150, ",
			  ]
			: [
					"rgba(30, 90, 180, ",
					"rgba(60, 30, 140, ",
					"rgba(140, 30, 90, ",
					"rgba(30, 140, 70, ",
			  ];

		return colors[Math.floor(Math.random() * colors.length)];
	}

	getMatrixColor() {
		const isDark = document.documentElement.classList.contains("dark");
		return isDark ? "rgba(0, 255, 150, " : "rgba(30, 90, 180, ";
	}

	handleScroll() {
		const scrollY = window.scrollY;
		const scrollSpeed = scrollY * 0.5;

		// Update particles based on scroll
		this.particles.forEach((particle) => {
			if (particle.type !== "matrix") {
				particle.y -= scrollSpeed * 0.001;
				if (particle.y < -10) particle.y = this.canvas.height + 10;
				if (particle.y > this.canvas.height + 10) particle.y = -10;
			}
		});

		// Parallax background elements
		const bg1 = document.getElementById("parallax-bg1");
		const bg2 = document.getElementById("parallax-bg2");
		const bg3 = document.getElementById("parallax-bg3");

		if (bg1)
			bg1.style.transform = `translateY(${scrollY * 0.2}px) translateX(${
				Math.sin(scrollY * 0.001) * 20
			}px)`;
		if (bg2)
			bg2.style.transform = `translateY(${scrollY * 0.15}px) translateX(${
				Math.cos(scrollY * 0.001) * 15
			}px)`;
		if (bg3)
			bg3.style.transform = `translateY(${scrollY * 0.1}px) translateX(${
				Math.sin(scrollY * 0.0015) * 25
			}px)`;
	}

	drawConnections() {
		for (let i = 0; i < this.particles.length; i++) {
			const particleA = this.particles[i];
			if (particleA.type === "matrix") continue;

			for (let j = i + 1; j < this.particles.length; j++) {
				const particleB = this.particles[j];
				if (particleB.type === "matrix") continue;

				const distance = Math.sqrt(
					Math.pow(particleA.x - particleB.x, 2) +
						Math.pow(particleA.y - particleB.y, 2)
				);

				if (distance < 120) {
					const opacity = ((120 - distance) / 120) * 0.3;
					this.ctx.strokeStyle = particleA.color + opacity + ")";
					this.ctx.lineWidth = 0.5;
					this.ctx.beginPath();
					this.ctx.moveTo(particleA.x, particleA.y);
					this.ctx.lineTo(particleB.x, particleB.y);
					this.ctx.stroke();
				}
			}

			// Mouse interaction
			const mouseDistance = Math.sqrt(
				Math.pow(particleA.x - this.mousePos.x, 2) +
					Math.pow(particleA.y - this.mousePos.y, 2)
			);

			if (mouseDistance < 150) {
				const opacity = ((150 - mouseDistance) / 150) * 0.4;
				this.ctx.strokeStyle = particleA.color + opacity + ")";
				this.ctx.lineWidth = 1;
				this.ctx.beginPath();
				this.ctx.moveTo(particleA.x, particleA.y);
				this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
				this.ctx.stroke();

				// Push particles away from mouse
				const force = ((150 - mouseDistance) / 150) * 0.5;
				const angle = Math.atan2(
					particleA.y - this.mousePos.y,
					particleA.x - this.mousePos.x
				);
				particleA.x += Math.cos(angle) * force;
				particleA.y += Math.sin(angle) * force;
			}
		}
	}

	animate() {
		this.time += 0.016;
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// Draw connections first
		this.drawConnections();

		this.particles.forEach((particle, index) => {
			// Update position
			particle.x += particle.speedX;
			particle.y += particle.speedY;

			// Update pulse
			if (particle.pulse !== undefined) {
				particle.pulse += particle.pulseSpeed;
			}

			// Handle different particle types
			if (particle.type === "matrix") {
				// Matrix rain logic
				particle.y += particle.speedY;

				// Add to trail
				particle.trail.unshift({ x: particle.x, y: particle.y });
				if (particle.trail.length > particle.trailLength) {
					particle.trail.pop();
				}

				if (particle.y > this.canvas.height + 50) {
					particle.y = -Math.random() * 200;
					particle.x = Math.random() * this.canvas.width;
				}

				// Draw trail
				particle.trail.forEach((point, i) => {
					const opacity =
						((particle.trailLength - i) / particle.trailLength) *
						particle.opacity;
					this.ctx.font = `${particle.size}px monospace`;
					this.ctx.fillStyle = particle.color + opacity + ")";
					this.ctx.fillText(particle.symbol, point.x, point.y);
				});
			} else {
				// Wrap around edges for regular particles
				if (particle.x < -20) particle.x = this.canvas.width + 20;
				if (particle.x > this.canvas.width + 20) particle.x = -20;
				if (particle.y < -20) particle.y = this.canvas.height + 20;
				if (particle.y > this.canvas.height + 20) particle.y = -20;

				// Calculate pulsing size
				const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
				const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;

				this.ctx.save();

				if (particle.type === "star") {
					// Draw star
					this.drawStar(
						particle.x,
						particle.y,
						5,
						pulseSize * 2,
						pulseSize,
						particle.color + pulseOpacity + ")"
					);
				} else if (particle.type === "symbol") {
					// Draw symbol
					this.ctx.font = `${pulseSize * 2}px monospace`;
					this.ctx.fillStyle = particle.color + pulseOpacity + ")";
					this.ctx.textAlign = "center";
					this.ctx.fillText(particle.symbol, particle.x, particle.y);
				} else {
					// Draw dot with glow
					this.ctx.beginPath();
					this.ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
					this.ctx.fillStyle = particle.color + pulseOpacity + ")";
					this.ctx.shadowColor = particle.color + "0.8)";
					this.ctx.shadowBlur = 15;
					this.ctx.fill();
				}

				this.ctx.restore();
			}
		});

		this.animationId = requestAnimationFrame(() => this.animate());
	}

	drawStar(x, y, spikes, outerRadius, innerRadius, color) {
		let rot = (Math.PI / 2) * 3;
		let step = Math.PI / spikes;

		this.ctx.beginPath();
		this.ctx.moveTo(x, y - outerRadius);

		for (let i = 0; i < spikes; i++) {
			let x1 = x + Math.cos(rot) * outerRadius;
			let y1 = y + Math.sin(rot) * outerRadius;
			this.ctx.lineTo(x1, y1);
			rot += step;

			x1 = x + Math.cos(rot) * innerRadius;
			y1 = y + Math.sin(rot) * innerRadius;
			this.ctx.lineTo(x1, y1);
			rot += step;
		}

		this.ctx.lineTo(x, y - outerRadius);
		this.ctx.closePath();
		this.ctx.fillStyle = color;
		this.ctx.fill();
	}

	updateTheme() {
		this.particles.forEach((particle) => {
			if (particle.type === "matrix") {
				particle.color = this.getMatrixColor();
			} else {
				particle.color = this.getParticleColor();
			}
		});
	}
}

// Scroll Animation Observer
class ScrollAnimations {
	constructor() {
		this.observer = new IntersectionObserver(
			(entries) => this.handleIntersection(entries),
			{
				threshold: [0, 0.25, 0.5, 0.75, 1.0],
				rootMargin: "-10% 0px -10% 0px",
			}
		);

		this.init();
	}

	init() {
		// Wait for DOM to be fully loaded
		setTimeout(() => {
			// Find and observe elements with animation classes
			const animatedElements = document.querySelectorAll(
				".fade-in-up, .fade-in-left, .fade-in-right, .scale-in"
			);

			animatedElements.forEach((el) => {
				// Ensure elements start invisible (except hero elements)
				if (!el.closest("#hero")) {
					el.classList.remove("animate");
				}
				this.observer.observe(el);
			});

			// Observe skill badges and cards separately
			document
				.querySelectorAll(".skill-badge, .project-card, .cert-card")
				.forEach((el) => {
					if (!el.classList.contains("scale-in")) {
						el.classList.add("scale-in");
					}
					el.classList.remove("animate"); // Start invisible
					this.observer.observe(el);
				});
		}, 100);
	}

	handleIntersection(entries) {
		entries.forEach((entry) => {
			const element = entry.target;
			const isHeroElement = element.closest("#hero");

			// Skip hero elements - they should always be visible
			if (isHeroElement) return;

			if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
				// Element is sufficiently visible, fade in

				element.classList.add("animate");

				// Add stagger effect for child elements
				const children = element.querySelectorAll(
					".skill-badge, .project-card, .cert-card"
				);
				children.forEach((child, index) => {
					setTimeout(() => {
						child.classList.add("animate");
					}, index * 100);
				});
			} else if (!entry.isIntersecting) {
				// Element is not visible, fade out

				element.classList.remove("animate");

				// Remove animate from children too
				const children = element.querySelectorAll(
					".skill-badge, .project-card, .cert-card"
				);
				children.forEach((child) => {
					child.classList.remove("animate");
				});
			}
		});
	}
}

// Initialize Effects
let particleSystem;
let scrollAnimations;

document.addEventListener("DOMContentLoaded", () => {
	// Mark body as loaded for CSS
	document.body.classList.add("loaded");

	// Initialize particle system
	particleSystem = new ParticleSystem();

	// Initialize scroll animations after a brief delay
	setTimeout(() => {
		scrollAnimations = new ScrollAnimations();
	}, 500);

	// Update particles when theme changes
	const originalToggleTheme = toggleTheme;
	toggleTheme = function () {
		originalToggleTheme();
		if (particleSystem) {
			setTimeout(() => particleSystem.updateTheme(), 300);
		}
	};
});

// Export for potential future module usage
window.SecurityTerminal = {
	AppState,
	ProjectsData,
	toggleTheme,
	switchProjectFilter,
	ParticleSystem,
	ScrollAnimations,
};
