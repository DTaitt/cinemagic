import Header from '../Header/Header';
import React from 'react';
import Routes from '../../routes';
import styled from  'styled-components'

const App = () => (
  <>
  <Header />
  <Main>
    <Routes />
  </Main>
  </>
)

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
