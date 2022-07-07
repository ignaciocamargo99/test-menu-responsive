import { createGlobalStyle } from 'styled-components'
/**
 * The global style of the application
 */

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
        font-size: 0.92rem;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0;
    }
`
