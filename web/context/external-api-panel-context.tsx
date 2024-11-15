'use client'

import { createCtx } from '@/utils/context'
import React, { useState } from 'react'

type ExternalApiPanelContextType = {
  showExternalApiPanel: boolean
  setShowExternalApiPanel: (show: boolean) => void
}

const [, useExternalApiPanel, ExternalApiPanelContext] = createCtx<ExternalApiPanelContextType>()

export const ExternalApiPanelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showExternalApiPanel, setShowExternalApiPanel] = useState(false)

  return (
    <ExternalApiPanelContext.Provider value={{ showExternalApiPanel, setShowExternalApiPanel }}>
      {children}
    </ExternalApiPanelContext.Provider>
  )
}

export { useExternalApiPanel }
