import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ExternalLink = styled.a`
    display: inherit;
    align-items: inherit;
    color: inherit;
    text-decoration: none;

    :not(:last-child){
        margin-right: 20px;
    }
`

export const Socials = () => {
    let iconStyle = {fontSize: '1.235rem'}

    return(
        <Wrapper> 
            <ExternalLink href="http://github.com/aaronlim98" target="blank"><AiFillGithub style={iconStyle}/></ExternalLink>
            <ExternalLink href="http://linkedin.com/in/aaronlimchengkiat" target="blank"><AiFillLinkedin style={iconStyle}/></ExternalLink>
        </Wrapper>
    )
}