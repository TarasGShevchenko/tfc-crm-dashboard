export type User = {
  firstName: string
  lastName: string
  email: string
  gender: string
  country: string
  city: string
  state: string
  postCode: string
  street: string
  streetNumber: string
}

export type UsersFilters = {
  gender?: string
  country?: string
  city?: string
  state?: string
  search?: string
}

export type Order = {
  number: number
  'price ': number
  currency: string
  itemName: string
  amount: number
  createdAt: number
  shippedAt: number
}
