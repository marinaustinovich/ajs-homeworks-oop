import Character from '../Character';

// Наборы недействительных параметров
const invalidParams = [
  [150, 'Bowerman', 25, 25],
  ['A', 'Bowerman', 25, 25],
  ['ElevenLetters', 'Bowerman', 25, 25],
  ['Bowerman', 'Bo', 25, 25],
  ['Bowerman', undefined, 25, 25],
  ['Bowerman', 150, 25, 25],
];

test.each(invalidParams)('should throw Error for invalid parameters %p', (name, type, attack, defence) => {
  expect(() => new Character(name, type, attack, defence)).toThrow('Передаются некорректные значения');
});

test('should create Character for name "String"', () => {
  const result = new Character('String', 'Bowerman', 25, 25);

  expect(result).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('should be Error for health <= 0 and level up', () => {
  expect(() => {
    const bowerman = new Character('Bowerman', 'Bowerman', 25, 25);
    bowerman.damage(135); // health drops to 0
    bowerman.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('should be Error for health <= 0 and damage', () => {
  expect(() => {
    const bowerman = new Character('Bowerman', 'Bowerman', 25, 25);
    bowerman.damage(135); // health drops to 0
    bowerman.damage(1);
  }).toThrow('Нельзя повысить уровень умершего');
});

test('should level, attack, defence, health up to 2, 30, 30, 100', () => {
  const user = new Character('String', 'Bowerman', 25, 25);
  user.levelUp();

  expect(user).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('should health down to 97', () => {
  const user = new Character('String', 'Bowerman', 25, 25);
  user.damage(4);

  expect(user).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 97,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
