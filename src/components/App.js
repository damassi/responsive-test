import React, { Fragment } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { Artist } from './Artist'
import { Artist2 } from './Artist2'
import styled from 'styled-components'
import { Responsive } from '../utils/Responsive'

export default function App({ environment }) {
  return (
    <Container>
      <Responsive>
        {({ xs }) => {
          const artistID = xs ? 'pablo-picasso' : 'andy-warhol'

          return (
            <Fragment>
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

              {/* New responsive component */}

              <QueryRenderer
                environment={environment}
                query={graphql`
                  query App2Query($id: String!) {
                    artist(id: $id) {
                      ...Artist2_artist
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
                    return <Artist2 {...props} />
                  } else {
                    return <div>Loading</div>
                  }
                }}
              />
            </Fragment>
          )
        }}
      </Responsive>
    </Container>
  )
}

const Container = styled.div``
