import {trash} from 'cd';
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/1m4ru.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maruan Moussa</strong>
              <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:08">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <trash />
            </button>
          </header>
          <p>Muito bom Devo, parabéns!!</p>
        </div>
        <footer>
          <button>
            <thumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
