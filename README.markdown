# Pixll Portfolio Website

## Overview

This is a modern portfolio website built with **Next.js** and **TypeScript**, showcasing a digital agency's services, recent works, and insights. The website features a responsive design with smooth animations, a draggable card section, and a sleek dark theme with gradient backgrounds. It uses **Tailwind CSS** for styling and the "Rethink Sans" font for typography, ensuring a professional and visually appealing user experience.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Hero Section**: A full-screen hero section with a background image, client logos, and a call-to-action button.
- **Card Section**: A horizontally scrollable card section with drag-and-drop functionality and middle card scaling animation.
- **Service Section**: Displays service cards with a background image, icons, and overlapping card styles with `transform` and `boxShadow`.
- **Recent Work Section**: Showcases recent projects in a grid layout (2 cards in the first row, 3 in the second) with a gradient background header.
- **Featured Insights Section**: Lists featured articles with a numbered index and a "View More" button.
- **Footer**: Includes a contact section, social media links, and a three-color gradient background.
- **Navbar**: A fixed navigation bar with a scroll-based background effect and a mobile hamburger menu.
- **Custom Fonts**: Uses "Rethink Sans" for typography, integrated via Google Fonts.
- **Assets Management**: Images are organized in the `public` directory and imported via a centralized `Images.ts` file.

## Project Structure

```
├── public/
│   ├── Hero Section/        # Images for HeroSection (client logos)
│   ├── Card/               # Images for CardSection
│   ├── ServiceCard/        # Icons for ServiceSection
│   ├── RecentWork/         # Images for RecentWork section
│   └── Group.png           # Background images (e.g., serviceBg, logo)
├── src/
│   ├── components/         # React components
│   │   ├── CardSection.tsx
│   │   ├── Featured.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── RecentWork.tsx
│   │   └── ServiceSection.tsx
│   ├── pages/
│   │   ├── _app.tsx        # Custom App component
│   │   ├── index.tsx       # Home page
│   │   └── [...slug].tsx   # Dynamic routes (if any)
│   └── utils/
│       └── Images.ts       # Centralized image imports
├── styles/
│   └── globals.css         # Global styles with Tailwind CSS and font imports
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Adnan2001Bin/internshiptask.git
   cd internshiptask
   ```

2. **Install dependencies**: Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Run the development server**: Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

4. **Open the app**: Navigate to `http://localhost:3000` in your browser to view the website.

## Dependencies

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Next/Font**: For integrating Google Fonts (used for "Rethink Sans").

## Usage

- **Customize Content**: Update the `cardItems` arrays in each component (`CardSection`, `RecentWork`, `Featured`, `ServiceSection`) to reflect your own projects, services, or insights.
- **Replace Images**: Swap out the placeholder images in the `public` directory with your own assets, ensuring to update the imports in `Images.ts`.
- **Styling**: Modify the `globals.css` file or component-level styles to adjust the design (e.g., gradients, colors, typography).
- **Deployment**: Deploy the app to Vercel or another hosting platform by following Next.js deployment guides.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.