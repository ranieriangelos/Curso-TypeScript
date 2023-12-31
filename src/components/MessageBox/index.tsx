import happyImg from '../../assets/happy.svg'
import styled from "styled-components";
import React, {ReactNode} from "react";
import { Container } from "./style";


interface IMessageBoxProps{
    title: string;
    description: string;
    footerText: string;
    icon: string;
}


const MessageBox: React.FC<IMessageBoxProps> = ({
    title,
    description,
    footerText,
    icon
}) =>{
    return(
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title}/>
                </h1>
                <p>
                    {description}
                </p>
            </header>

            <footer>
                <span>{footerText}</span>
            </footer>
        </Container>
    );
}
 
export default MessageBox;
