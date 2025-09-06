import { useCallback } from 'react'
import styles from './styles/TitleBar.module.css'
import Image from 'next/image'

declare global {
  interface Window {
    electronAPI?: {
      closeWindow: () => void
      minimizeWindow: () => void
      maximizeWindow: () => void
    }
  }
}

export default function TitleBar() {
  const handleClose = useCallback(() => {
    if (typeof window !== 'undefined' && window.electronAPI) {
      window.electronAPI.closeWindow()
    } else {
      console.log('Fechar janela')
    }
  }, [])

  const handleMinimize = useCallback(() => {
    if (typeof window !== 'undefined' && window.electronAPI) {
      window.electronAPI.minimizeWindow()
    } else {
      console.log('Minimizar janela')
    }
  }, [])

  const handleMaximize = useCallback(() => {
    if (typeof window !== 'undefined' && window.electronAPI) {
      window.electronAPI.maximizeWindow()
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
    }
  }, [])

  return (
    <div className={styles.titleBar}>
      <div className={styles.titleBarContent}>
        <div className={styles.logo}>
          <Image 
            src="/Frame 15.png" 
            alt="TriviD Logo" 
            width={168} /* Dobrado: 84 * 2 = 168px */
            height={168} /* Dobrado: 84 * 2 = 168px */
            className={styles.logoImage}
            priority
            quality={100}
            sizes="168px" /* Especifica o tamanho exato para otimização */
          />
        </div>
        <div>
        </div>
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={handleMinimize} 
          className={styles.controlButton}
          title="Minimizar"
        >
          <div className={styles.minimizeIcon}></div>
        </button>
        
        <button 
          onClick={handleMaximize} 
          className={styles.controlButton}
          title="Maximizar"
        >
          <div className={styles.maximizeIcon}></div>
        </button>
        
        <button 
          onClick={handleClose} 
          className={styles.closeButton}
          title="Fechar"
        >
          <div className={styles.closeIcon}>
            <div className={`${styles.closeIconLine} ${styles.closeIconLine1}`}></div>
            <div className={`${styles.closeIconLine} ${styles.closeIconLine2}`}></div>
          </div>
        </button>
      </div>
    </div>
  )
}