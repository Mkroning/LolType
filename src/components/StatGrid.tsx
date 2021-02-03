import React from 'react';
import { ChampionLite } from '../models/ChampionFull';
import styled from 'styled-components';
import RowBuilder from '../Utilities/RowBuilder';

interface ChampionProps {
    champion: ChampionLite;
}

interface RowData {
    rowData: {
        key: string;
        value: number;
    }[];
}

const Container = styled.div`
    padding: 10px;
`;

const GridContainter = styled.div`
    display: inline-grid;
    grid-template-columns: 200px 200px;
    padding: 10px;
    grid-gap: 5px;
    background-color: black;
`;

const Div = styled.div`
    display: inline;
`;

const KeyDiv = styled.div`
    background-color: red;
    display: inline-flex;
    color: white;
    padding: 10px;
`;

const ValueDiv = styled.div`
    background-color: blue;
    display: inline-flex;
    color: white;
    padding: 10px;
`;

const Grid: React.FC<RowData> = ({ rowData }: RowData) => {
    return (
        <GridContainter>
            {rowData.map((row) => {
                return (
                    <>
                        <KeyDiv>{row.key}</KeyDiv>
                        <ValueDiv>{row.value}</ValueDiv>
                    </>
                );
            })}
        </GridContainter>
    );
};

const StatGrid: React.FC<ChampionProps> = ({ champion }: ChampionProps) => {
    return (
        <Container>
            <h1>{champion.name}</h1>
            <h2>{champion.title}</h2>
            <h2>{champion.partype}</h2>
            <p>{champion.blurb}</p>
            <Grid rowData={RowBuilder.gridDataForStats(champion.stats)} />
        </Container>
    );
};

export default StatGrid;
