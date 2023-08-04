import styled from 'styled-components';

export const Img = styled.img`
    width: 80px;
    height: 80px;
`

export const Text = styled.p`

`

export const Sign = styled.span`
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => (props.isonline === 'true' ? 'green' : 'red')};
`