import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { Box, BorderBox, StackableBorderBox } from '@artsy/palette'
import { Responsive2 } from '../utils/Responsive2'

export const Artist2 = createFragmentContainer(
  ({ artist }) => {
    return (
      <Responsive2>
        {breakpoints => {
          return (
            <Box>
              <h1>{artist.name}</h1>
              <p>{artist.bio}</p>

              <BorderBox justifyContent="flex-end">
                <breakpoints.xs>
                  <StackableBorderBox>XS</StackableBorderBox>
                </breakpoints.xs>
                <breakpoints.sm>
                  <StackableBorderBox>SM</StackableBorderBox>
                </breakpoints.sm>
                <breakpoints.md>
                  <StackableBorderBox>MD</StackableBorderBox>
                </breakpoints.md>
                <breakpoints.lg>
                  <StackableBorderBox>LG</StackableBorderBox>
                </breakpoints.lg>
                <breakpoints.else>
                  <StackableBorderBox>Fallback</StackableBorderBox>
                </breakpoints.else>
              </BorderBox>
            </Box>
          )
        }}
      </Responsive2>
    )
  },
  graphql`
    fragment Artist2_artist on Artist {
      name
      bio
    }
  `
)
