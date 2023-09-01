import React from 'react'
import styled from 'styled-components'

// 헤더
function Header() {
  return (
      <header>
          <Title>To Do List</Title>
      </header>
  );
}

export default Header

const Title = styled.h1 `
  font-size:40px;
  text-align:center;
  font-weight:bold;
  padding-bottom:20px;
  letter-spacing:2px;
  font-family: 'Roboto', sans-serif;

`