import { Avatar } from "./avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/1m4ru.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maruan Moussa</strong>
              <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:08">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">Excluir</button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button>
            {/* <ThumbsUp /> */}
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
