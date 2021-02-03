import React from 'react';
import { Passive } from '../models/ChampionFull';
import Builder from '../Utilities/URLBuilder';
import styled from 'styled-components';

const PassiveDiv = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
`;

interface PassiveProps {
    passive: Passive;
}

const Passives: React.FC<PassiveProps> = (props: PassiveProps) => {
    return (
        <div>
            <h2>Passive</h2>
            {props.passive.description}
            <PassiveDiv>
                <img src={Builder.passiveUrl(props.passive.image.full)} />
                {props.passive.name}
            </PassiveDiv>
        </div>
    );
};

export default Passives;
