import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}
export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    console.log("deletar");
    deleteComment(content);
  }

  function hadleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer onClick={hadleLikeComment}>
          <button>
            <ThumbsUp /> 
           <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
