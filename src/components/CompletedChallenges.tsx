import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

interface ChallengesProps {
  className: string;
}

export function CompletedChallenges(props: ChallengesProps) {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <div className={props.className}>
     <div className={styles.completedChallengesContainer}>
       <span>Desafios completos</span>
       <span>{challengesCompleted}</span>
     </div>
    </div>
  )
}