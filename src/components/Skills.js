import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
      }
`

const Title = styled.div`
    margin-bottom: 15px;
    width: 30%;

    @media (max-width: 900px) {
        width: 100%
      }
`

const Content = styled.div`
    width: 70%;
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 8px;

    @media (max-width: 900px) {
        margin: 0px;
        width: 100%
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }      
`

const Item = styled.div`
`

const List = styled.ul`
    font-size: ${({theme}) => theme.fontSize.sm};
    color: #6C757C;
    margin-top: 6px;
    padding-left: 20px;
`

const Skills = () => {
    return (
        <Wrapper>
            <Title>
                <h2 style={{ textTransform: 'uppercase' }}>Skills</h2>
            </Title>
            <Content>
                <Item>
                    <h3>Languages</h3>
                    <List>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>Sql</li>
                    </List>
                </Item>
                <Item>
                    <h3>Frameworks</h3>
                    <List>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Gatsby</li>
                    </List>
                </Item>
                <Item>
                    <h3>Tools</h3>
                    <List>
                        <li>AdobeXD</li>
                        <li>Photoshop</li>
                        <li>Figma</li>
                    </List>
                </Item>
            </Content>
        </Wrapper>
    )
}

export default Skills;