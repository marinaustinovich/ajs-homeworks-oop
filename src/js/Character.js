export default class Character {
  constructor(name, type, attack, defence) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !types.includes(type)) {
      throw new Error('Передаются некорректные значения');
    }

    this.name = name;
    this.type = type;
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
    this.health = this.health > 0 ? this.health - points * (1 - this.defence / 100) : 0;
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }
}

