import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: (Fighter | SimpleFighter)[];

  constructor(fighter: Fighter, monsters: (Fighter | SimpleFighter)[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters; 
  }

  fight(): number {
    this._monsters.forEach((enemy) => {
      while (this._fighter.lifePoints > 0 && enemy.lifePoints > 0) {
        this._fighter.attack(enemy);
        enemy.attack(this._fighter);
      }
    });
    return super.fight();
  }
}