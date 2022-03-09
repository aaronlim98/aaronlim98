import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './src/components/Layout';
import { GlobalStyles, theme } from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Layout>{element}</Layout>
    </ThemeProvider>
)