import React, { useState, useEffect } from 'react';
// import { Container } from './styles';
import { useParams } from 'react-router-dom';
import { ChampionFull } from '../models/ChampionFull';
import ChampionService from '../Data/ChampionsService';
import StatGrid from './StatGrid';
import Spells from './Spells';
import Passives from './Passive';

const Champion: React.FC = () => {
  const { name } = useParams();
  const [champion, setChampion] = useState({}as ChampionFull);

  useEffect(() => {
    if(!champion.champion) {
      document.title = 'Champion';
      ChampionService.champion(name).then((value) => {
        setChampion(value);
      });
    } else {
      document.title = champion.champion.name;
    }
  });
  if (!champion.champion){
    return <div>Fetching Data</div>;
  } else {
    return (
      <div>
        <StatGrid champion={champion.champion} />
        <Spells spells={champion.champion.spells} />
        <Passives passive={champion.champion.passive} />
      </div>
    );
  }
};

export default Champion;
