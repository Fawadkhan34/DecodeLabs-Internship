# DecodeLabs - Project 1: Responsive Layout

## Project Overview

This project is a responsive layout implementation created as part of the DecodeLabs Internship Program. It demonstrates modern web development practices with a focus on mobile-first design, accessibility, and clean semantic HTML structure.

## Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Custom properties, CSS Grid, Flexbox, and responsive design
- **JavaScript**: Vanilla JS for enhanced interactivity (mobile navigation toggle)
- **Google Fonts**: Inter (headings) and Open Sans (body text)

## Design System

### Color Palette

| Color Name | Hex Value | Usage |
|------------|-----------|--------|
| Mocha Mousse | #AS956F | Primary accent, borders, hover states |
| Ethereal Blue | #A0D4E0 | Icon placeholders, secondary accents |
| Moonlit Grey | #F2F0EA | Page background |
| Dark Neutral | #2C2A29 | Primary text, buttons, footer |
| White | #FFFFFF | Card backgrounds, header |

### Typography

- **Headings**: 'Inter', sans-serif (700, 600 weights)
- **Body**: 'Open Sans', sans-serif (400, 600 weights)
- **Heading Scale**: Clamp(1.8rem, 4vw, 2.5rem) for responsive sizing

## Features

### 1. Responsive Navigation
- Desktop: Horizontal navigation with action button
- Mobile: Hamburger menu toggle with smooth expand/collapse
- ARIA attributes for accessibility support

### 2. Layout Structure
- **Header**: Sticky navigation with logo and menu
- **Side Panel**: Contextual navigation/menu area
- **Main Content**: Hero section and feature cards
- **Footer**: Site-wide footer with copyright

### 3. Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|---------------|
| < 768px | Single column layout, mobile navigation |
| 768px - 1023px | 3-column card grid |
| ≥ 1024px | Side panel + main content grid layout |

### 4. Components
- **Cards**: Clean, rounded containers with icon placeholders
- **Buttons**: Dark neutral with hover state transitioning to Mocha Mousse
- **Hero Section**: Centered content with accent border

## File Structure

```
project/
├── index.html          # Main HTML file
├── style.css           # All styles and responsive rules
├── script.js           # Navigation toggle functionality
└── README.md           # Project documentation
```

## Installation & Setup

1. Clone or download the project files
2. No build tools or dependencies required
3. Open `index.html` in your browser
4. For development, use Live Server or similar for hot reload

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Responsive design ensures compatibility across devices

## Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`)
- ARIA attributes for navigation toggle
- Proper heading hierarchy (h1, h2, h3)
- Focus-visible states for interactive elements
- Color contrast compliant with WCAG guidelines
- Keyboard-navigable menu

## Performance Optimizations

- Minimal external dependencies
- CSS custom properties for maintainability
- Efficient CSS selectors
- No external images (built with CSS only)
- Google Fonts with preconnect for faster loading

## Design Principles

### Mobile-First Approach
The layout is designed for mobile devices first, with enhancements progressively added for larger screens.

### Semantic Structure
Clear, meaningful HTML structure that communicates content hierarchy and purpose.

### Visual Hierarchy
- Hero section draws attention with accent border
- Cards create a balanced, readable content grid
- Navigation remains prominent and accessible

### User Experience
- Intuitive navigation patterns
- Clear call-to-action buttons
- Consistent spacing and alignment
- Warm, approachable color scheme

## Responsive Behavior

### Mobile (≤ 767px)
- Single column layout
- Collapsible navigation menu
- Full-width hero section
- Stacked card layout

### Tablet (768px - 1023px)
- Three-column card grid
- Expanded navigation
- Enhanced spacing

### Desktop (≥ 1024px)
- Side panel + main content grid
- Optimized padding and spacing
- Full navigation visibility

## Future Enhancements

Potential improvements for future iterations:

1. **JavaScript Enhancements**
   - Smooth scroll animations
   - Intersection Observer for reveal animations
   - Dark/light theme toggle

2. **Component Additions**
   - Carousel/slider component
   - Accordion sections
   - Modal dialogs

3. **Performance**
   - Image optimization
   - Lazy loading
   - Service worker for offline support

4. **Accessibility**
   - Skip-to-content link
   - Enhanced screen reader support
   - Reduced motion preferences

## Credits

- **Design**: DecodeLabs Design Team
- **Development**: DecodeLabs Internship Program
- **Typography**: Google Fonts (Inter, Open Sans)

## License

This project is part of the DecodeLabs Internship Program curriculum.

