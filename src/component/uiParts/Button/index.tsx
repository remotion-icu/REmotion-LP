import { ReactNode } from 'react'
import styles from './style.module.scss'

export type ButtonProps = {
  type: 'primary' | 'secondary'
  size: 'large' | 'small'
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ type, children, size }) => {
  if (type == 'primary') {
    return (
      <a href='https://app.remotion.icu'>
        <button className={`${styles.btnPrimary} ${size === 'large' ? styles.large : styles.small}`}>
          <p>{children}</p>
        </button>
      </a>
    )
  } else {
    return (
      <a href='https://app.remotion.icu'>
        <button className={`${styles.btnSecondary} ${size === 'large' ? styles.large : styles.small}`}>
          <p>{children}</p>
        </button>
      </a>
    )
  }
}
