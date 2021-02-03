import React from 'react';
import Builder from '../Utilities/URLBuilder';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ChampionCardProps {
    id: string;
    name: string;
}

const ChampionDiv = styled.div`
    padding-bottom: 32px;
`;

const TagsDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const NavigationLink = styled(NavLink)`
    display: inline-block;
    height: 36px;
    line-height: 36px;
    position: relative;
    color: #f0f0f0;
    font-size: 24px;
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    text-decoration: none;
    font-weight: bold;
`;

const ChampionCard: React.FC<ChampionCardProps> = ({ id, name }: ChampionCardProps) => {
    return (
        <ChampionDiv>
            <NavigationLink exact to={`/champions/${id}`}>
                <img key={id} src={Builder.defaultImageUrl(id)} alt={name} />
                <TagsDiv>{name}</TagsDiv>
            </NavigationLink>
        </ChampionDiv>
    );
};

export default ChampionCard;
