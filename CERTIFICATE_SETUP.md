# Certificate Integration Instructions

## 📋 Steps to Add Your Certificates

### 1. Copy Certificate Files
Copy your certificate files from:
```
/Users/saikat/Documents/Personal/Certificates
```
To:
```
/Users/saikat/Developer/Programming/Internship Projects/Portfolio/portfolio2/assets/certificates/
```

### 2. Update JavaScript Data
Edit `assets/js/script.js` and update the `CertificationsData` array:

```javascript
const CertificationsData = [
    {
        id: 1,
        title: "Your Certificate Name",
        issuer: "Issuing Organization", 
        date: "2024",
        icon: "fas fa-certificate", // Font Awesome icon
        image: "assets/certificates/your-certificate.jpg" // or .pdf
    },
    {
        id: 2,
        title: "Another Certificate",
        issuer: "Another Organization",
        date: "2023", 
        icon: "fas fa-shield-alt",
        image: "assets/certificates/certificate2.pdf"
    }
    // Add more certificates as needed
];
```

### 3. Icon Options
Choose appropriate Font Awesome icons:
- `fas fa-certificate` - General certificate
- `fas fa-shield-alt` - Security certifications
- `fas fa-cloud` - Cloud certifications
- `fas fa-code` - Programming certifications
- `fas fa-graduation-cap` - Academic certifications
- `fas fa-award` - Achievement awards

### 4. Supported File Formats
- `.jpg`, `.jpeg`, `.png` - Image certificates
- `.pdf` - PDF certificates (will open in new tab)

### 5. File Naming Convention
Recommended naming:
- `aws-solutions-architect.pdf`
- `comptia-security-plus.jpg`
- `kubernetes-administrator.png`

## 🔧 Current Status
- ✅ Directory structure created
- ✅ JavaScript functions implemented
- ✅ Dynamic loading system ready
- 🔄 **Waiting for certificate files to be copied**
- 🔄 **Waiting for CertificationsData to be populated**

## 🎯 Result
Once completed, your certificates will:
- Display dynamically in a professional grid
- Show certificate details (title, issuer, date)
- Allow clicking to view full certificate
- Maintain the security terminal aesthetic
- Be fully responsive across devices

## 📝 Note
The hardcoded certificates have been commented out in the HTML and can be restored later if needed.