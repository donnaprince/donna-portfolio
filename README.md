# Donna Prince Portfolio - Phase 2 Complete! 🎉

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion animations.

## 🚀 **Phase 2 Features: Theme Pass & Motion**

### ✨ **Scroll-Triggered Animations with Framer Motion**
- **Fade and slide animations** for each section as they enter viewport
- **Staggered animations** with progressive delays for smooth flow
- **Reduced motion support** - respects user preferences
- **Custom animation hooks** for reusable scroll detection
- **Spring physics** for natural, bouncy interactions

### 🎨 **Section Accent Colors Applied**
- **Hero**: electricBlue accents with floating elements
- **About**: coral accents with highlight animations
- **CareerReel**: deepRed accents with card hover effects
- **Research**: emerald accents with progress indicators
- **Skills**: royalPurple accents with animated skill bars
- **ArtScrapbook**: pastel accents (mint, pink, butter, lilac) with decorative tape/pins
- **Contact**: skyBlue accents with glass morphism

### 🌊 **Parallax Backgrounds**
- **Subtle parallax effects** per section
- **Floating geometric elements** with blur effects
- **Dynamic background gradients** that respond to scroll
- **Layered depth** for immersive experience

## 🏗️ **Project Structure**

```
donna-portfolio/
├── components/           # React components with animations
│   ├── Hero.jsx         # Hero with electricBlue accents & parallax
│   ├── About.jsx        # About with coral accents & highlights
│   ├── CareerReel.jsx   # Career with deepRed accents & cards
│   ├── Research.jsx     # Research with emerald accents & progress
│   ├── SkillsMatrix.jsx # Skills with royalPurple accents & bars
│   ├── ArtScrapbook.jsx # Art with pastel accents & decorations
│   ├── Contact.jsx      # Contact with skyBlue accents & glass
│   ├── Navigation.jsx   # Animated sticky navigation
│   ├── BackToTop.jsx    # Animated back to top button
│   └── AnimatedSection.jsx # Reusable animation wrapper
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.js # Scroll detection & reduced motion
├── pages/               # Next.js pages structure
│   ├── _app.js         # Global styles wrapper
│   └── index.js        # Main portfolio page
├── styles/              # Global CSS
│   └── globals.css     # Tailwind + custom utilities
└── Configuration files  # Tailwind, PostCSS, etc.
```

## 🎭 **Animation Features**

### **Scroll-Triggered Animations**
- **Fade In**: Elements fade in as they enter viewport
- **Slide Up/Down**: Smooth directional sliding animations
- **Slide Left/Right**: Horizontal sliding for side-by-side layouts
- **Staggered Delays**: Progressive animation timing for lists
- **Viewport Detection**: Uses Intersection Observer API

### **Interactive Animations**
- **Hover Effects**: Scale, lift, and color transitions
- **Tap Animations**: Spring-based feedback on interaction
- **Icon Rotations**: 360° spins on hover
- **Progress Bars**: Animated skill level indicators
- **Floating Elements**: Continuous subtle movements

### **Reduced Motion Support**
- **Automatic Detection**: Detects `prefers-reduced-motion`
- **Graceful Fallback**: Disables animations when needed
- **Accessibility First**: Respects user preferences
- **Performance Optimized**: No unnecessary animations

## 🎨 **Color Scheme Implementation**

### **Base Colors (Consistent)**
- **White**: #FFFFFF - Primary backgrounds
- **Black**: #000000 - Primary text
- **Gold**: #F5C518 - Primary accents, buttons, highlights

### **Section-Specific Accents**
- **Hero**: electricBlue (#3B82F6) - Floating elements, scroll indicator
- **About**: coral (#F97366) - Bullet points, image accents
- **CareerReel**: deepRed (#B91C1C) - Card icons, achievement numbers
- **Research**: emerald (#10B981) - Project borders, skill bars
- **Skills**: royalPurple (#7C3AED) - Section title, skill percentages
- **ArtScrapbook**: Pastels (mint, pink, butter, lilac) - Decorative elements
- **Contact**: skyBlue (#38BDF8) - Background gradient, form elements

## 🛠️ **Technical Implementation**

### **Framer Motion Integration**
- **Motion Components**: Wrapped all interactive elements
- **Spring Physics**: Natural, bouncy animations
- **AnimatePresence**: Smooth enter/exit transitions
- **Variants**: Reusable animation states
- **Gesture Support**: Hover, tap, and drag interactions

### **Performance Optimizations**
- **Intersection Observer**: Efficient scroll detection
- **Lazy Loading**: Animations only trigger when visible
- **Reduced Motion**: Respects accessibility preferences
- **Optimized Transitions**: Smooth 60fps animations
- **Memory Management**: Proper cleanup of event listeners

### **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Proper touch interactions
- **Gesture Support**: Swipe and tap animations
- **Breakpoint Aware**: Different animations per screen size

## 🚀 **Getting Started**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## 🎯 **Customization Guide**

### **Adding New Animations**
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

### **Using AnimatedSection Component**
```jsx
import AnimatedSection from './AnimatedSection';

<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>
```

### **Custom Animation Hooks**
```jsx
import { useScrollAnimation, useReducedMotion } from '../hooks/useScrollAnimation';

const [ref, isInView] = useScrollAnimation();
const prefersReducedMotion = useReducedMotion();
```

## 🌟 **Animation Examples**

### **Staggered List Animations**
- Career experience cards
- Skill progress bars
- Research project items
- Social media links

### **Parallax Effects**
- Floating background elements
- Subtle depth layers
- Scroll-responsive backgrounds
- Geometric shapes

### **Interactive Elements**
- Navigation hover effects
- Button scale animations
- Card lift effects
- Icon rotations

## 📱 **Browser Support**

- **Modern Browsers**: Full animation support
- **Older Browsers**: Graceful fallback to static
- **Mobile Devices**: Touch-optimized interactions
- **Accessibility**: Reduced motion support
- **Performance**: 60fps smooth animations

## 🔧 **Troubleshooting**

### **Common Issues**
1. **Animations not working**: Check Framer Motion installation
2. **Performance issues**: Verify reduced motion detection
3. **Build errors**: Ensure all dependencies are installed
4. **Mobile issues**: Test touch interactions

### **Performance Tips**
- Use `viewport={{ once: true }}` for scroll animations
- Implement proper cleanup in useEffect hooks
- Optimize image sizes for parallax effects
- Test on various devices and connection speeds

## 📄 **License**

© 2024 Donna Prince. All rights reserved.

---

**Phase 2 Complete!** 🎉 Your portfolio now features stunning animations, beautiful accent colors, and a professional, engaging user experience.
