/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.css",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        white: '#FFFFFF',
        black: '#000000',
        gold: '#F5C518',
        
        // Purple theme colors
        primary: '#8B5CF6', // Main purple
        primaryLight: '#A78BFA', // Lighter purple
        primaryDark: '#7C3AED', // Darker purple
        secondary: '#C084FC', // Secondary purple
        accent: '#E879F9', // Accent purple
        muted: '#F3E8FF', // Very light purple
        
        // Keep existing colors for Career Reel
        electricBlue: '#3B82F6',
        coral: '#F97366',
        deepRed: '#B91C1C',
        emerald: '#10B981',
        royalPurple: '#7C3AED',
        skyBlue: '#38BDF8',
        
        // Soft pastels (updated to purple tones)
        mint: '#E0E7FF', // Light purple-blue
        pink: '#FCE7F3', // Light purple-pink
        butter: '#FEF3C7', // Light yellow (kept for contrast)
        lilac: '#DDD6FE', // Light purple
      },
    },
  },
  plugins: [],
}
