import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #fd616b;
    --orange: #ffa46b;
    --lightYellow: #fff6cf;
    --purple: #683449;
    --lightPink: #ffe0d3;
  }

  body {
    background-color: var(--lightPink);
    max-width: 1024px;
    margin: 0 auto;
    font-family: 'Press Start 2P', cursive;
    color: var(--purple);
  }


  h1 {
    font-size: 1rem;

    @media (min-width: 1024px){
      font-size: 1.5rem;
    }
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.6rem;
    line-height: 1rem;

    @media (min-width: 1024px){
      font-size: 1rem;
    }
  }

  p{
    line-height: 1rem;
    font-size: 0.5rem;

    @media (min-width: 668px) and (max-width: 1023px){
      font-size: 0.8rem;
      line-height: 1.5rem;
    }

    @media (min-width: 1024px){
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  input {
    border: 4px solid var(--purple);
    line-height: 2rem;
    margin: 10px;
    text-align: center;

    ::placeholder{
      font-family: 'Press Start 2P', cursive;
      font-size: 0.5rem;
    }
  }
`

export const DuckContainer = styled.div`
  display: grid;
  grid-template-columns: 90px auto ;
  align-items: center;
  margin: 30px auto;
  padding: 0 10% 0 10%;

  p{
    line-height: 20px;
    font-size: 0.5rem;
  }

  @media (min-width: 668px) and (max-width: 1023px){
    grid-template-columns: 120px auto ;
    margin: 50px auto;
    padding: 0 10% 0 10%;

    p{
    line-height: 30px;
  }
  }

  @media (min-width: 1024px){
    grid-template-columns: 120px auto ;
    margin: 30px auto;
    padding: 0 10% 0 10%;

    p{
    line-height: 30px;
    }
  }
  `

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: var(--purple);
  display: inline;
  font-size: 0.5rem;
  cursor: pointer;
  border: 4px solid var(--purple);
  background-color: var(--pink);
  background-image: linear-gradient(62deg, var(--pink) 0%, var(--orange) 36%, var(--lightYellow) 82%);
  padding: 10px 15px;
  margin: 20px;
  box-shadow: 6px 5px 0px 0px rgba(0,0,0,0.65);

  @media (min-width: 668px) and (max-width: 1023px){
    padding: 15px 25px;
    font-size: 0.7rem;
  }

  @media (min-width: 1024px){
    padding: 15px 25px;
    font-size: 0.7rem;
  }
  
`