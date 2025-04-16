import styles from './Header.module.css'




export function Header() {
  return (
    <header className={styles.container}>
      <img src="/toDo-List/imgs/logo.svg" alt="Logo" />
    </header>
  )
}