import React from 'react';
import styled from 'styled-components';
import { MdOutlineWavingHand } from 'react-icons/md';

const Wrapper = styled.header`
    min-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Introduction = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    color: #242424;
`

const Description = styled.div`
    max-width:800px;
    p{
        color: #242424;
        margin-bottom: 15px;
    }
`

const ExternalLink = styled.a`
    color: inherit;
    border-bottom: 1px dashed #6C757C;
    text-decoration: none;
`

const Hero = () => {
    return (
        <Wrapper>
            <Introduction>
                <p>Hey there</p>
                <MdOutlineWavingHand style={{marginLeft: '10px'}}/>
            </Introduction>
            <h1>I'm Aaron Lim</h1>
            <Description>
                <p>
                    A first-year Information Systems student at <ExternalLink href="https://smu.edu.sg/" target="blank">Singapore Management University</ExternalLink>. 
                    I love creating and building things.
                    In my spare time, I enjoy taking photos and reading about personal growth.
                </p>
                <p>
                    I'm always up for discussing collaboration, new opportunities, or just 
                    catching up. — email me at <ExternalLink href="mailto:helloaaronlim@gmail.com">helloaaronlim@gmail.com</ExternalLink>.
                </p>
            </Description>
        </Wrapper>
    )
}

export default Hero;