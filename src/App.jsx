import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"
import "./global.css";
import styles from "./app.module.css";
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Maruan Moussa"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos doloremque illum molestiae impedit eius neque corrupti consectetur, ea vitae quaerat quo recusandae provident soluta, nulla consequuntur! Temporibus, est unde?"
          />
          <Post
            author="Maycon Remeredrato"
            content="Um novo post jornalistico"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
