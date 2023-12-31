
import React from 'react';
import{Container, TitleContainer, Controllers} from './style';

interface IContentheaderProps{
    title: String;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentheaderProps> = ({
    title, lineColor, children
}) => {

    return(
       <Container >
            <TitleContainer lineColor ={lineColor}>
                <h2>{title}</h2>
            </TitleContainer> 
            <Controllers>
                {children}
            </Controllers>
       </Container>  
    );
}

export default ContentHeader;