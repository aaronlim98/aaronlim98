import { createGlobalStyle } from "styled-components";

export const theme = {
    font:{
        sans: '"source sans pro", sans-serif',
        monospace: '"DM Mono", monospace',
        monoton: '"Monoton", cursive',
    },
    fontSize:{
        xs: '0.75rem', 
        sm: '0.875rem', 
        base: '1rem', 
        lg: '1.125rem', 
        xl: '1.25rem', 
        '2xl': '1.5rem', 
        '3xl': '1.875rem',
        '4xl': '2.35rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    fontWeight:{
        hairline: '100',
        thin: '200', 
        light: '300',
        normal: '400', 
        medium: '500', 
        semibold: '600', 
        bold: '700', 
        extrabold: '800', 
        black: '900',
    },
    colors:{
        main1:"hsl(207,70%,59%)",
        main2:"hsl(207,70%,94%)",
    },
}

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: ${props => props.theme.font.monospace};
        font-size: ${props => props.theme.fontSize.lg};
    }

    body{
        background: #fff;
        line-height: 1.5;
        letter-spacing: 0;
    }

    header, section{
        padding: 60px 100px;

        @media(max-width:576px){
            padding: 30px 25px
        }
    }

    // SCROLL BAR STYLING
    html {
        scrollbar-width: thin;
        scrollbar-color: #e5e7eb #ffffff;
    }

    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background: #ffffff;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #e5e7eb;
        border: 3px solid #e5e7eb;
        border-radius: 10px;
    }
`