import { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Theme from './Theme';

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

    input, textarea, button, a {
        appearance: none;
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

    button, a {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 400ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }

    .ReactModalOverlayOverride {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({theme}) => theme.pallet.title}ad;
    }

    .ReactModalContentOverride {
        position: absolute;

        top: 40px;
        left: 40px;
        right: 40px;
        bottom: 40px;

        @media screen and (min-width: ${({theme}) => theme.breakpoint.md}) {
            right: auto;
            bottom: auto;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            width: 100%;
            height: 100%;
            max-width: 600px;
            max-height: 800px;
        }


        border: 1px solid #ccc;
        background: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border-radius: ${({theme}) => theme.spacing(.5)};
        outline: none;
        padding: ${({theme}) => theme.spacing(3)};
    }

`;

const HardModStylesProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export { GlobalStyle, HardModStylesProvider as default };
