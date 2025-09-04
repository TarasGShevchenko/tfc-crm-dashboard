import React, { FC, useRef, useEffect } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

import { UserCard } from '../UserCard'
import { User } from '../../types'

interface UsersListProps {
  users: User[]
  loadMoreItems: () => void
  hasNextPage: boolean
  isLoading?: boolean
}

export const UsersList: FC<UsersListProps> = ({ users, loadMoreItems, hasNextPage, isLoading }) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
    overscan: 5,
  })

  const virtualItems = rowVirtualizer.getVirtualItems()
  const lastItem = virtualItems[virtualItems.length - 1]

  useEffect(() => {
    if (!lastItem) return
    if (hasNextPage && lastItem.index >= users.length - 1) {
      loadMoreItems()
    }
  }, [lastItem, hasNextPage, users.length, loadMoreItems])

  return (
    <Box
      ref={parentRef}
      sx={{ height: 600, overflow: 'auto', border: '1px solid #ccc', borderRadius: 1 }}
    >
      <Box sx={{ height: rowVirtualizer.getTotalSize(), position: 'relative' }}>
        {virtualItems.map(virtualRow => (
          <Box
            key={virtualRow.index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <Link to={`/users/${users[virtualRow.index].email}`} style={{ textDecoration: 'none' }}>
              <UserCard user={users[virtualRow.index]} />
            </Link>
          </Box>
        ))}

        {isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: rowVirtualizer.getTotalSize(),
              left: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <CircularProgress size={24} />
          </Box>
        )}
      </Box>
    </Box>
  )
}
