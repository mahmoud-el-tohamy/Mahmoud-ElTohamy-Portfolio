# Mahmoud ElTohamy - Personal Portfolio

Welcome to my personal portfolio repository! This project is a highly customized, sleek, and responsive personal website built with **Next.js**, **React**, and **TailwindCSS**. It serves as my digital resume, showcasing my skills, projects, and providing an easy way for people to reach out to me.

## 🚀 Key Features & Enhancements

This project started as a template but has been heavily customized to fit my personal brand and aesthetic preferences. Some of the key enhancements include:

- **Sleek Dark Mode by Default**: Optimized the UI for a beautiful, eye-catching dark mode experience with glassmorphism effects and modern styling.
- **Dynamic 3D Project Cards**: Implemented a custom 3D tilt effect on the work cards using React State. The cards seamlessly follow the mouse cursor with a 3D perspective, providing a premium and interactive user experience.
- **Integrated Contact Form**: Replaced generic "Schedule a Call" buttons with a fully functional, integrated contact form powered by **Web3Forms**. Visitors can send me emails directly from the site without any backend required.
- **Personalized Branding**: 
  - Added my personal profile picture as a stylish hero image with masking and glowing effects.
  - Set the site favicon to match my branding.
  - Added a dedicated **Download CV** button prominently in the navigation bar for easy access to my resume.
- **Refined UI/UX**:
  - Improved button hover states and transitions for a smoother, non-distracting navigation experience.
  - Cleaned up unused components and optimized the codebase for better performance.
  - Fully responsive design that looks great on mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: Framer Motion / Custom React State
- **Form Handling**: [Web3Forms](https://web3forms.com/)
- **Icons**: SVG & Headless UI

## 🏃‍♂️ Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file in the root directory and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `components/`: Reusable React components (Header, Footer, WorkCard, ContactForm, etc.)
- `pages/`: Next.js pages and routing
- `public/`: Static assets including images, SVGs, and the CV file
- `data/portfolio.json`: The central data file driving the content of the site

---

*Designed and developed to showcase the best of my work. Feel free to explore the code!*
