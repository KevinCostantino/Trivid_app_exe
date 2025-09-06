'use client'

import { useState } from 'react'
import TitleBar from './components/TitleBar'
import Tabs from './components/Tabs'
import HomeTab from './components/HomeTab'
import SettingsTab from './components/SettingsTab'
import HistoryPanel from './components/HistoryPanel'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'settings'>('home')
  const [historyOpen, setHistoryOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TitleBar />
      
      <div className="flex h-[calc(100vh-8rem)]">
        <div className="flex-1 flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          
          <div className="flex-1 p-6 overflow-auto">
            {activeTab === 'home' && <HomeTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </div>
        
        {/* Histórico sempre visível */}
        <div className="w-96 border-l border-gray-200 dark:border-gray-700">
          <HistoryPanel open={historyOpen} onToggle={() => setHistoryOpen(!historyOpen)} />
        </div>
      </div>
      
      {/* Removido o botão de pasta flutuante */}
    </div>
  )
}