import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css'
import { useState } from 'react';

type AvailableThemes = 'dark'| 'light';

export function Menu() {
    const [theme, setTheme ] = useState('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

    }

    return <div className={styles.menu}>
        <a 
            className={styles.menuLink} 
            href='#' 
            aria-label='Ir para a Home'
            title='Home'
        >
            <HouseIcon/>   
        </a>    
        <a 
            className={styles.menuLink} 
            href='#' 
            aria-label='Ver Histórico'
            title='Histórico'
        >
            <HistoryIcon/>   
        </a> 
        <a 
            className={styles.menuLink} 
            href='#' 
            aria-label='Configurações'
            title='Configurações'
        >
            <SettingsIcon/>   
        </a> 
        <a 
            className={styles.menuLink} 
            href='#' 
            aria-label='Mudar Tema'
            title='Tema'
            onClick={handleThemeChange}
        >
            <SunIcon/>   
        </a> 
    </div>;
}