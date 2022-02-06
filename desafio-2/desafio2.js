"use strict";

function validateSudoku(sudokuGame) {
  //Criação de arrays para as linhas e colunas que irao conter os set
  let linhas = [], colunas = [];
  //Criação do set para a tabela (sempre terá só 9 itens dentro e será resetado)
  let tabela = new Set();

  //Loop para criar sets para cada linha e coluna
  //No total sao 9 de cada, entao serao 9 sets contendo 9 itens cada
  for (let i = 0; i < sudokuGame.length; i++){
    linhas.push(new Set());
    colunas.push(new Set());
  }

  //Double loop para checar cada linha e coluna primeiro
  //Esse loop irá iterar primeiro por cada linha e depois por cada coluna
  //Caso ele encontre uma duplicata, retorna falso
  //C.C ele coloca o valor válido no set de linha e coluna
  for (let i = 0; i < sudokuGame.length; i++) {
    for(let j = 0; j < sudokuGame[i].length; j++) {
      let celulaAtual = sudokuGame[i][j];

      //Checa nas linhas
      if(celulaAtual === ".") continue; //Caso tenha um ponto na entrada como no exemplo
      if (linhas[i].has(celulaAtual)) return false;
      linhas[i].add(celulaAtual);

      //Checa nas colunas
      if(celulaAtual === ".") continue;
      if (colunas[i].has(celulaAtual)) return false;
      colunas[i].add(celulaAtual);
    }
  }

  //Agora e necessario checar as tabelas 3x3:
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      //Reseta a tabela
      tabela.clear();
      //a e b são novas variaveis para acompanhar os indices DENTRO das tabelas 3x3.
      //i e j serao usados para acompanhar os indices do sudoku como um todo
      for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
          let celulaAtual = sudokuGame[3*i+a][3*j+b]; //Salta de tabela em tabela
          if (celulaAtual === ".") continue;
          if (tabela.has(celulaAtual)) return false;
          tabela.add(celulaAtual);
        }
      }
    }
  }

  return true;
}

module.exports = validateSudoku;

