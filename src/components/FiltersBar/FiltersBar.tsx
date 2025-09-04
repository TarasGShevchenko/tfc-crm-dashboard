import React, { FC } from 'react'
import { Box, TextField } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { Selector } from '../Selector'
import { FiltersEnum } from '../../constants'
import { fetchFilters } from '../../api'

interface FiltersBarProps {
  gender: string
  setGender: (g: string) => void
  country: string
  setCountry: (c: string) => void
  city: string
  setCity: (c: string) => void
  state: string
  setState: (s: string) => void
  search: string
  setSearch: (s: string) => void
}

export const FiltersBar: FC<FiltersBarProps> = ({
  gender,
  setGender,
  country,
  setCountry,
  city,
  setCity,
  state,
  setState,
  search,
  setSearch,
}) => {
  const { data } = useQuery({ queryKey: ['filters'], queryFn: fetchFilters })

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(4, minmax(180px, 1fr))',
          lg: 'repeat(4, 180px) 1fr',
        },
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Selector
        label={FiltersEnum.GENDER}
        value={gender}
        setValue={e => setGender(e.target.value)}
        options={data?.genders ?? []}
      />
      <Selector
        label={FiltersEnum.COUNTRY}
        value={country}
        setValue={e => setCountry(e.target.value)}
        options={data?.countries ?? []}
      />
      <Selector
        label={FiltersEnum.CITY}
        value={city}
        setValue={e => setCity(e.target.value)}
        options={data?.cities ?? []}
      />
      <Selector
        label={FiltersEnum.STATE}
        value={state}
        setValue={e => setState(e.target.value)}
        options={data?.states ?? []}
      />
      <TextField
        label={FiltersEnum.SEARCH}
        value={search}
        onChange={e => setSearch(e.target.value)}
        fullWidth
        sx={{
          gridColumn: {
            xs: '1 / -1',
            md: '1 / -1',
            lg: 'auto',
          },
        }}
      />
    </Box>
  )
}
