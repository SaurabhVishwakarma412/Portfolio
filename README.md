# 👨‍💻 Saurabh Vishwakarma - Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x630/0a0a0a/64ffda?text=Saurabh+Vishwakarma+Portfolio)

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-64ffda?style=for-the-badge&logo=vercel&logoColor=black)](https://your-portfolio-url.vercel.app)
[![GitHub](https://img.shields.io/badge/GITHUB-0a0a0a?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SaurabhVishwakarma412)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-0a0a0a?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saurabhvishwakarma4)
[![LeetCode](https://img.shields.io/badge/LEETCODE-0a0a0a?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/Saurabh_Vishwakarma01/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Projects Showcase](#-projects-showcase)
- [Pages & Sections](#-pages--sections)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [Connect With Me](#-connect-with-me)

---

## 🎯 Overview

This is my personal portfolio website built with **React.js** and **Tailwind CSS**. It showcases my journey as a Full Stack Developer, featuring my projects, skills, certifications, and achievements. The design is inspired by modern portfolio trends with a clean, dark theme and smooth animations.

**Key Highlights:**
- 🚀 Full Stack Developer with 2.2+ years of experience
- 💻 320+ LeetCode problems solved
- 🏆 7 HackerRank badges
- 🎓 10+ certifications
- 📍 Based in Punjab, India (LPU)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌓 **Dark Theme** | Modern dark interface with accent colors |
| 📱 **Fully Responsive** | Perfect on mobile, tablet, and desktop |
| ⚡ **Fast Performance** | Built with Vite for lightning-fast loads |
| 🎨 **Smooth Animations** | Framer Motion for elegant transitions |
| 📊 **Live Stats** | LeetCode & GitHub stats integration |
| 🏷️ **Project Filtering** | Filter projects by technology |
| 📬 **Contact Form** | Functional contact form with email integration |
| 🧭 **Clean Navigation** | Smooth scrolling and active route highlighting |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) |
| **Routing** | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) |
| **Animations** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) |
| **Icons** | ![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) |

</div>

---

## 🚀 Projects Showcase

### 1. 🩺 Pediatric Dermatology
> **Dec 2025 | v1.0.0**

A full-stack web platform enabling parents to upload images of their child's skin condition and receive remote dermatological assessment.

**Features:**
- Secure image upload and case management
- Doctor consultation workflow with diagnostic notes
- Responsive interface for all devices

**Tech:** React.js, Tailwind CSS, Express.js, Node.js, MongoDB

[![GitHub](https://img.shields.io/badge/View_Code-0a0a0a?style=flat&logo=github)](https://github.com/SaurabhVishwakarma412/PedoDerma)

---

### 2. 🌱 Horticulture Connect
> **Mar 2025 | v2.0.0**

Platform connecting farmers, wholesalers, and consumers for direct trade with secure authentication.

**Features:**
- Real-time crop prices tracking
- Storage capacity monitoring
- Interactive dashboards with graphs
- Farmer profile modules

**Tech:** HTML, Tailwind CSS, JavaScript, MySQL, PHP

[![GitHub](https://img.shields.io/badge/View_Code-0a0a0a?style=flat&logo=github)](https://github.com/SaurabhVishwakarma412/Horti-connect)

---

### 3. 🎮 Browser-Based Mini Games
> **Nov 2024 | v3.0.0**

A suite of browser-based mini-games with modular code components and engaging interfaces.

**Features:**
- Optimized game logic in JavaScript
- Smooth gameplay experience
- Scalable and maintainable codebase

**Tech:** HTML, CSS, JavaScript

[![GitHub](https://img.shields.io/badge/View_Code-0a0a0a?style=flat&logo=github)](https://github.com/SaurabhVishwakarma412/MINI-GAMES)

---

## 📄 Pages & Sections

| Page | Sections |
|------|----------|
| **Home** | Hero, Skills, Projects, Achievements, Certifications, Education, Leadership |
| **Projects** | Filterable project grid with technology tags |
| **Contact** | Contact form, social links, availability info |

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/SaurabhVishwakarma412/saurabh-portfolio.git

# Navigate to project directory
cd saurabh-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

---

## 📁 Folder Structure

```
saurabh-portfolio/
├── public/                 # Static assets
│   ├── images/            # Project images, profile pic
│   └── resume.pdf         # Downloadable resume
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBadge.jsx
│   │   ├── CertificateCard.jsx
│   │   ├── StatCard.jsx
│   │   └── SectionHeading.jsx
│   ├── layouts/           # Layout wrappers
│   │   └── MainLayout.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── utils/             # Data and constants
│   │   └── constants.js   # All personal data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📦 Installation (Detailed)

```bash
# Create Vite project
npm create vite@latest saurabh-portfolio -- --template react

# Install dependencies
npm install react-router-dom react-icons framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind
Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo directly at vercel.com
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

---

## 📊 Performance

- **Lighthouse Score:** 95+ on all metrics
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** Optimized with code splitting

---

## 📬 Connect With Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-saurabhkv412%40gmail.com-64ffda?style=for-the-badge&logo=gmail&logoColor=white)](mailto:saurabhkv412@gmail.com)
[![Phone](https://img.shields.io/badge/Phone-%2B91--9006848835-64ffda?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+919006848835)

</div>

### Social Links

- **LinkedIn:** [saurabhvishwakarma4](https://linkedin.com/in/saurabhvishwakarma4)
- **GitHub:** [SaurabhVishwakarma412](https://github.com/SaurabhVishwakarma412)
- **LeetCode:** [Saurabh_Vishwakarma01](https://leetcode.com/u/Saurabh_Vishwakarma01/)
- **HackerRank:** [@saurabhkv412](https://www.hackerrank.com/profile/saurabhkv412)

---

## 📝 License

This project is **open source** and available under the MIT License.

---

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

### ⭐ Star this repository if you find it useful!

**Built with ❤️ by Saurabh Vishwakarma**

</div>
#   P o r t f o l i o  
 #   S a u r a b h  
 