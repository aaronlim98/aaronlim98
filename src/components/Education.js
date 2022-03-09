import React from 'react';
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
    margin-top: 8px;
    width: 70%;

    @media (max-width: 900px) {
        margin: 0px;
        width: 100%
      }
`

const Item = styled.div`
`

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
`

const Role = styled.p`
    font-size: ${({theme}) => theme.fontSize.sm};
    color: #6C757C;
    line-height: 1rem;
`

const List = styled.ul`
    font-size: ${({theme}) => theme.fontSize.sm};
    color: #6C757C;
    margin-top: 15px;
    padding-left: 20px;
`

const ItemLine = styled.div`
    border-bottom: 1px solid #EFF0F1;
    margin: 30px 0px;
`

const Education = () => {
    return (
        <Wrapper>
            <Title>
                <h2 style={{textTransform: 'uppercase'}}>Education</h2>
            </Title>
            <Content>
                <Item>
                    <ItemTitle>
                        <h3 style={{textTransform: 'uppercase'}}>Singapore Management University</h3>
                        <p>2021 - Present</p>
                    </ItemTitle>
                    <Role>Bachelor's Degree, Information Systems</Role>
                    <List>
                    </List>
                    <ItemLine/>
                </Item>
                <Item>
                    <ItemTitle>
                        <h3 style={{textTransform: 'uppercase'}}>Nanyang Polytechnic</h3>
                        <p>2016 - 2019</p>
                    </ItemTitle>
                    <Role>Diploma in Business Informatics</Role>
                    <List>
                        <li>Awarded multiple Director's Lists (2016/2017 Semester 1 & 2018/2019 Semester 2)</li>
                        <li>Awarded Bronze Award for i.Code.i.Tell Competition in 2018</li>
                        <li>Selected for Oversea Exchange Program in South Korea (2017/2018 Semester 2)</li>
                        <li>Awarded Distinction for E-Business and Project in 2017</li>
                    </List>
                    <ItemLine/>
                </Item>
            </Content>
        </Wrapper>
    )
}

export default Education;