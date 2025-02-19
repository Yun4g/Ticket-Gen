/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': '#0011012',
        ' bg-gradient': 'linear-gradient(135deg,  #072227, #769ba1 )',
         
      },
       colors :{
        'brand' : {
             100 : '#031a1e',
             200 : '#197686',
        },
       
        'section' : ' #02191D',
        'customNavbg' : '#05252C',
        'progress' : '#24A0B5',
        'innerBg' : '#0c434a',
        'ticketSelection' : '#07373F',
        'ticketInner' : '#0A4A53',
        'custom-start': '#0a2d35',
        'custom-end': '#0a2d35',
       'customBorder': '#197686',
       'imageDownload' : '#0E464F',
      
        
        
  
       },
       fontFamily: {
        jeju: ['JejuMyeongjo', 'serif'],
        roadRage: ['Bangers', 'cursive'],
      },
   
    },
  },
  plugins: [],
}

