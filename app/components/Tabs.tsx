import styles from './styles/Tabs.module.css'

type TabsProps = {
  activeTab: 'home' | 'settings'
  onTabChange: (tab: 'home' | 'settings') => void
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.tab} ${
          activeTab === 'home' ? styles.tabActive : styles.tabInactive
        }`}
        onClick={() => onTabChange('home')}
      >
        Home
      </button>
      <button
        className={`${styles.tab} ${
          activeTab === 'settings' ? styles.tabActive : styles.tabInactive
        }`}
        onClick={() => onTabChange('settings')}
      >
        Settings
      </button>
    </div>
  )
}