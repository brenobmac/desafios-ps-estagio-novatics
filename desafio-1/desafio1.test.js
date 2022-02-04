const { expect } = require('@jest/globals');
const uniqueListSort = require('./desafio1');

test("Tem como input uma lista de numeros. Retorna uma lista de numeros ordenada e sem duplicatas", () => {
  expect(uniqueListSort([8, 5, 10, 5, 2, 4, 4, 3])).toEqual([2, 3, 4, 5, 8, 10]);
});

