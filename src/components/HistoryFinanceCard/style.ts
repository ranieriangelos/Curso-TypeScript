import styled from 'styled-components';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';



interface ITagProps{
    color: string;
}

interface IContainerProps{}
export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.theme.color.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    

    &:hover{
        opacity: 0.9;
        transform: translateX(3px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 0 0 10px;
    } 

    >div span{
        font-weight: bold;
    }
`;

export const Tag = styled.div<ITagProps>`
    display: block;
    position: absolute;
    width: 12px;
    height: 60%;
    background-color: ${props => props.color};
    left: 0;
`;