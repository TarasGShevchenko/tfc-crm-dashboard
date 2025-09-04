import { useCallback, useMemo, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Box, CircularProgress } from '@mui/material'

import { fetchUsers } from '../../api'
import { FiltersBar } from '../../components/FiltersBar'
import { UsersList } from '../../components/UsersList'
import { User, UsersFilters } from '../../types'

export const UsersPage = () => {
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [search, setSearch] = useState('')

  const filters: UsersFilters = { gender, country, city, state, search }
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteQuery<
    User[],
    Error
  >({
    queryKey: ['users', filters],
    queryFn: ({ pageParam = 0 }) =>
      fetchUsers(pageParam as number, { gender, country, city, state, search }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 10 ? allPages.length : undefined,
    initialPageParam: 0,
  })

  const allUsers = useMemo(() => data?.pages.flat() ?? [], [data])

  const handleFilterChange = useCallback(
    (setter: (value: string) => void) => (value: string) => {
      setter(value)
    },
    [],
  )

  return (
    <>
      <FiltersBar
        gender={gender}
        setGender={handleFilterChange(setGender)}
        country={country}
        setCountry={handleFilterChange(setCountry)}
        state={state}
        setState={handleFilterChange(setState)}
        city={city}
        setCity={handleFilterChange(setCity)}
        search={search}
        setSearch={handleFilterChange(setSearch)}
      />

      {isLoading ? (
        <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <UsersList
          users={allUsers}
          loadMoreItems={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isFetching}
        />
      )}
    </>
  )
}
