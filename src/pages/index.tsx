import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'

import styles from '../styles/pages/Index.module.css'
import { useEffect } from 'react'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [ session, loading ] = useSession()
  const router = useRouter()
  
  useEffect(
    () => {
      if (session) {
        router.push('/home')
      }
    }, [session])

    return (
      <>
      <Head>
            <title>Login | move.it</title>
      </Head>

    {session && 
      (<div className={styles.loadingContainer}>
        <div className={styles.skChase}>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
          <div className={styles.skChaseDot}></div>
        </div>
      </div>)
    }

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
            {!session && <div className={styles.SignIn}>
              <button onClick={() => signIn('auth0')}>Entrar</button>
            </div>}
          </main>
        </div>
      </div>
    </div>
    </>
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
