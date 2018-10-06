import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { Artist } from './Artist'
import styled from 'styled-components'
import { Responsive } from '../utils/Responsive'

export default function App({ environment }) {
  return (
    <Container>
      <Responsive>
        {({ xs }) => {
          const artistID = xs ? 'pablo-picasso' : 'andy-warhol'

          return (
            <QueryRenderer
              environment={environment}
              query={graphql`
                query AppQuery($id: String!) {
                  artist(id: $id) {
                    ...Artist_artist
                  }
                }
              `}
              variables={{
                id: artistID,
              }}
              render={({ error, props }) => {
                if (error) {
                  return <div>{error.message}</div>
                } else if (props) {
                  return <Artist {...props} />
                } else {
                  return <div>Loading</div>
                }
              }}
            />
          )
        }}
      </Responsive>
    </Container>
  )
}

const Container = styled.div``
