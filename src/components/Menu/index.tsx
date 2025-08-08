import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css'
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark'| 'light';

export function Menu() {
    const [theme, setTheme ] = useState<AvailableThemes>(() => {
        const storageThem =
            (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageThem;
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    return <div className={styles.menu}>
        <RouterLink 
            className={styles.menuLink} 
            href='/' 
            aria-label='Ir para a Home'
            title='Home'
        >
            <HouseIcon/>   
        </RouterLink>    
        <RouterLink 
            className={styles.menuLink} 
            href='/history' 
            aria-label='Ver Histórico'
            title='Histórico'
        >
            <HistoryIcon/>   
        </RouterLink> 
        <RouterLink 
            className={styles.menuLink} 
            href='/settings' 
            aria-label='Configurações'
            title='Configurações'
        >
            <SettingsIcon/>   
        </RouterLink> 
        <a 
            className={styles.menuLink} 
            href='#' 
            aria-label='Mudar Tema'
            title='Tema'
            onClick={handleThemeChange}
        >
            {nextThemeIcon[theme]} 
        </a> 
    </div>;
}