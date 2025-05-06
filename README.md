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

tour-mate/
│
├── public/                         # Public assets like favicon
│   └── favicon.svg
├── src/
│   ├── app/                        # Next.js app routes
│   │   ├── layout.tsx              # Global layout for all pages
│   │   ├── page.tsx                # Main landing page
│   │   └── ...                     # Other routes
│   ├── components/                 # Reusable UI components
│   ├── lib/                        # Utility functions and static data
│   ├── styles/                     # Global and module-based CSS
│       ├── globals.css             # Global CSS
│       └── modules/
├── .gitignore                       # Git ignore rules
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Node.js dependencies and scripts
├── postcss.config.mjs               # PostCSS configuration
├── tailwind.config.ts               # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation




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
