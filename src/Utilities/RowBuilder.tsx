import { Stats } from '../models/ChampionFull';

export default class RowBuilder {
    static gridDataForStats = (stats: Stats): { key: string; value: number }[] => {
        return [
            {
                key: 'HP',
                value: stats.hp,
            },
            {
                key: 'HP per level',
                value: stats.hpperlevel,
            },
            {
                key: 'MP',
                value: stats.mp,
            },
            {
                key: 'MP per level',
                value: stats.mpperlevel,
            },
            {
                key: 'Move Speed',
                value: stats.movespeed,
            },
            {
                key: 'Armor',
                value: stats.armor,
            },
            {
                key: 'Armor per level',
                value: stats.armorperlevel,
            },
            {
                key: 'Spell block',
                value: stats.spellblock,
            },
            {
                key: 'Spell block per level',
                value: stats.spellblockperlevel,
            },
            {
                key: 'Attack range',
                value: stats.attackrange,
            },
            {
                key: 'HP regen',
                value: stats.hpregen,
            },
            {
                key: 'HP regen per level',
                value: stats.hpregenperlevel,
            },
            {
                key: 'MP regen',
                value: stats.mpregen,
            },
            {
                key: 'MP regen per level',
                value: stats.mpregenperlevel,
            },
            {
                key: 'Critical',
                value: stats.crit,
            },
            {
                key: 'Critical per level',
                value: stats.critperlevel,
            },
            {
                key: 'Attack damage',
                value: stats.attackdamage,
            },
            {
                key: 'Attack damage per level',
                value: stats.attackdamageperlevel,
            },
            {
                key: 'Attack speed per level',
                value: stats.attackspeedperlevel,
            },
            {
                key: 'Attack speed',
                value: stats.attackspeed,
            },
        ];
    };
}
