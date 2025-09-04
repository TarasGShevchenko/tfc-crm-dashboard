import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} CRM The Frontend Company
      </Typography>
    </Box>
  )
}
