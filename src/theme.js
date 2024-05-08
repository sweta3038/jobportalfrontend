import { blue, grey, yellow} from '@mui/material/colors'

export const themeColors = (mode) => ({
   
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: "#00796b",
                    white: "#ffffff"
                },
                secondary: {
                    main: "#00796b",
                    midNightBlue: grey[400]
                },
            }
            : {
                // palette values for dark mode 
                primary: {
                    main: "#00ac98",
                    white: "#333333"
                },
                secondary: {
                    main: "#00ac98",
                    midNightBlue:grey[400]
                },
                background: {
                    default: "#121212",
                },
                text: {
                    primary: "#ffffff",
                    secondary:"#ff8da1"
                },
            }),
    },
});