import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src=".dist/logo.svg" alt="logo da aplicação" />
    </header>
  )
}