import getProperties from "..";

test('object keys are not in alphabetical order', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const order = ["name", "level"];
  const result = {name: 'мечник', level: 2, attack: 80, defence: 40, health: 10};
  expect(getProperties(obj, order)).toEqual(result);
});

test('object keys are in alphabetical order', () => {
  const obj = {name: 'мечник', level: 2, attack: 80, defence: 40, health: 10};
  const order = ["name", "level"];
  const result = {name: 'мечник', level: 2, attack: 80, defence: 40, health: 10};
  expect(getProperties(obj, order)).toEqual(result);
});

test('several keys for sort', () => {
  const obj = {name: 'мечник', level: 2, attack: 80, defence: 40, health: 10};
  const order = ["name", "level", "defence"];
  const result = {name: 'мечник', level: 2, defence: 40, attack: 80, health: 10};
  expect(getProperties(obj, order)).toEqual(result);
});