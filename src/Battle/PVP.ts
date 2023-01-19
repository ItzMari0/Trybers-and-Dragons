import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighterA: Fighter;
  private _fighterB: Fighter;

  constructor(fighterA: Fighter, fighterB: Fighter) {
    super(fighterA);
    this._fighterA = fighterA;
    this._fighterB = fighterB; 
  }

  fight(): number {
    if (this._fighterA.lifePoints > 0 && this._fighterB.lifePoints > 0) {
      this._fighterA.attack(this._fighterB);
      this._fighterB.attack(this._fighterA);
    }
    return super.fight();
  }
}