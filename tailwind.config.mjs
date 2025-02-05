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
	plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-custom': {
          'scrollbar-width': 'auto', // Para navegadores Firefox
          '&::-webkit-scrollbar': {
            width: '10px',  // Ancho 
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent', // dondo de la barra
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#660000", // Color del pulgar (parte que se arrastra)
            borderRadius: '10px',  // Forma redondeada del pulgar
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'red', // Color al pasar el mouse
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
