    // tailwind.config.js
    module.exports = {
      theme: {
        extend: {
          width: {
            '8xl': '96rem', // 1536px
            '9xl': '112rem', // 1792px
          },
          maxWidth: {
            '8xl': '96rem',
            '9xl': '112rem',
          },
          colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: 'hsl(var(--primary))',
            border: 'hsl(var(--border))',
          },
        },
      },
      plugins: [],
    }