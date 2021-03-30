import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ProfileMobile.module.css'

export function ProfileMobile() {
  const { level, challengesCompleted } = useContext(ChallengeContext)
  const [ session ] = useSession()
  const router = useRouter()

  useEffect(
    () => {
      if (!session) {
        router.push('/')
      }
    }, [session])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userContainer}>
        <img src={session && session.user.image} alt={session && session.user.name}/>
        <strong>{session && session.user.name}</strong>
      </div>
      <div className={styles.boxContainer}>
        <div>Level <span>{level}</span></div>
        <div>Desafios completos <span>{challengesCompleted}</span></div>
      </div>

      {session && 
        <div className={styles.SignOut}>
          <button onClick={() => signOut()}>Sair</button>
        </div>
      }
    </div>
  )
}