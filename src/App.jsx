import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"
import "./global.css";
import styles from "./app.module.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/1m4ru.png',
      name: 'Maruan Moussa',
      role: 'Dev Front End'
    },
    content: [
       'Fala galeraa 👋', 
        
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
          'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
          '👉{" "}',
          <a href=""> jane.design/doctorcare </a>
          <a href=""> #novoprojeto </a> 
          <a href="">#nlw </a>{" "}
           #rocketseat
        
    ],
  },
]
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
