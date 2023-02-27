import { Avatar } from "./avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://images.unsplash.com/photo-1677026538602-35a9bf7605dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=30"
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
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          👉{" "}
        </p>
        <p>
          <a href=""> jane.design/doctorcare </a>
        </p>
        <p>
          <a href=""> #novoprojeto </a> <a href="">#nlw </a>{" "}
          <a href=""> #rocketseat </a>
        </p>
      </div>

      <form className= {styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder="Deixe um comentário"
        />

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
