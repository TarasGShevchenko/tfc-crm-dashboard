import React, { FC } from 'react'
import { TextField, MenuItem } from '@mui/material'

interface SelectorProps {
  label: string
  value: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  options: string[]
}

export const Selector: FC<SelectorProps> = ({ label, value, setValue, options }) => (
  <TextField select label={label} value={value} onChange={setValue}>
    <MenuItem value={''}>All</MenuItem>
    {options.map((option, i) => (
      <MenuItem key={i} value={option}>
        {option}
      </MenuItem>
    ))}
  </TextField>
)
