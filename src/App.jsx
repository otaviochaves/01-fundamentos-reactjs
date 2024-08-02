import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'


export function App ()
{

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          <Post author='Otavio Chaves'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias ipsam earum totam temporibus, recusandae, id dicta, distinctio cumque aut modi inventore nemo dolorem tempora impedit dolorum numquam perferendis est!'
          />
          <Post author='Otavio Chaves'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias ipsam earum totam temporibus, recusandae, id dicta, distinctio cumque aut modi inventore nemo dolorem tempora impedit dolorum numquam perferendis est!'
          />
        </main>
      </div>
    </div>
  )
}