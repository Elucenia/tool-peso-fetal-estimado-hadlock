<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · pt-BR · no clinical/professional/rights approval -->

# Peso fetal estimado (Hadlock)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/peso-fetal-estimado-hadlock)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Circunferência cefálica (CC)

`cc`

cm · intervalo: 8–40

### Circunferência abdominal (CA)

`ca`

cm · intervalo: 8–45

### Comprimento do fêmur (CF)

`cf`

cm · intervalo: 1–9

### Idade gestacional: semanas (opcional, para o percentil)

`ig_sem`

semanas · opcional · intervalo: 20–42

### Idade gestacional: dias

`ig_dias`

dias · opcional · intervalo: 0–6

## Edição do método

Hadlock 1985 HC/AC/FL variante 3 medidas; curva Hadlock 1991 lognormalmediana, DP 12,7% aproximaçãolocal

## Fórmula documentada

Hadlock (1985), com CC, CA e CF em cm: log10(PFE) = 1,326 − 0,00326 × CA × CF + 0,0107 × CC + 0,0438 × CA + 0,158 × CF.

Percentil (Hadlock 1991): peso mediano = e0,578 + 0,332 × IG − 0,00354 × IG² (IG em semanas), com desvio-padrão de 12,7% do peso mediano; o percentil vem do escore z na distribuição normal.

## Limites e população

A referência Hadlock 1985 avaliou modelos de peso fetal em 109 fetos, usando dimensões de cabeça, abdome e fêmur. Peso estimado não é uma medida direta e tem erro de predição; o 1DP de 7,5% relatado nesse estudo não deve ser confundido com parâmetros da curva de crescimento de 1991. Percentis e aproximações locais dependem de uma fonte/variante adicional, ainda não conferida integralmente nessa leitura.

## Referências

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
