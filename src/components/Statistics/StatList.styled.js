import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    gap: 2px;
    width: 100%;
    
`
export const Item = styled.li`
    background: ${getRandomHexColor()};
    width: calc(100% / 5);
    padding: 20px 10px;
    
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}