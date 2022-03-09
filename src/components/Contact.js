import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;

    h2{
        font-weight: ${props => props.theme.fontWeight.light};
        line-height: 1.2;
        margin-bottom: 15px;
    }
`;

const FontBold = styled.span`
    font-weight: ${props => props.theme.fontWeight.semibold};
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 60px 50px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 3px 3px 40px 0 rgb(0 0 0 / 8%);

    @media screen and (max-width: 900px){
        flex-direction: column;
        padding: 40px 28px;
    }
`

const CardItem = styled.div`
    width: 60%;

    @media screen and (max-width: 900px){
        width: 100%;
    }
`

const CardImage = styled.div`
    width: 40%;
    align-self: end;
    @media screen and (max-width: 900px){
        width: 100%;
        padding-top: 30px;
    }
`
const ExternalLink = styled.a`
    color: inherit;
    border-bottom: 1px dashed #6C757C;
    text-decoration: none;
`

const Contact = () =>{
    return(
        <Wrapper>
            <Card>
                <CardItem>
                    <h2>
                        Don’t be shy,<br/>
                        <FontBold>Make the first move.</FontBold>
                    </h2>
                    <p>
                        I'm always happy to talk about working together, new opportunities or 
                        just catching up. — email me at <ExternalLink href='mailto:helloaaronlim@gmail.com'>helloaaronlim@gmail.com</ExternalLink>.
                    </p>
                </CardItem>
                <CardImage>
                    <StaticImage src="../images/contact.svg" width={300} quality={100} alt="contact"/>
                </CardImage>
            </Card>
        </Wrapper>
    )
}

export default Contact;