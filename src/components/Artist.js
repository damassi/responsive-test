import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { Box, BorderBox, StackableBorderBox } from '@artsy/palette'
import { Responsive } from '../utils/Responsive'

export const Artist = createFragmentContainer(
  ({ artist }) => {
    return (
      <Responsive>
        {({ xs, sm, md, lg }) => {
          return (
            <Box>
              <h1>{artist.name}</h1>
              <p>{artist.bio}</p>

              <BorderBox justifyContent="flex-end">
                {xs && <StackableBorderBox>XS</StackableBorderBox>}
                {sm && <StackableBorderBox>SM</StackableBorderBox>}
                {md && <StackableBorderBox>MD</StackableBorderBox>}
                {lg && <StackableBorderBox>LG</StackableBorderBox>}
                <StackableBorderBox>Fallback</StackableBorderBox>
              </BorderBox>
            </Box>
          )
        }}
      </Responsive>
    )
  },
  graphql`
    fragment Artist_artist on Artist {
      name
      bio
    }
  `
)
