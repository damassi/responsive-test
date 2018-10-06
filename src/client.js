import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createRelayEnvironment } from './relayEnvironment'
import { Boot } from './components/Boot'

const environment = createRelayEnvironment(window.__RELAY_BOOTSTRAP_DATA__)

ReactDOM.hydrate(
  <Boot>
    <App environment={environment} />
  </Boot>,
  document.getElementById('react-root')
)

if (module.hot) {
  module.hot.accept()
}
