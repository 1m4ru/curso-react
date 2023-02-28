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
       {type: 'paragraph', content: 'Fala galeraa 👋'}, 
       {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'}, 
       {type: 'paragraph', content:  'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },  
       {type: 'paragraph', content:   '👉{" "}' },  
       {type: 'link', content:   'jane.design/doctorcare' },  
    ],
    publishiedAt: new Date('2022-05-03 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/1m4ru.png',
      name: 'Maruan Moussa',
      role: 'Dev Front End'
    },
    content: [
       {type: 'paragraph', content: 'Fala galeraa 👋'}, 
       {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'}, 
       {type: 'paragraph', content:  'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },  
       {type: 'paragraph', content:   '👉{" "}' },  
       {type: 'link', content:   'jane.design/doctorcare' },  
    ],
    publishiedAt: new Date('2022-05-10 20:00')
  },
]
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
             author={post.author}
             content={post.content}
            publishiedAt={post.publishiedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
