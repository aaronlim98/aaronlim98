import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
      }
`;

const Title = styled.div`
    margin-bottom: 15px;
    width: 30%;

    @media (max-width: 900px) {
        width: 100%
      }
`;

const Content = styled.div`
    margin-top: 8px;
    width: 70%;

    @media (max-width: 900px) {
        margin: 0px;
        width: 100%
      }
`;

const Item = styled.div`
`;

const ItemTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 6px;
    h3, p{
        font-size: ${({theme}) => theme.fontSize.base};
        line-height: 1rem;
    }

    @media(max-width:900px){
        h3, p{
            margin-bottom:6px;
        }
        flex-direction: column;
    }
`;

const Role = styled.p`
    font-size: ${({theme}) => theme.fontSize.sm};
    color: #6C757C;
    line-height: 1rem;
`;

const List = styled.ul`
    font-size: ${({theme}) => theme.fontSize.sm};
    color: #6C757C;
    margin-top: 15px;
    padding-left: 20px;
`;


const ItemLine = styled.div`
    border-bottom: 1px solid #EFF0F1;
    margin: 30px 0px;
`;

const Experiences = () => {
    return (
        <Wrapper>
            <Title>
                <h2 style={{textTransform: 'uppercase'}}>Experiences</h2>
            </Title>
            <Content>
                <Item>
                    <ItemTitle>
                        <h3 style={{textTransform: 'uppercase'}}>Ellipsis SCIS Society</h3>
                        <p>Oct 2021 - Present</p>
                    </ItemTitle>
                    <Role>Operations Executive</Role>
                    <List>
                    </List>
                    <ItemLine/>
                </Item>

                <Item>
                    <ItemTitle>
                        <h3 style={{textTransform: 'uppercase'}}>SyncPictures</h3>
                        <p>2015 - 2019</p>
                    </ItemTitle>
                    <Role>Co-Founder</Role>
                    <List>
                        <li>Host and develop company website with HTML, CSS and Bootstrap</li>
                        <li>Manage and direct creative operations, overseeing creative process of content and web creation</li>
                        <li>Manage company finances</li>
                    </List>
                    <ItemLine/>
                </Item>
                <Item>
                    <ItemTitle>
                        <h3 style={{textTransform: 'uppercase'}}>Prudential Assurance Company Singapore</h3>
                        <p>Nov 2018 - Feb 2019</p>
                    </ItemTitle>
                    <Role>Software Quality Assurance Analyst (Intership)</Role>
                    <List>
                        <li>Create documentation support for requirements gathering; process analysis; gap analysis; design of new functionality; and user acceptance testing </li>
                    </List>
                    <ItemLine/>
                </Item>
            </Content>
        </Wrapper>
    )
}

export default Experiences;