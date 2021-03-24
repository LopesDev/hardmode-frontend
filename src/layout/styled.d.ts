import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        pallet: {
            white:  string,
            background:  string,
            grey:  string,
            text:  string,
            title:  string,
            primary: string,
            secondary: string,
            link: string,
            // red: string,
            // green:  string,
            // blue:  string,
            // blueDark:  string,
            // blueTwitter:  string
        },
    
        breakpoint: {
            lg: string,
            md: string
        },
    
        spacing: Function,

    }
}
