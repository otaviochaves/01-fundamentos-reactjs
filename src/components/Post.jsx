import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/106641591?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Otavio Chaves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='22 de julho as 01:21h' dateTime="2024-07-22 01:21:40">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <div className={styles.link}>
                    <p><a href="">#novoprojeto</a></p>
                    <p><a href=""> #nlw</a></p>
                    <p><a href="">#rocketseat</a></p>
                </div>
            </div>
        </article>
    )
}