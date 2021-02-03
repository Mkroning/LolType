import React from 'react';
import ChampionCard from './ChampionCard';
import ChampionsService from '../Data/ChampionsService';
import styled from 'styled-components';

const champions = ChampionsService.champions();

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: black;
`;

const Champions: React.FC = () => {
    document.title = 'Champions';
    return (
        <Container>
            {champions.map((champ) => {
                return <ChampionCard key={champ.id} id={champ.id} name={champ.name} />;
            })}
        </Container>
    );
};

export default Champions;
