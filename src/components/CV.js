import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 0px 0px;
    display: flex;
    justify-content: center;
`

const Button = styled.a`
    color: inherit;
    border-bottom: 1px dashed #6C757C;
    text-decoration: none;
`

const CV = () => {
    return(
        <Wrapper>
            <Button href="http://google.com" target="blank">View My CV</Button>
        </Wrapper>
    )
}

export default CV;