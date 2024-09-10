import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;

`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px.;
`

export const HeroTitle = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 0;
`
