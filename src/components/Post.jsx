import { Avatar } from "./avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
 
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>Fernanda Lima</strong>
            <span>Fotografa</span>
          </div>
        </div>

        <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:08">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
