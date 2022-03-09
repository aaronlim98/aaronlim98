import React from 'react'
import styled from 'styled-components';

import { Socials } from './Socials';

const Wrapper = styled.nav`
    height: 60px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    p{
        margin: 0;
        padding: 0;
    }
`

const Logo = styled.span`
    font-family: ${props => props.theme.font.monoton};
    font-size:  ${props => props.theme.fontSize.xl};
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Nav = () =>{
    return(
        <Wrapper>
            <Logo>CK</Logo>
            <Icons>
                <Socials/>
            </Icons>
        </Wrapper>
    )
}

export default Nav;