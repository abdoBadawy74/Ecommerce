import { ExpandMore } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Links() {
  return (
    <div>
        <Box sx={{display:"flex", alignItems:"center"}}>
            <Typography variant='body1'>
                Home
            </Typography>
            <ExpandMore sx={{fontSize:"16px"}} />
        </Box>
    </div>
  )
}
