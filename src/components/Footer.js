import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0px;

    p{
        font-size: ${({theme}) => theme.fontSize.xs};
        color: #6C757C;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        
        p{
            text-align: center;
        }
      }
`;

const Footer = () =>{
    return(
        <Wrapper>
            <p>Designed and Built by me</p>
            <p>Built with Gatsby</p>
        </Wrapper>
    )
}

export default Footer;