import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customThemeMui } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
    return (
        <ThemeProvider theme={customThemeMui}>
            <CssBaseline />
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
