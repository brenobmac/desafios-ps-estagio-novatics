# Resolução dos desafios do processo seletivo de estágio na Novatics:
## Desafio 1 - Manipulando listas:

<details><summary>Como foi feita a manipulação:</summary>
<p>
  
O desafio 1 consistiu na criação de uma função capaz de ordenar e retirar as duplicatas de números presentes em uma lista, o qual teve como base de solução a criação de uma função chamda uniqueListSort.

Essa função pega essa lista e primeiramente ordena todos os itens presentes nela de forma crescente usando uma comparação numérica dentro do *.sort()*, os quais são armazenados em *sortedList*.

Posteriormente, ela converte a lista ordenada em um *set* para que possam ser retirados os números duplicados de dentro dela, é feita uma expansão de seus valores e finalmente eles são reformatados como uma lista na variável *sortedList* novamente.

Finalmente, a função retorna o valor final como uma lista ordenada numericamente e sem valores duplicados.
</p>
</details>
