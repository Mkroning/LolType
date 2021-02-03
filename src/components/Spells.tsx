import React from 'react';
import { Spell } from '../models/ChampionFull';
import Builder from '../Utilities/URLBuilder';
import styled from 'styled-components';
// import { Container } from './styles';
const SpellDiv = styled.div`
    display: flex;
    padding: 10px;
    allign-items: center;
`;

interface SpellsProps {
    spells: Spell[];
}

const Spells: React.FC<SpellsProps> = (props: SpellsProps) => {
    return (
        <div>
            <h2>Spells</h2>
            {props.spells.map((spell: Spell) => {
                return (
                    <SpellDiv key={spell.name}>
                        <img key={spell.name} src={Builder.spellUrl(spell.image.full)} />
                        {spell.name}
                    </SpellDiv>
                );
            })}
        </div>
    );
};

export default Spells;
