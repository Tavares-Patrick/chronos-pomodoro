import styles from './styles.module.css'
import { RouterLink } from '../RouterLink';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <RouterLink href="">Entenda como funciona a técnica pomodoro</RouterLink>
            <RouterLink href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</RouterLink>
        </footer>
    );
}