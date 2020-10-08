module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        auto: 'auto'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      '#6eb876': '#6eb876',
      '#707070': '#707070'

    },
    backgroundColor: {
      '#eae9e4': '#eae9e4'
    },
    spacing: {
      '0px': '0px',
      '4px': '4px',
      '8px': '8px',
      '12px': '12px',
      '16px': '16px',
      '20px': '20px',
      '24px': '24px',
      '28px': '28px',
      '32px': '32px',
      '36px': '36px',
      '40px': '40px',
      '44px': '44px',
      '48px': '48px',
      '52px': '52px',
      '56px': '56px',
      '60px': '60px',
      '64px': '64px'
    },
    fontSize: (theme) => theme('spacing'),
    letterSpacing: (theme) => theme('spacing'),
    maxWidth: {
      '1024px': '1024px'
    }
  },
  variants: {},
  plugins: []
}
