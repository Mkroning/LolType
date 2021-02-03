import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/images/lol_background.jpg');
    min-height: 800px;
    padding-top: 32px;
`;

const Title = styled.div`
    color: white;
    font-size: 82px;
    font-weight: bold;
    text-shadow: 1px 1px 2px #000000;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const SubTitle = styled.div`
    color: white;
    font-size: 62px;
    font-weight: bold;
    text-shadow: 1px 1px 2px #000000;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Home: React.FC = () => {
    document.title = 'League of Legends';
    return (
        <Div>
            <Title>League of Legends</Title>
            <Title>Companion Site</Title>
            <SubTitle>Built in React</SubTitle>
        </Div>
    );
};

export default Home;
