import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img 
      className= {styles.cover} 
      src="https://images.unsplash.com/photo-1677133390150-65e133a5ae18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://images.unsplash.com/photo-1677026538602-35a9bf7605dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=30" />
        
        <strong>Fernanda Lima</strong>
        <span> Fotografa</span>
      </div>

      <footer>
        <a href="#">Editar Perfil</a>
      </footer>
    </aside>
  );
}
