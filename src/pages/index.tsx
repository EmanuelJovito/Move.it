import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import Link from 'next/link'

import firebase from '../../firebase'

import styles from '../styles/pages/Index.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) { 
  useEffect(() => {
    firebase.firestore().collection('users').get().then(snapshot => {
      snapshot.forEach(doc => console.log(doc.data()))
    })
  }, [])

  return (
    <div className={styles.Container}>
      <img src="background.svg" alt="Background image"/>

      <div className={styles.rightContainer}>

        <img src="icons/logo.svg" alt="Logo moveit"/>

        <div className={styles.loginContainer}>
          <header className={styles.loginHeader}>
            <h1>Bem-vindo</h1>
            <div className={styles.loginGithub}>
              <img src="icons/github.svg" alt="Github logo"/>
              <p>Faça login com seu Github para começar</p>
            </div>
          </header>

          <main className={styles.loginMain}>
            <input type="text"/>
            <Link href='/home'>
              <button type='button'>
                <img src="icons/login-arrow.svg" alt="Login"/>
              </button>
            </Link>
          </main>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
    }
  }
}