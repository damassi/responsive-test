import useragent from 'express-useragent'
import React from 'react'
import express from 'express'
import App from './components/App'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { Network, Environment, RecordSource, Store } from 'relay-runtime'
import { createRelayEnvironment } from './relayEnvironment'
import { Boot } from './components/Boot'

const app = express()
app.use(useragent.express())

app.get('/', async (req, res, next) => {
  try {
    const sheet = new ServerStyleSheet()
    const initialMatchingMediaQueries = req.useragent.isMobile && ['xs']
    const boot = App => (
      <Boot initialMatchingMediaQueries={initialMatchingMediaQueries}>
        {App}
      </Boot>
    )
    const environment = createRelayEnvironment()
    renderToString(sheet.collectStyles(boot(<App environment={environment} />)))
    const relayData = await environment.relaySSRMiddleware.getCache()
    const store = new Store(new RecordSource())

    const html = renderToString(
      boot(
        <App
          environment={
            new Environment({
              network: Network.create(() => relayData[0][1]),
              store,
            })
          }
        />
      )
    )

    res.status(200).send(`
      <html>
        <head>
          <title>Relay Modern SSR Example</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${sheet.getStyleTags()}
        </head>
        <body>
          <div id="react-root">${html}</div>

          <script>
            window.__RELAY_BOOTSTRAP_DATA__ = ${JSON.stringify(relayData)};
          </script>

          <script src="/assets/artworks.js"></script>
        </body>
      </html>
    `)
  } catch (error) {
    console.log(error)
    next()
  }
})

export default app
