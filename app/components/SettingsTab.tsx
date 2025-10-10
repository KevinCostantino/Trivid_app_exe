'use client'
import { useState } from 'react'
import styles from './styles/SettingsTab.module.css'
import Conta from './Conta'
import CancelSubscription from './CancelSubscription'
import mockData from '../data/mockData.json'

export default function SettingsTab() {
  const [openConta, setOpenConta] = useState(false)
  const [openCancelSubscription, setOpenCancelSubscription] = useState(false)




  return (
    <div className={styles.container}>
      {/* Informações da Conta */}
      <div className={styles.accountSection}>
        <h2 className={styles.sectionTitle}>Informações da Conta</h2>

        <div className={styles.accountGrid}>
          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Username</span>
            <span className={styles.accountValue}>{mockData.user.username}</span>
          </div>

          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Email</span>
            <span className={styles.accountValue}>{mockData.user.email}</span>
          </div>

          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Account Status</span>
            <span className={styles.statusBadge}>{mockData.user.account_status}</span>
          </div>

          <div className={styles.accountItem}>
            <span className={styles.accountLabel}>Renewal Date</span>
            <span className={styles.accountValue}>
              {new Date(mockData.user.renewal_date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>

        <div className={styles.manageButton}>
          <button className={styles.button} onClick={() => setOpenConta(true)}> Entrar/Criar Conta</button>
          <button className={styles.cancelSubscriptionButton} onClick={() => setOpenCancelSubscription(true)}>Cancelar assinatura</button>
        </div>

      </div>

      {/* Benefícios do Plano */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Benefícios do Plano Premium</h2>

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

      {/* 🔹 Modal sobrepondo TUDO */}
      <Conta open={openConta} onClose={() => setOpenConta(false)} />
      <CancelSubscription open={openCancelSubscription} onClose={() => setOpenCancelSubscription(false)} onConfirmCancel={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}