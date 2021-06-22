import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  margin: 20px;

  border-bottom: 2px solid black;
  border-radius: 5px;

  span {
    font-size: 1.8rem;
    transition: 300ms;
    cursor: pointer;
  }

  span:hover {
    transform: scale(1.1);
    transition: 300ms;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Navegation = styled.nav`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  li {
    color: var(--text);
    cursor: pointer;
    list-style-type: none;
    margin: 0px 8px;
    transition: 300ms;
  }

  li:hover {
    transform: scale(1.1);
    transition: 300ms;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: 2px solid lightgrey;
    border-radius: 5px;
  }
`;
