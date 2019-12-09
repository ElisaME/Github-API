import React from 'react'
import styled from 'styled-components';
import {Container} from 'reactstrap';
import Menu from './Navbar';

export default function Home() {
  const Jumbotron = styled.div`
    background:#01d6d2;
  `
  return (
    <div>
      <Menu></Menu>
      <Jumbotron className="jumbotron">
        <Container>
        <h1>Fetch Github API with React and Redux-Saga</h1>
        <p>Styled with Bootstrap 4</p>
        </Container>
      </Jumbotron>
      <Container>
        <p>Search for users and repositories in Github.</p>
        <p>Build with:</p>
        <ul>
          <li>React</li>
          <li>Redux-saga</li>
          <li>Styled Components</li>
          <li>Bootstrap 4</li>
          <li>Responsive*</li>
        </ul>
      </Container>
    </div>
  )
}
