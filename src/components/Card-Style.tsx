import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  width: 40rem;
  height: 35rem;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: .5rem;
  @media(min-width: 428px) and (max-width: 926px) {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    width: 25rem;
  }
  @media(min-width: 360px) and (max-width: 844px){
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    width: 23rem;
  }
  @media(min-width: 360px) and (max-width: 844px){
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    width: 21rem;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  margin-top: -25rem;
`

export const Order = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
  margin-top: 6rem;
  margin-left: -17rem;
`

export const Title = styled.p`
  font-size: 1.7rem;
  font-family: Arial, Helvetica, sans-serif;
  @media(min-width: 428px) and (max-width: 926px) {
    width: 15rem;
  }
  @media(min-width: 360px) and (max-width: 844px){
    width: 17rem;
    margin-left: -1.4rem;
  }
  @media(min-width: 360px) and (max-width: 844px){
    margin-left: -2.9rem;
  }
`

export const Moves = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1rem;
`

export const Reset = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: .5rem;
  margin-left: 1.5rem;
  color: #fff;
  background-color: #000;
  border: none;
  cursor: pointer;
  margin-top: -.1rem;
  &:hover{
    color: #000;
    background-color: #fff;
    border: .1px solid #000;
    transition: .7s;
  }
`

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.7rem;
  width: 5rem;
  height: 5rem;
  border-radius: .5rem;
  background-color: darkblue;
  &:hover{
    background-color: rgba(0, 0, 139, 0.8);
    transition: .4s;
  }
  @media(min-width: 360px) and (max-width: 844px){
    width: 4.5rem;
    height: 4.5rem;
  }
  @media(min-width: 360px) and (max-width: 844px){
    width: 4rem;
    height: 4rem;
  }
`
export const Central = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
  @media(min-width: 360px) and (max-width: 844px){
    margin-left: 1.2rem;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-left: -21rem;
  margin-top: 10rem;
  max-width: 25rem; 
  cursor: pointer;
`
