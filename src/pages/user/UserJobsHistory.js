import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../component/cardElement';

const UserJobsHistory = () => {
    const {user}=useSelector(state=>state.userProfile);

  return (
    <>
      <Box>
        <Typography variant='h4' sx={{color: "#092635"}}>Jobs History</Typography>
        <Box>
            {
                user && user.jobsHistory.map((history,i)=>(
                    <CardElement
                    key={i}
                    id={history._id}
                    jobTitle={history.title}
                    description={history.description}
                    category=''
                    location={history.location}
                />
                ))
            }
        </Box>
      </Box>
    </>
  )
}

export default UserJobsHistory
