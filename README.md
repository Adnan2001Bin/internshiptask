# My Next.js Project

Welcome to my Next.js project! This is a web application built using Next.js, featuring a responsive design with various sections like a hero section, card gallery, service offerings, recent works, featured insights, and a footer. The project utilizes Tailwind CSS for styling and includes custom components for a dynamic user experience.

## Overview

This project showcases a portfolio or service-based website with the following key features:

- **Hero Section**: A full-screen introduction with a background image and client logos.
- **Card Section**: A horizontally scrollable gallery of cards with a scaling effect on the middle card.
- **Service Section**: A grid layout displaying different service offerings with icons and descriptions.
- **Recent Work**: A section highlighting recent projects with images and details.
- **Featured Insights**: A list of featured articles or insights with a gradient header.
- **Footer**: A footer with contact information, social links, and copyright details.
- **Navbar**: A responsive navigation bar with a mobile menu.

The project is styled with Tailwind CSS and uses the "Rethink Sans" and "Geist" fonts for a modern look.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd internshiptask

2. Install dependencies:
npm install
# or
yarn install


3. Run the development server:

npm run dev
# or
yarn dev


4. Visit http://localhost:3000 in your browser to see the app.

# Directory Structure

internshiptask/
├── .next/              # Next.js build output
├── node_modules/       # Node.js dependencies
├── public/             # Static assets
│   ├── Card/           # Card section images
│   ├── Hero Section/   # Hero section images
│   ├── RecentWork/     # Recent work images
│   ├── ServiceCard/    # Service card icons
│   ├── Group 1.png     # Logo image
│   └── Group.png       # Service background image
├── src/                # Source files
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout with Navbar
│   │   ├── page.tsx    # Home page with all sections
│   │   └── globals.css # Global styles with Tailwind
│   ├── components/     # Reusable components
│   │   ├── CardSection.tsx  # Scrollable card gallery
│   │   ├── Featured.tsx     # Featured insights list
│   │   ├── Footer.tsx       # Footer with contact and social links
│   │   ├── HeroSection.tsx  # Hero section with background and logos
│   │   ├── Navbar.tsx       # Responsive navigation bar
│   │   ├── RecentWork.tsx   # Recent works grid
│   │   └── ServiceSection.tsx # Service offerings grid
│   └── utils/           # Utility files
│       └── images.ts    # Image imports
├── .gitignore           # Git ignore file
├── eslint.config.mjs    # ESLint configuration
├── next-env.d.ts        # Next.js type definitions
├── next.config.ts       # Next.js configuration
├── package-lock.json    # Lock file for dependencies
└── README.md            # This file




# Usage
Navigate through the site using the Navbar, which includes links to Work, About, Blog, and Contact pages.
Explore the HeroSection for an introduction and client logos.
Scroll through the CardSection to view a gallery of images with a zoom effect on the centered card.
Check the ServiceSection for available services with unique styling.
View recent projects in the RecentWork section.
Read featured insights in the Featured section.
Find contact information and social links in the Footer.




8. Features
Responsive Design: The layout adjusts seamlessly across mobile, tablet, and desktop screens.
Interactive Elements: CardSection includes drag scrolling with inertia, and Navbar has a mobile menu.
Custom Styling: Utilizes Tailwind CSS with custom gradients and font families.
Image Optimization: Next.js Image component is used for optimized image loading.



8. Contributing
Fork the repository.
Create a new branch: git checkout -b feature-name.
Make your changes and commit: git commit -m "Add feature-name".
Push to the branch: git push origin feature-name.
Submit a pull request.


9. Acknowledgments
Built with Next.js
Styled with Tailwind CSS
Fonts from Google Fonts (Geist and Rethink Sans)
Images sourced from project assets and Pixabay for placeholder backgrounds.
