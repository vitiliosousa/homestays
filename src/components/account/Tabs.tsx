'use client'
import { useState } from 'react'
import  AccountTab  from '@/components/account/AccountTab'
import HistoryTab from '@/components/account/HistoryTab'
import PaymentTab from '@/components/account/PaymentTab'

export function Tabs() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="w-4/5 mt-10">
      <div className="grid grid-cols-3 text-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab('account')}
          className={`py-4 font-medium transition-colors ${
            activeTab === 'account' 
              ? 'text-black border-b-4 border-mint' 
              : 'text-black hover:text-mint'
          }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`py-4 font-medium transition-colors ${
            activeTab === 'history' 
              ? 'text-black border-b-4 border-mint' 
              : 'text-black hover:text-mint'
          }`}
        >
          History
        </button>
        <button
          onClick={() => setActiveTab('payment')}
          className={`py-4 font-medium transition-colors ${
            activeTab === 'payment' 
              ? 'text-black border-b-4 border-mint' 
              : 'text-black hover:text-mint'
          }`}
        >
          Payment Methods
        </button>
      </div>

      <div className="my-10">
        {activeTab === 'account' && <AccountTab />}
        {activeTab === 'history' && <HistoryTab />}
        {activeTab === 'payment' && <PaymentTab />}
      </div>
    </div>
  )
}

