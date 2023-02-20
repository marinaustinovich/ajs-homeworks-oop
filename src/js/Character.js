export default class Character {
  constructor(name, type, attack, defence) {
    if ((typeof name !== 'string') || (name.length < 2) || (name.length > 10)) {
      throw new Error('Передаются некорректные значения');
    }

    this.name = name;

    switch (type) {
      case 'Bowerman':
        this.type = type;
        break;
      case 'Swordsman':
        this.type = type;
        break;
      case 'Magician':
        this.type = type;
        break;
      case 'Daemon':
        this.type = type;
        break;
      case 'Undead':
        this.type = type;
        break;
      case 'Zombie':
        this.type = type;
        break;
      default:
        throw new Error('Передаются некорректные значения');
    }
    // if (typeof type !== 'string') {
    //   throw new Error('Передаются некорректные значения');
    // }

    // this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }
}
