import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishiedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
     ]);

  const publishedDateFormatted = format(
    publishiedAt,
    "d 'de' LLLL  'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();

    const newCommentText = event.target.comment.value
    setComments([...comments, newCommentText]);
  }

  const publishedDateRelativeToNow = formatDistanceToNow(publishiedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishiedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
        
      </div>
    </article>
  );
}
