# SAAS-Guard — Research Portfolio Website

![SAAS-Guard Logo](Asserts/logo.png)

**SAAS-Guard** is an AI-powered framework for granular access control in SaaS applications, featuring anomaly detection, role recommendation, access classification, and explainable AI. 

This repository contains the source code for the official modern, single-page application (SPA) research portfolio designed to showcase the SAAS-Guard project, team, research publications, and timeline. 

## 🚀 Key Features

- **Modern UI/UX Aesthetic:** Dark-themed cybersecurity aesthetic with glassmorphism, floating elements, gradient text, and electric neon accents.
- **Interactive Animations:** Uses **GSAP**, **tsParticles**, and custom CSS animations for an engaging, dynamic user experience.
- **Centralized Data Management:** All content (team profiles, documents, milestones) is managed centrally in `js/data.js` for easy future updates.
- **Responsive Design:** Fully responsive layout catering to desktops, laptops, tablets, and mobile devices.
- **Serverless Contact Form:** Integrated with **Formspree** to effortlessly route contact emails straight to the official project inbox.
- **Performance Optimized:** Uses `IntersectionObserver` to trigger clean scroll-reveals that remain robust across all browsers and prevent DOM overloading.

## 🛠️ Technology Stack

- **HTML5:** Semantic markup structure.
- **Vanilla CSS3:** Highly curated dark mode design system (using CSS Variables) with a no-framework approach for maximum granular control.
- **Vanilla JavaScript ES6+:** Core logic, scroll tracking, and data templating.
- **Libraries:**  
  - [Lucide Icons](https://lucide.dev/) (SVG icons)
  - [tsParticles](https://particles.js.org/) (Interactive hero background canvas)
  - [GSAP](https://gsap.com/) (Hero entrance animations)

## 📁 Repository Structure

```text
/
├── Asserts/               # Contains logos, thumbnail images, architecture diagrams, etc.
├── css/
│   └── style.css          # The master stylesheet and design system
├── js/
│   ├── data.js            # Central source of truth for milestones and changing data
│   ├── main.js            # Main application logic (scroll observer, rendering, interactions)
│   └── particles-config.js# Configuration for the Hero background particles effect
├── index.html             # The main Single Page Application file
└── README.md              # You are here!
```

## 🚀 Local Development / Running the Site

Because this site uses pure frontend technologies, it doesn't require complex build steps or node packages. 

1. **Clone the repository** to your local machine.
2. **Open `index.html`** in any modern web browser or run it using a local server extension (e.g., *Live Server* in VS Code) for the best results (running locally on `http://` ensures all JS modules and CDNs cleanly resolve).

## 📝 Updating the Content

Instead of scrolling through hundreds of lines of HTML to update a deadline or title, this project employs a **data-driven methodology**.

To update milestones or contact details:
1. Open up `js/data.js`
2. Update the corresponding JS arrays and objects.
3. Save the file. The website’s DOM logic will automatically ingest the new details on reload.

## 🤝 Project Team

- Dinusha Karunarathne (IT22352262)
- Saranga Sandakalum (IT22620248)
- Achira Rathnayake (IT22609762)
- Anuradha Bandara (IT22597274)

*Sri Lanka Institute of Information Technology (SLIIT)* | *Project ID: 25-26J-053*
