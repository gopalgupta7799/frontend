import './TimeLine.css'

import React from 'react'
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineSeparator, TimelineOppositeContent, TimelineDot } from '@mui/lab'
import { Event } from '@mui/icons-material'
import { Typography } from '@mui/material'

export default function TimeLine({ items = [] }) {
  return (
    <div>
      <Timeline position='right'>
        {
          items.map((item, index) =>
            <TimelineItem key={index}>
              <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant='body2' color="text.secondary">
                Date-{index + 1}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Event />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px" }}>
                <Typography variant='h6'>Title</Typography>
                <Typography>Description</Typography>
              </TimelineContent>
            </TimelineItem>
          )
        }
      </Timeline>
    </div>
  )
}
