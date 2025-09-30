# Personal Portfolio Website

A modern, responsive portfolio website showcasing technical skills, projects, and professional certifications with a sleek "Security Terminal" aesthetic.

## 🚀 Live Demo
Visit the live portfolio: [Portfolio Website](https://saviour2.github.io/WebDev/)

## ✨ Features

### 🎨 Design & UX
- **Dual Theme System:** Cloud (Light) and Cybersecurity (Dark) modes
- **Professional Aesthetics:** Security terminal-inspired design with glassmorphism effects
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Smooth Animations:** Scroll-based fade-ins, hover effects, and transitions
- **Accessibility Compliant:** WCAG guidelines with ARIA labels and reduced motion support

### 📋 Content Sections
- **Hero Section:** Dynamic introduction with animated background
- **About (INTEL):** Student profile with academic achievements and specializations
- **Projects (OPERATIONS):** Filterable project showcase with technology badges
- **Certifications:** 6-category filtering system (Frontend, Backend, Cloud/DevOps, AI/ML, Cybersecurity, Professional)
- **Contact:** Social media links and professional connections

### 🛠 Technical Features
- **Static Deployment:** No external dependencies or databases required
- **Certificate System:** Hardcoded certificate cards with instant category filtering
- **Resume Integration:** Secure PDF viewer with watermark protection
- **Performance Optimized:** Hardware-accelerated animations and efficient rendering
- **Cross-Browser Compatible:** Works on Chrome, Firefox, Safari, and Edge

## 🏗 Project Structure

```
portfolio2/
├── index.html              # Main HTML structure
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles and animations
│   ├── js/
│   │   └── script.js      # Interactive functionality
│   ├── images/            # Project and UI images
│   └── Files/             # Documents (CV, etc.)
├── .gitignore            # Git exclusion rules
└── README.md             # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Web server (for local development) or static hosting service

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/saviour2/WebDev.git
   cd WebDev
   ```

2. Open with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. Navigate to `http://localhost:8000` (or your server's address)

### Deployment
This is a static website that can be deployed to any web hosting service:
- **GitHub Pages** (recommended)
- Netlify
- Vercel
- Any traditional web hosting

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Tailwind CSS (CDN) + Custom CSS
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Inter (UI), JetBrains Mono (Code)
- **Animations:** Custom CSS keyframes and transitions

## 🎯 Key Highlights

### 📚 Educational Background
- **B.Tech Information Technology** - 8.82 SGPA
- **Google Student Ambassador** - Leadership role in developer community
- **IBM SkillsBuild Internship** - 6-week intensive front-end development program

### 🏆 Certification Categories
- **Frontend Development:** HTML5, CSS3, JavaScript, React, Web Accessibility
- **Backend Development:** ASP.NET Core, MEAN Stack, Data Structures & Algorithms
- **Cloud & DevOps:** Google Cloud Computing Foundations
- **AI/ML:** Artificial Intelligence for Beginners
- **Cybersecurity:** Deloitte Cyber Experience, CTF Competitions
- **Professional Skills:** Data Analytics, Communication, Time Management

### 🚀 Featured Projects
- **Personal Portfolio Website:** Modern responsive design with advanced animations
- **E-Commerce Desktop Application:** Java/JavaFX with MySQL database
- **Google Student Ambassador Activities:** Community leadership and event management
- **IBM SkillsBuild Certification Program:** Comprehensive front-end development training

## 🔧 Customization

### Adding New Certificates
1. Open `index.html`
2. Locate the certificates section
3. Add new certificate cards following the existing HTML structure
4. Update the category filter if needed

### Modifying Content
- **Personal Info:** Update the About section in `index.html`
- **Projects:** Modify the projects array in `assets/js/script.js`
- **Styling:** Customize colors and themes in `assets/css/style.css`
- **Resume:** Replace the PDF file in `assets/Files/` directory

### Theme Customization
The website supports dual themes with CSS variables:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 70+     | ✅ Full Support |
| Firefox | 65+     | ✅ Full Support |
| Safari  | 12+     | ✅ Full Support |
| Edge    | 79+     | ✅ Full Support |

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email:** [Your Email]
- **LinkedIn:** [Your LinkedIn Profile]
- **GitHub:** [saviour2](https://github.com/saviour2)
- **Portfolio:** [Live Website](https://saviour2.github.io/WebDev/)

---

## 📈 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time:** < 2 seconds on standard broadband
- **Mobile Friendly:** Fully responsive design
- **SEO Optimized:** Semantic HTML structure with proper meta tags

---

*Built with ❤️ using modern web technologies*