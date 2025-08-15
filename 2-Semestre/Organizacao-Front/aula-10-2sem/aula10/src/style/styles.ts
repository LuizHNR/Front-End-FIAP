import styled from "styled-components";

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`
// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`
export const MainContent = styled.main`
  padding: 20px;
  margin-top: 60px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
`
// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`
// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;
  & a{
        color:#fff;
        text-decoration: none;
        padding: 10px 20px;
        display: block;
    }
`

export const MinhaTabela = styled.table`
border-collapse:collapse;
width: 70%;
margin: 0 auto;

& thead{
    background-color: #f0f0f0;
    color: #333;
    font-weight: bold;
    font-size:24px;
    padding: 10px;
    text-align: left;
    & th{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tbody{
        font-size: 18px;
        text-align:center;
        & td{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tfoot{
        font-size: 18px;
        text-align:center;
        & td{
            padding: 10px;
            border: 2px solid #333;
        }
    }

    & tr:nth-child(odd){
        background-color:#e2e2e2;
    }

    & tr:nth-child(even){
        background-color:#e2c2e2;
    }

`