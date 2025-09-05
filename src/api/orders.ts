import { ORDERS_LIMIT } from '../constants'
import { Order } from '../types'

export const fetchOrders = async (page: number): Promise<{ orders: Order[]; total: number }> => {
  const response = await fetch('./data/orders.json')
  if (!response.ok) throw new Error('Something went wrong')

  const data = (await response.json()) as Order[]

  const start = page * ORDERS_LIMIT
  const end = start + ORDERS_LIMIT
  const paginatedData = data.slice(start, end)

  return new Promise(resolve =>
    setTimeout(() => resolve({ orders: paginatedData, total: data.length }), 300),
  )
}
