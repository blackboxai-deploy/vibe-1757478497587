/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores orgánicos y neutros pero llamativos para Mi Vida Keto ALMA CREATIVA
        keto: {
          primary: '#16a34a',    // Verde natural vibrante (hierba fresca)
          secondary: '#dc2626',  // Rojo terracota orgánico
          accent: '#ea580c',     // Naranja calabaza natural
          cream: '#fef7ed',      // Crema vainilla cálida
          sage: '#84cc16',       // Verde salvia brillante
          earth: '#a16207',      // Marrón tierra rico
          coral: '#f97316',      // Coral suave natural
          olive: '#65a30d',      // Verde oliva profundo
          terracotta: '#dc2626', // Terracota natural
          sand: '#fbbf24',       // Arena dorada
          forest: '#166534',     // Verde bosque profundo
          stone: '#78716c',      // Gris piedra natural
          warm: '#92400e',       // Marrón cálido
          mint: '#10b981',       // Verde menta fresco
          clay: '#b45309',       // Arcilla natural
        },
        // Gradientes orgánicos y naturales
        gradient: {
          nature: 'linear-gradient(135deg, #16a34a, #84cc16)',
          earth: 'linear-gradient(135deg, #dc2626, #ea580c)',
          organic: 'linear-gradient(135deg, #16a34a, #10b981, #84cc16)',
          warm: 'linear-gradient(135deg, #ea580c, #fbbf24)',
          forest: 'linear-gradient(135deg, #166534, #16a34a)',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'creative': ['Dancing Script', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(5, 150, 105, 0.5)' },
          '100%': { 'box-shadow': '0 0 30px rgba(5, 150, 105, 0.8), 0 0 40px rgba(5, 150, 105, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}