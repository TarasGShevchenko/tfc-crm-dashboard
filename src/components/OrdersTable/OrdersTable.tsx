import { FC, useState } from 'react'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { ORDERS_ROWS_PER_PAGE } from '../../constants'
import { fetchOrders } from '../../api'
import { Order } from '../../types'

export const OrdersTable: FC = () => {
  const [page, setPage] = useState(0)

  const { data, isLoading, isFetching, error } = useQuery<
    { orders: Order[]; total: number },
    Error
  >({
    queryKey: ['orders', page],
    queryFn: () => fetchOrders(page),
  })

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">Error: {error.message}</Typography>
      </Box>
    )
  }

  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Order History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Shipped Date</TableCell>
            <TableCell align="right">Created Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.orders.map(order => (
              <TableRow key={order.number}>
                <TableCell>{order.number}</TableCell>
                <TableCell>{order.itemName}</TableCell>
                <TableCell>
                  {order['price '].toLocaleString('en-US', {
                    style: 'currency',
                    currency: order.currency,
                  })}
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell align="right">
                  {new Date(order.shippedAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data?.total ?? 0}
        page={page}
        rowsPerPage={ORDERS_ROWS_PER_PAGE}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPageOptions={[ORDERS_ROWS_PER_PAGE]}
      />
      {(isLoading || isFetching) && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Paper>
  )
}
