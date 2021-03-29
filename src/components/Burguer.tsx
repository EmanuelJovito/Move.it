import { forwardRef, ForwardRefRenderFunction, useRef } from 'react'
import styles from '../styles/components/Burguer.module.css'

interface BurguerProps {
  handleToggleMenu: () => void;
}

const Burguer: ForwardRefRenderFunction<HTMLDivElement, BurguerProps> = ({handleToggleMenu}, burguerRef) => {
  return (
    <div ref={burguerRef} className={styles.Burguer} onClick={handleToggleMenu}>
        <div className={styles.spanBurguerActive} />
        <div className={styles.spanBurguerActive} />
    </div>
  )
}

export default forwardRef(Burguer)
