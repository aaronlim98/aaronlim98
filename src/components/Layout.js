import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

const ContainerWrapper = styled.div`
    height: 100%;
    max-width: 1200px;
    display: block;
    margin: auto;
    padding: 0 3%;
`

export const Layout = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer />
        </ContainerWrapper>
    )
}