/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        safar: {
          primary: '#2563EB',   // Primary Blue
          'primary-hover': '#1D4ED8',
          'primary-light': '#EFF6FF',
          dark: '#0F172A',      // Dark Slate
          'dark-muted': '#475569',
          bg: '#F8FAFC',        // Light Background
          white: '#FFFFFF',     // Pure White
          success: '#16A34A',   // Success Green
          'success-bg': '#F0FDF4',
          warning: '#F59E0B',   // Warning Amber
          'warning-bg': '#FFFBEB',
          error: '#DC2626',     // Danger/Error Red
          'error-bg': '#FEF2F2',
          border: '#E2E8F0',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'screen-x': '24px',
      },
      borderRadius: {
        'safar-sm': '8px',
        'safar-md': '12px',
        'safar-lg': '16px',
        'safar-xl': '20px',
        'safar-full': '9999px',
      },
      boxShadow: {
        'safar-sm': '0 2px 8px rgba(15, 23, 42, 0.04)',
        'safar-card': '0 8px 30px rgba(15, 23, 42, 0.06)',
        'safar-floating': '0 14px 40px rgba(37, 99, 235, 0.2)',
        'safar-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};
