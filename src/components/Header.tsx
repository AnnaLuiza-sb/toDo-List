import styles from './Header.module.css'




export function Header() {
  return (
    <header className={styles.container}>
      <img src="/toDo-List/imgs/Logo.png" alt="Logo" />
    </header>
  )
}