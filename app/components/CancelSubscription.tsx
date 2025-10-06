'use client'
import { useState } from 'react'
import styles from './styles/CancelSubscription.module.css'

type CancelSubscriptionProps = {
  open: boolean
  onClose: () => void
  onConfirmCancel: () => void
}

export default function CancelSubscription({ 
  open, 
  onClose, 
  onConfirmCancel 
}: CancelSubscriptionProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [reason, setReason] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!open) return null

  const reasons = [
    { value: 'price', label: 'Muito caro' },
    { value: 'missing_features', label: 'Recursos em falta' },
    { value: 'technical_issues', label: 'Problemas técnicos' },
    { value: 'not_using', label: 'Não estou usando o serviço' },
    { value: 'found_alternative', label: 'Encontrei uma alternativa' },
    { value: 'other', label: 'Outro' }
  ]

  const benefits = [
    '✅ Download ilimitado de vídeos',
    '✅ Qualidade 4K e 1080p',
    '✅ Download em lote (até 5 simultâneos)',
    '✅ Suporte prioritário',
    '✅ Sem anúncios',
    '✅ Conversão para MP3'
  ]

  const handleCancelSubscription = async () => {
    setIsLoading(true)
    
    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aqui você faria a chamada API para cancelar a assinatura
    console.log('Cancelamento solicitado:', { reason, feedback })
    
    setIsLoading(false)
    onConfirmCancel()
    handleClose()
  }

  const handleClose = () => {
    setStep(1)
    setReason('')
    setFeedback('')
    onClose()
  }

  const renderStep1 = () => (
    <div className={styles.stepContent}>
      <div className={styles.warningSection}>
        <div className={styles.warningIcon}>⚠️</div>
        <h3 className={styles.warningTitle}>Tem certeza que deseja cancelar?</h3>
        <p className={styles.warningText}>
          Sua assinatura Premium será cancelada e você perderá acesso aos seguintes benefícios:
        </p>
      </div>

      <div className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitItem}>
            {benefit}
          </div>
        ))}
      </div>

      <div className={styles.accessInfo}>
        <p className={styles.accessText}>
          <strong>Você terá acesso até:</strong> 15 de Dezembro, 2023
        </p>
        <p className={styles.accessNote}>
          Após esta data, sua conta será rebaixada para o plano gratuito.
        </p>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleClose}
          className={styles.keepButton}
        >
          Manter Assinatura
        </button>
        <button
          onClick={() => setStep(2)}
          className={styles.continueButton}
        >
          Continuar com Cancelamento
        </button>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className={styles.stepContent}>
      <div className={styles.feedbackSection}>
        <h3 className={styles.feedbackTitle}>Nos conte o motivo</h3>
        <p className={styles.feedbackText}>
          Sua opinião nos ajuda a melhorar nosso serviço.
        </p>

        <div className={styles.reasonsGrid}>
          {reasons.map((reasonOption) => (
            <label key={reasonOption.value} className={styles.reasonLabel}>
              <input
                type="radio"
                name="cancel-reason"
                value={reasonOption.value}
                checked={reason === reasonOption.value}
                onChange={(e) => setReason(e.target.value)}
                className={styles.reasonInput}
              />
              <span className={styles.reasonText}>{reasonOption.label}</span>
            </label>
          ))}
        </div>

        <div className={styles.additionalFeedback}>
          <label htmlFor="feedback" className={styles.feedbackLabel}>
            Comentários adicionais (opcional)
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="O que poderíamos fazer melhor?"
            className={styles.feedbackTextarea}
            rows={4}
          />
        </div>
      </div>

      <div className={styles.confirmActions}>
        <button
          onClick={() => setStep(1)}
          className={styles.backButton}
        >
          Voltar
        </button>
        <button
          onClick={handleCancelSubscription}
          disabled={!reason || isLoading}
          className={styles.confirmCancelButton}
        >
          {isLoading ? 'Processando...' : 'Confirmar Cancelamento'}
        </button>
      </div>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}></div>
          <p>Processando seu cancelamento...</p>
        </div>
      )}
    </div>
  )

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className={styles.closeButton}>
          ✕
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>
            {step === 1 ? 'Cancelar Assinatura' : 'Confirmar Cancelamento'}
          </h2>
          <div className={styles.stepIndicator}>
            Passo {step} de 2
          </div>
        </div>

        {step === 1 ? renderStep1() : renderStep2()}
      </div>
    </div>
  )
}