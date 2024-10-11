// tailwind.config.js
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './Pages/**/*.{html,js}',
      './Components/**/*.{html,js}',
      './src/*.{html,js}',
    ],
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: '0.75vw',
      md: '1vw',
      lg: '1.5vw',
      xl: '2.50vw',
      '2xl': '2.75vw',
      '3xl': '3vw',
      '4xl': '3.50vw',
      '5xl': '4vw',
      '8xl': '4.5vw'
    },
    screens: {
      xs: '300px',
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': "#ffffff",
      'black': "#000000",
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'red': '#bf4623',
      'darkGreen': '#323232',
      'card': '#546E7A50'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 25px -15px #323232',
        'sidebar': '-77px 0px 73px -12px rgba(0,0,0,0.64);'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'logo-bounce': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: "translateY(20px)"
          }
        },
        'icon-bounce': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: "translateY(10px)"
          }
        },
        'icon-bounce-1': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: "translateY(7px)"
          }
        },
        'load-name': {
          '0%': {
            'letter-spacing': '7px',
          },
          '100%': {
            'letter-spacing': '0px'
          }
        }
      },
      margin: {
        'nav': '4.5rem'
      }
    },
    animation: {
      'logo-bounce': 'logo-bounce 5s linear infinite',
      'icon-bounce-1': 'icon-bounce 5s ease-in-out infinite',
      'icon-bounce-2': 'icon-bounce-1 6s ease-in-out infinite',
      'icon-bounce-3': 'icon-bounce 4s ease-in-out infinite',
      'load-name': 'load-name 5s linear 1',
      'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    keyframes: {
      'text-slide-2': {
        '0%, 40%': {
          transform: 'translateY(0%)',
        },
        '50%, 90%': {
          transform: 'translateY(-33.33%)',
        },
        '100%': {
          transform: 'translateY(-66.66%)',
        },
      },
      'text-slide-3': {
        '0%, 26.66%': {
          transform: 'translateY(0%)',
        },
        '33.33%, 60%': {
          transform: 'translateY(-25%)',
        },
        '66.66%, 93.33%': {
          transform: 'translateY(-50%)',
        },
        '100%': {
          transform: 'translateY(-75%)',
        },
      },
      'text-slide-4': {
        '0%, 20%': {
          transform: 'translateY(0%)',
        },
        '25%, 45%': {
          transform: 'translateY(-20%)',
        },
        '50%, 70%': {
          transform: 'translateY(-40%)',
        },
        '75%, 95%': {
          transform: 'translateY(-60%)',
        },
        '100%': {
          transform: 'translateY(-80%)',
        },
      },
      'text-slide-5': {
        '0%, 16%': {
          transform: 'translateY(0%)',
        },
        '20%, 36%': {
          transform: 'translateY(-16.66%)',
        },
        '40%, 56%': {
          transform: 'translateY(-33.33%)',
        },
        '60%, 76%': {
          transform: 'translateY(-50%)',
        },
        '80%, 96%': {
          transform: 'translateY(-66.66%)',
        },
        '100%': {
          transform: 'translateY(-83.33%)',
        },
      },
      'text-slide-6': {
        '0%, 13.33%': {
          transform: 'translateY(0%)',
        },
        '16.66%, 30%': {
          transform: 'translateY(-14.28%)',
        },
        '33.33%, 46.66%': {
          transform: 'translateY(-28.57%)',
        },
        '50%, 63.33%': {
          transform: 'translateY(-42.85%)',
        },
        '66.66%, 80%': {
          transform: 'translateY(-57.14%)',
        },
        '83.33%, 96.66%': {
          transform: 'translateY(-71.42%)',
        },
        '100%': {
          transform: 'translateY(-85.71%)',
        },
      },
      'text-slide-7': {
        '0%, 11.43%': {
          transform: 'translateY(0%)',
        },
        '14.28%, 25.71%': {
          transform: 'translateY(-12.5%)',
        },
        '28.57%, 40%': {
          transform: 'translateY(-25%)',
        },
        '42.85%, 54.28%': {
          transform: 'translateY(-37.5%)',
        },
        '57.14%, 68.57%': {
          transform: 'translateY(-50%)',
        },
        '71.42%, 82.85%': {
          transform: 'translateY(-62.5%)',
        },
        '85.71%, 97.14%': {
          transform: 'translateY(-75%)',
        },
        '100%': {
          transform: 'translateY(-87.5%)',
        },
      },
      'text-slide-8': {
        '0%, 10%': {
          transform: 'translateY(0%)',
        },
        '12.5%, 22.5%': {
          transform: 'translateY(-11.11%)',
        },
        '25%, 35%': {
          transform: 'translateY(-22.22%)',
        },
        '37.5%, 47.5%': {
          transform: 'translateY(-33.33%)',
        },
        '50%, 60%': {
          transform: 'translateY(-44.44%)',
        },
        '62.5%, 72.5%': {
          transform: 'translateY(-55.55%)',
        },
        '75%, 85%': {
          transform: 'translateY(-66.66%)',
        },
        '87.5%, 97.5%': {
          transform: 'translateY(-77.77%)',
        },
        '100%': {
          transform: 'translateY(-88.88%)',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}