import React from 'react'
import { ResponsiveProvider } from '../utils/Responsive'
import { themeProps } from '@artsy/palette'

export const Boot = ({ children, initialMatchingMediaQueries }) => {
  return (
    <ResponsiveProvider
      mediaQueries={themeProps.mediaQueries}
      initialMatchingMediaQueries={initialMatchingMediaQueries}
    >
      {children}
    </ResponsiveProvider>
  )
}
