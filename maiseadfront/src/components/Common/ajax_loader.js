import React from 'react'
import { Dimmer, Loader } from '../../../node_modules/semantic-ui-react'

const AjaxLoader = () => (
  <div>
    <Dimmer active inverted>
      <Loader inverted>Carregando</Loader>
    </Dimmer>
  </div>
)

export default AjaxLoader