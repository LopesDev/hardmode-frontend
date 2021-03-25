import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 87.5%;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            font-size: 93.75%;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            font-size: 100%;
        }
    }

    body, input, textarea, button {
        font: 400 1rem ${({theme}) => theme.typografy.text.fontFamily};
    }

    body {
        background: ${({theme}) => theme.pallet.background};
        color: ${({ theme }) => theme.pallet.text};
    }

    h1, h2, h3, h4, h5 {
        font-family: ${({theme}) => theme.typografy.title.fontFamily};
        font-weight: ${({theme}) => theme.typografy.title.bold};
    }

    p, label, span, li, a {
        font-family: ${({theme}) => theme.typografy.text.fontFamily};
        font-weight: ${({theme}) => theme.typografy.text.regular};
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;

export default GlobalStyle;
