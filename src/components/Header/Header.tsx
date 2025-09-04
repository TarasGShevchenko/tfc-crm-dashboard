import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material'

export const Header: FC = () => {
  const theme = useTheme()
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CRM The Frontend Company
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
