import React, { FC, ReactNode } from 'react'
import { Box, Container } from '@mui/material'

import { Footer } from '../Footer'
import { Header } from '../Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <Container sx={{ flexGrow: 1, py: 3 }}>{children}</Container>

      <Footer />
    </Box>
  )
}
