export default class Builder {
  static baseUrl = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/';

  static defaultImageUrl = (name: string): string => {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
  };

  static passiveUrl = (name: string): string => {
      return `${Builder.baseUrl}passive/${name}`;
  };

  static spellUrl = (name: string): string => {
      return `${Builder.baseUrl}spell/${name}`;
  };
}
