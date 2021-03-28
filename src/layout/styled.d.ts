import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        pallet: {
            white:  string,
            background:  string,
            grey:  string,
            lightGrey:  string,
            text:  string,
            title:  string,
            primary: string,
            secondary: string,
            link: string,
        },
    
        breakpoint: {
            lg: string,
            md: string
        },
    
        spacing: Function,

        typografy: {
            title: {
                fontFamily: string,
                medium: number,
                bold: number,
            },
            text: {
                fontFamily: string,
                light: number,
                regular: number,
                medium: number,
                bold: number,
            }
        }

    }
}
