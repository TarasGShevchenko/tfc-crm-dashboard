import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material'

import { fetchUserByEmail } from '../../api'
import { OrdersTable } from '../../components/OrdersTable'
import { User } from '../../types'

export const UserDetailPage = () => {
  const { email } = useParams<{ email: string }>()
  const navigate = useNavigate()

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery<User>({
    queryKey: ['user', email],
    queryFn: () => fetchUserByEmail(email),
    enabled: !!email,
  })

  if (userLoading) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (userError) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">Error: {userError.message}</Typography>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </Box>
    )
  }

  if (!user) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>User not found</Typography>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h4" gutterBottom>
        {user.firstName} {user.lastName}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Contact</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Gender: {user.gender}</Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Address</Typography>
          <Typography>
            {user.street} {user.streetNumber}, {user.city}, {user.state}, {user.postCode},{' '}
            {user.country}
          </Typography>
        </Paper>
      </Box>
      <OrdersTable />
    </Box>
  )
}
