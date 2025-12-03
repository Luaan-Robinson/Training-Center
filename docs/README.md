# EmpowerTech Training Center 🎓

A modern, fully responsive landing page showcasing a fictional tech training center. This project demonstrates front-end development skills including responsive design, accessibility best practices, and interactive JavaScript components.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://luaan-robinson.github.io/Training-Center/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Features

### User Interface
- **Multi-page Navigation** - Home, Services, and Contact pages with smooth transitions
- **Fully Responsive Design** - Mobile-first approach with optimized layouts for all screen sizes
- **Interactive Testimonial Carousel** - Auto-rotating carousel with 8 student testimonials and manual navigation
- **Google Maps Integration** - Embedded map with clickable address link
- **Mobile Hamburger Menu** - Collapsible navigation for mobile devices with smooth animations

### Form Features
- **Client-side Form Validation** - Real-time validation for name and email fields
- **Custom Error Messages** - User-friendly error messages with visual feedback
- **Success Notifications** - Animated confirmation messages after form submission
- **Accessibility-focused** - ARIA labels and keyboard navigation support

### Interactive Elements
- **Scroll-to-Top Button** - Appears after scrolling 300px with smooth scroll animation
- **Animated Stats Counter** - Numbers count up when scrolled into view using Intersection Observer
- **Hover Effects** - Interactive hover states on all clickable elements
- **Smooth Scrolling** - Enhanced UX with smooth scroll behavior for anchor links

### Design & Styling
- **Modern Gradient Theme** - Purple gradient design (#667eea to #764ba2)
- **CSS Variables** - Centralized theming for easy customization
- **Card-based Layout** - Clean, organized content sections with subtle shadows
- **Professional Typography** - Responsive font sizing using CSS `clamp()`

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and modern HTML features
- **CSS3** 
  - Flexbox & CSS Grid for layouts
  - CSS Custom Properties (variables)
  - Media queries for responsive design
  - CSS animations and transitions
- **Vanilla JavaScript**
  - DOM manipulation
  - Event handling
  - Intersection Observer API
  - Form validation
  - ES6+ features

## 📱 Responsive Breakpoints

- **Small phones**: < 480px
- **Tablets/Large phones**: 481px - 768px (Hamburger menu activates)
- **Desktop**: 769px - 1199px
- **Large desktops**: 1200px+

## ♿ Accessibility Features

- WCAG 2.1 AA compliant
- ARIA labels and roles throughout
- Keyboard navigation support
- Skip-to-content link for screen readers
- Semantic HTML structure
- Focus indicators for keyboard users
- Alt text and descriptive labels

## 🚀 View Live

**[View Demo →](https://luaan-robinson.github.io/Training-Center/)**

## 💻 Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Luaan-Robinson/Training-Center.git

# Navigate to the project directory
cd Training-Center/docs

# Open index.html in your browser
# Or use Live Server extension in VS Code
```

### File Structure

```
Training-Center/
├── docs/
│   ├── index.html           # Homepage
│   ├── services.html        # Services page
│   ├── contact.html         # Contact page
│   ├── style3.css           # Main stylesheet
│   ├── form-validation.js   # JavaScript functionality
│   └── README.md            # Project documentation
├── README.md                # Main README
└── .gitignore
```

## 📋 Pages Overview

### Home Page (`index.html`)
- Hero section with compelling CTAs
- "Why Choose Us" benefits grid
- Testimonial carousel with 8 stories
- Stats section with animated counters
- Final CTA section

### Services Page (`services.html`)
- Overview of 5 training programs:
  - 🔒 Cybersecurity & Networking
  - 💻 Programming & Development
  - ☁️ Cloud & DevOps
  - 🤖 AI & Data Science
  - 🚀 Digital Entrepreneurship
- Corporate training packages
- Program features list

### Contact Page (`contact.html`)
- Contact information with clickable links
- Embedded Google Maps
- Registration form with validation
- Comprehensive FAQ section

## ✨ Key Features Breakdown

### Testimonial Carousel
- Auto-rotates every 5 seconds
- Manual navigation with clickable dots
- Pauses on hover
- Smooth fade-in animations
- Fully accessible with ARIA labels

### Form Validation
- Real-time field validation
- Visual error/success states
- Name validation (2+ characters, letters only)
- Email format validation
- Accessible error messages
- Prevents double submission

### Mobile Menu
- Hamburger icon for mobile devices
- Smooth slide-in animation
- Closes on link click or outside click
- ARIA expanded/collapsed states

## 🎨 Color Palette

```css
Primary Purple:   #667eea
Secondary Purple: #764ba2
Text Dark:        #2d3748
Background:       #f0f8ff (alice blue)
Error Red:        #e53e3e
Success Green:    #48bb78
```

## 🔄 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Dark mode toggle
- [ ] Additional animation polish
- [ ] Blog section with articles
- [ ] Student portal login
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Course filtering and search

## 📈 Performance

- Optimized images and assets
- Minimal external dependencies
- Efficient JavaScript with event delegation
- CSS animations using GPU acceleration
- Lazy loading preparation for future images

## 🐛 Known Issues

- Form submissions are client-side only (demo mode)
- No backend server integration yet
- Limited IE11 support (modern browsers recommended)

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- IE11 (limited support)

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'ETC-X Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Luaan Robinson**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luaan-robinson-a6338621b)
[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/Luaan-Robinson)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?logo=google-chrome&logoColor=white)](https://github.com/Luaan-Robinson?tab=repositories)

## 📄 License

© 2025 EmpowerTech Training Center. All rights reserved.

This project is for portfolio demonstration purposes.

---

## 🔗 Related Projects

Check out my other projects:
- [C# Windows Form Calculator](https://github.com/Luaan-Robinson/Calculator.git)
- [Tic Tac Toe Game | Java Swing](https://github.com/Luaan-Robinson/TicTacToe.git)

---

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons: Unicode emoji characters
- Background image: Wallpaper Cave
- Fonts: System font stack for optimal performance

---

**⭐ If you found this project helpful, please consider giving it a star!**

## 📊 Project Stats

- **Lines of Code**: ~1,500+
- **Files**: 5 main files
- **Development Time**: 2 weeks
- **Last Updated**: December 2024
- **Status**: ✅ Production Ready
