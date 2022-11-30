import React from 'react'
import styled from 'styled-components'
import background from '../imgs/login.jpg'

function Background() {
  return (
    <Container>
        <img src={background} alt="background"/>
    </Container>
  )
}


const Container = styled.div`
height = 100 vh; 
width =100 vw; 
img{
    width = 100vw;
    height = 100vh ;
}
`

export default Background
