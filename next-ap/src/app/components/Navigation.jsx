import Link from 'next/link'                    // Te que llamar a este modulo de next para poder tener rutas
import styles from './Navigation.module.css'    // Esto llama a los estilos propios de este modulo

const links = [{
    label: 'Home',
    route:'/'
  },
  {
    label: 'About',
    route: "/about"
  },
  {
    label: 'Contact',
    route: "/contact"
  },
  {
    label: 'Perrito',
    route: "/perrito"
  },
  {
    label: 'Gatito',
    route: "/gatito"
  },
  {
    label: 'Posts',
    route: "/posts"
}]
  
export function Navigation () {
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({label, route}) => (
                        <li key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}