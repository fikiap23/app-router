'use client'

import { useState } from 'react'

export default function AdminProductPage() {
  const [status, setStatus] = useState('')
  const revalidate = async () => {
    const res = await fetch('/api/revalidate?tag=products&secret=123456', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    if (data.revalidate) {
      setStatus('Revalidated!')
    } else {
      setStatus('Failed to revalidate!')
    }
  }

  return (
    <div className="p-4">
      <button
        onClick={revalidate}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl"
      >
        Revalidate
      </button>
      <p>{status}</p>
    </div>
  )
}
