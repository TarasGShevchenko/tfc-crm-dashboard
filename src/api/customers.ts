import { USERS_LIMIT } from '../constants'
import { User, UsersFilters } from '../types'

export const fetchFilters = async (): Promise<{
  genders: string[]
  countries: string[]
  cities: string[]
  states: string[]
}> => {
  const response = await fetch('./data/customers.json')
  if (!response.ok) throw new Error('Something went wrong')

  const data = (await response.json()) as User[]
  const genders = Array.from(new Set(data.map(u => u.gender)))
  const countries = Array.from(new Set(data.map(u => u.country)))
  const cities = Array.from(new Set(data.map(u => u.city)))
  const states = Array.from(new Set(data.map(u => u.state)))
  return new Promise(resolve =>
    setTimeout(() => resolve({ genders, countries, cities, states }), 300),
  )
}

export const fetchUsers = async (pageParam = 0, filters: UsersFilters = {}): Promise<User[]> => {
  const response = await fetch('./data/customers.json')
  if (!response.ok) throw new Error('Something went wrong')

  const data = (await response.json()) as User[]

  const filtered = data.filter(u => {
    const genderMatch = filters.gender ? u.gender === filters.gender : true
    const countryMatch = filters.country ? u.country === filters.country : true
    const cityMatch = filters.city ? u.city === filters.city : true
    const stateMatch = filters.state ? u.state === filters.state : true
    const searchMatch = filters.search
      ? [u.firstName, u.lastName, u.email]
          .join(' ')
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      : true

    return genderMatch && countryMatch && cityMatch && stateMatch && searchMatch
  })

  const start = pageParam * USERS_LIMIT
  const end = start + USERS_LIMIT
  const pageData = filtered.slice(start, end)

  return new Promise(resolve => setTimeout(() => resolve(pageData), 300))
}

export const fetchUserByEmail = async (email: string | undefined): Promise<User> => {
  if (!email) throw new Error('Invalid email')

  const response = await fetch('./data/customers.json')
  if (!response.ok) throw new Error('Something went wrong')

  const data = (await response.json()) as User[]

  const customer = data.find(c => c.email === email)
  if (!customer) throw new Error('Customer not found')

  return new Promise(resolve => setTimeout(() => resolve(customer), 300))
}
