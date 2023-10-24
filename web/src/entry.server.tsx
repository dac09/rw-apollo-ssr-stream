import { LocationProvider } from '@redwoodjs/router'

import App from './App'
import { Document } from './Document'

interface Props {
  url: string
  css: string[]
  meta?: any[]
  children?: React.ReactNode
}

export const ServerEntry: React.FC<Props> = ({ url, css, meta, children }) => {
  return (
    <LocationProvider location={{ pathname: url }}>
      <Document css={css} meta={meta}>
        {children ? children : <App />}
      </Document>
    </LocationProvider>
  )
}
