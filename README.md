# Modern Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x630/000000/FFFFFF/?text=Pratyush+Tiwari+Portfolio)

A minimalistic, professional portfolio website built with React, Vite, TailwindCSS, Framer Motion, and GSAP. Features a modern ShadCN-like UI/UX design, bento grid layouts, monotone black and white theme, and a fully responsive design.

## 🌟 Features

- **Minimalistic Design**: Clean black and white monotone aesthetic with mono text
- **Dark Mode**: Modern dark theme throughout the site
- **Bento Grid Layout**: Modern L-shaped layout on hero section and throughout
- **Content Management**: All content dynamically sourced from a central content file
- **Interactive Elements**: Smooth animations, modals, hover states, and micro-interactions
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Fast loading times and smooth scrolling experience
- **Modern Stack**: Built with the latest web technologies

## 🛠️ Technologies

### Frontend
- **React**: UI library for building component-based interfaces
- **Vite**: Next-generation frontend tooling for fast development and optimized builds
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **GSAP**: Professional-grade animation library
- **Lenis**: Smooth scroll library
- **Lucide React**: Beautiful, consistent icon set

### Developer Experience
- **ESLint**: Code linting and static analysis
- **Modern JavaScript**: ES6+ features and best practices
- **Component Architecture**: Modular, reusable component design

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # React components
│   │   ├── Hero.jsx      # Hero section with bento grid layout
│   │   ├── About.jsx     # About section
│   │   ├── Skills.jsx    # Skills section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Experience.jsx # Work and education experience
│   │   ├── Contact.jsx   # Contact information
│   │   ├── Footer.jsx    # Footer component
│   │   └── Navbar.jsx    # Navigation component
│   ├── data/
│   │   └── content.js    # Centralized content management
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 🔧 Customization

### Content Management

All portfolio content is managed in a single file:
```
src/data/content.js
```

This includes:
- Personal information
- Skills and expertise
- Projects showcase
- Work experience
- Education history
- Contact details
- Social links

Simply edit this file to update the content displayed throughout the site.

### Styling

The project uses TailwindCSS for styling with a consistent theme:
- Dark monotone color palette (black, white, neutral grays)
- Modern minimalistic design
- No gradients or excessive decorations
- Mono text throughout for a clean aesthetic

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Lucide Icons](https://lucide.dev/)

---

Designed & Developed by [Pratyush Tiwari](https://github.com/CR-8) © 2025
