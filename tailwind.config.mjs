/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors:{
        secundary: "#A00",
        primary: "#111111"
      },
      keyframes:{
        fadeIn:{
          '0%':{
            opacity:0
          },
          '100%':{
            opacity:1
          }
        },
        fadeOut:{
          '0':{
            opacity:100
          },
          '100':{
            opacity:0
          }
        }
      },
      animation:{
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out'
      }
    },
	},
	plugins: [],
}
