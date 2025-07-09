/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // En Tailwind v4, el safelist funciona diferente
  safelist: [
    // Patrones para colores dinámicos
    {
      pattern: /^(bg|text|border|from|to)-(purple|green|blue|orange|red|indigo|yellow)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern: /^(bg|text|border)-(purple|green|blue|orange|red|indigo|yellow)-(50|100|200|300|400|500|600|700|800|900)\/\d+$/,
    },
    // Clases específicas que usas
    'h-128',
    'bg-white/10',
    'bg-white/20',
    'backdrop-blur-sm',
    'backdrop-blur-lg',
    // Clases de gradientes
    'bg-gradient-to-br',
    'bg-gradient-to-r',
    'bg-clip-text',
    'text-transparent',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
}