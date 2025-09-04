import React, { FC } from 'react'
import { Card, Typography, Avatar, Box } from '@mui/material'

import { User } from '../../types'

interface UserCardProps {
  user: User
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 1, p: 1 }}>
      <Avatar sx={{ width: 48, height: 48, mr: 2 }}>{user.firstName[0]}</Avatar>
      <Box>
        <Typography variant="subtitle1">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      </Box>
    </Card>
  )
}
