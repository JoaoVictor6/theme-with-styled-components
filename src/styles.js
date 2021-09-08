import styled from "styled-components";

export const Main = styled.main`
  background: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s;
`;

export const Button = styled.button`
  border-style: none;
  background: #006eed;
  padding: 1rem 1.6rem;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.51);
  transition: all .2s;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.71);
  }
`;
