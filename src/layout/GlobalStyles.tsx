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
