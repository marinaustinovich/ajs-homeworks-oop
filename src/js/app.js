import Bowerman from './Bowmanv';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

export default function () {
  return [
    new Bowerman('Bowerman'),
    new Swordsman('Swordsman'),
    new Magician('Magician'),
    new Daemon('Daemon'),
    new Undead('Undead'),
    new Zombie('Zombie'),
  ];
}
