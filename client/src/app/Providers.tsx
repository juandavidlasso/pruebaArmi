'use client';
import { ThemeProvider } from '@mui/material';
import { ligthTheme } from '@/lib/themes/lightTheme';
import NavBar from '@/components/NavBar';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={ligthTheme}>
            <NavBar />
            {children}
        </ThemeProvider>
    );
}
