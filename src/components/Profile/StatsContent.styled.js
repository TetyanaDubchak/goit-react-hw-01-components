import styled from 'styled-components';

export const List = styled.ul`
display: flex;
padding-top: 2px;
gap: 2px;
background: rgb(192,192,192);

`;
export const Item = styled.li`
    width: calc(100% / 3);
    text-align: center;
    padding-top:25px;
    padding-bottom: 40px;
    background-color: rgb(220,220,220);
    border-radius: 5px;
`;

export const Title = styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 28px;
    color: rgb(105,105,105);

`;

export const Number = styled.span`
    display: block;
    font-size: 36px;
    font-weight: bold;
`;