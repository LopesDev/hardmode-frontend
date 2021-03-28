import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme:DefaultTheme = {
    pallet: {
        white: '#fff',
        background: '#f2f3f5',
        text: '#666',
        title: '#2E384D',
        link: '#2D9CDB',
        grey: '#E9E9E9',
        lightGrey: '#D8D8D8',
        primary: '#FEB674',
        secondary: '#BA68C8',
    },
    
    breakpoint: {
        lg: '1080px',
        md: '720px'
    },

    typografy: {
        title: {
            fontFamily: "'Montserrat', sans-serif",
            medium: 500,
            bold: 600,
        },
        text: {
            fontFamily: "'Poppins', sans-serif",
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
        }
    },
    
    spacing: (value :number) => `${ BASE_UNIT * value }px`,
}

export default theme;
