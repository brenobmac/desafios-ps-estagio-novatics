"use strict";

function uniqueListSort(inputList) {

  //Ordena a lista numericamente (crescente) por comparação
  let sortedList = inputList.sort((a,b) => a - b);
  //Cria um set da lista ordenada, expande esse set e o define  como uma lista,
  //gerando um lista ordenada sem duplicatas
  sortedList = [...(new Set(sortedList))];
  //Retorna o set como uma lista ordenada
  return sortedList;

}

console.log(uniqueListSort([8, 5, 10, 5, 2, 4, 4, 3]));

module.exports = uniqueListSort;

