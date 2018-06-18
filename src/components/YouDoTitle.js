import styled from 'styled-components'
import React, { Component } from 'react'

import YouDoLogo from './YouDoLogo'

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`

const YouDoTitle = () => (
  <Title>
    Образец карты для заказчика
    <YouDoLogo />
  </Title>
)

export default YouDoTitle;