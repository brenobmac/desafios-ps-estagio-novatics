# Resolução dos desafios do processo seletivo de estágio na Novatics:
## Desafio 1 - Manipulando listas:

<details><summary>Como foi feita a manipulação:</summary>
<p>
  
O desafio 1 consistiu na criação de uma função capaz de ordenar e retirar as duplicatas de números presentes em uma lista, o qual teve como base de solução a criação de uma função chamda *uniqueListSort*.

Essa função pega essa lista e primeiramente ordena todos os itens presentes nela de forma crescente usando uma comparação numérica dentro do *.sort()*, os quais são armazenados em *sortedList*.

Posteriormente, ela converte a lista ordenada em um *set* para que possam ser retirados os números duplicados de dentro dela, é feita uma expansão de seus valores e finalmente eles são reformatados como uma lista na variável *sortedList* novamente.

Finalmente, a função retorna o valor final como uma lista ordenada numericamente de forma crescente e sem valores duplicados.
</p>
</details>

## Desafio 2 - Validando Sudoku:

<details><summary>Como foi feita a validação:</summary>
<p>
  
O desafio 2 consistiu na criação de um função capaz de dizer se um jogo de Sudoku era válido a partir de um array de arrays colocado na entrada, que teve como base de solução a criação de da função *validateSudoku*.
  
Primeiramente, foi escolhido iterar por cada uma das linhas e colunas para checar se há duplicatas presentes no jogo. Para isso,
foram criados dois arrays, um para as linhas e outro para as colunas, os quais irão conter 9 sets cada para validar cada uma das linhas e colunas presentes no jogo.
  
 
    let linhas = [], colunas = [];

    for (let i = 0; i < sudokuGame.length; i++){
      linhas.push(new Set());
      colunas.push(new Set());
    }


Para analisar a lógica por trás da iteração de linhas e colunas convém uma análise da segunite imagem, em que os números externos em azul, de 0 a 8, representa os valores de i (das linhas) e de j (das colunas):
                                          

![esquematico1desafio2](https://user-images.githubusercontent.com/28717383/152678624-76573d01-305e-409b-ab33-7aba9207dfaa.png)
                                          
  
A lógica por trás da iteração para linhas e colunas é bem direta. Um loop duplo em *i* e *j* é feito para acompanhar cada linha e cada coluna, levando em consideração como valor máximo a largura do array de entrada da função (para iterar em *i*) e a largura da linha (para iterar em *j*). A célula atual que está sendo analisada é armazenada na variável *celulaAtual*, a qual armazena o valor do array de input na posição *[i,j]*. Caso seja encontrado um "." na linha/coluna ele dá um *continue*, como se não houvesse um número colocado naquela posição. Caso seja encontrado uma duplicata, a função retorna *false*. Caso contrário, o novo valor é adicionado no set de linhas/colunas.
                                          
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
  

Agora que ja foi checado por duplicatas em cada linha e coluna, deve-se checar também por números duplicados em cada uma das 9 tabelas 3x3 do jogo. Como vamos analisar cada tabela separadamente, podemos criar um set que será resetado sempre que o loop de check recomeçar. Com isso, foi criado um set *tabela* para fazer essa análise.
 
Novamente, convém analisar uma imagem para melhor entender a lógica de iteração de tabelas:
                                              

![esquematico2desafio2](https://user-images.githubusercontent.com/28717383/152680917-f1fa80ec-025f-43b3-a540-2932aa8f4680.png)
                                              
                                            
A análise de cada tabela é um pouco diferente, já que devemos considerar cada uma delas como um corpo separado do jogo para checarmos por duplicatas.
                          
Nesse caso, foi feito um loop duplo de *i* e *j* indo de 0 até 2. Essas duas variáveis serão utilizadas para representar o primeiro índice de cada tabela do jogo (0, 3 e 6). Ainda dentro desse loop duplo, foi feito outro loop de *a* e *b*, que também vão de 0 até 2, mas que nesse caso servirão para iterar para cada célula de cada tabela do jogo.
                                              
Para que essa iteração seja possivel, podemos considerar a fórmula para checar os índices como *[3 x i + a]* e *[3 x j + b]* para cada análise da célula atual. Esse método funciona pois, quando *i = 0* e *j = 0* e multplicamos esses valores por 3 estamos analisando a primeira tabela (posição da tabela 0x0) do jogo iterando *a* e *b* de 0 até 2. Quando *i = 0* e *j = 1*, estamos analisando a segunda tabela (posição da tabela 0x1) do jogo iterando *a* e *b* de 0 até 2. Isso é feito até que checamos todas as nove tabelas presentes no jogo. Novamente usamos a variável *celulaAtual* para armazena a célula analisada.
                                              
                                              
![repreTabelas](https://user-images.githubusercontent.com/28717383/152682042-e2629ccb-ac20-4d09-a982-a17542701917.png)

                                              
![repreTabelas](https://user-images.githubusercontent.com/28717383/152682319-3aeeb98f-33c5-439a-ad73-e5a3418fa9bc.png)
                                              

Caso seja encontrado um número duplicado dentro da tabela, a função retorna um *false*. Caso haja um ".", ela continua a análise. Caso o número duplicado não esteja no set *tabela*, ele é adicionado. Sempre quando o loop reinicia precisamos também reiniciar a tabela.
                                              
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

                                
Finalmente, quando todos esses passos já foram feitos e não houve nenhum return de *false*, significa qu não foram encontrados números duplicados no jogo como um todo e a função retorna um *true*.
</p>
</details>
