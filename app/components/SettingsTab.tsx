import styles from './styles/SettingsTab.module.css'

export default function SettingsTab() {
  return (
    <div className={styles.container}>
      {/* Informações da Conta */}
      <div className={styles.accountSection}>
        <h2 className={styles.sectionTitle}>
          Informações da Conta
        </h2>
        
        <div className={styles.accountGrid}>
          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Username:</span>
            <span className={styles.accountValue}>johndoe</span>
          </div>
          
          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Email:</span>
            <span className={styles.accountValue}>john.doe@example.com</span>
          </div>
          
          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Account Status:</span>
            <span className={styles.statusBadge}>
              Premium
            </span>
          </div>
          
          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Renewal Date:</span>
            <span className={styles.accountValue}>December 15, 2023</span>
          </div>
        </div>
        
        <div className={styles.manageButton}>
          <button className={styles.button}>
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Benefícios do Plano */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>
          Benefícios do Plano Premium
        </h2>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✅</div>
              <div>
                <h3 className={styles.benefitTitle}>Unlimited Downloads</h3>
                <p className={styles.benefitDescription}>No daily limits</p>
              </div>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✅</div>
              <div>
                <h3 className={styles.benefitTitle}>4K Resolution</h3>
                <p className={styles.benefitDescription}>Highest quality available</p>
              </div>
            </div>
          </div>
          
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✅</div>
              <div>
                <h3 className={styles.benefitTitle}>Simultaneous Downloads</h3>
                <p className={styles.benefitDescription}>Up to 5 at once</p>
              </div>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>✅</div>
              <div>
                <h3 className={styles.benefitTitle}>Batch Processing</h3>
                <p className={styles.benefitDescription}>Process multiple links at once</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}