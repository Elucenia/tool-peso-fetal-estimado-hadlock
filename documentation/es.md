<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · es · no clinical/professional/rights approval -->

# Peso fetal estimado (Hadlock)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/peso-fetal-estimado-hadlock)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Circunferencia cefálica (CC)

`cc`

cm · intervalo: 8–40

### Circunferencia abdominal (CA)

`ca`

cm · intervalo: 8–45

### Longitud del fémur (LF)

`cf`

cm · intervalo: 1–9

### Edad gestacional: semanas (opcional, para el percentil)

`ig_sem`

semanas · opcional · intervalo: 20–42

### Edad gestacional: días

`ig_dias`

días · opcional · intervalo: 0–6

## Edición del método

Hadlock 1985 HC/AC/FL, 3 medidas; curva mediana lognormal Hadlock 1991; DE 12,7%, aproximación local

## Fórmula documentada

Hadlock (1985), HC, AC y FL en cm: log10(peso fetal estimado) = 1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL.

Percentil (Hadlock 1991): peso mediano = e0,578 + 0,332 × GA − 0,00354 × GA² (GA en semanas), con desviación estándar del 12,7% del peso mediano; percentil obtenido de la puntuación z de la distribución normal.

## Límites y población

La referencia Hadlock 1985 evaluó modelos de peso fetal en 109 fetos, utilizando dimensiones de cabeza, abdomen y fémur. El peso estimado no es una medición directa y tiene error de predicción; la 1 DE de 7,5% informada en ese estudio no debe confundirse con los parámetros de la curva de crecimiento de 1991. Los percentiles y las aproximaciones locales dependen de una fuente/variante adicional, aún no comprobada íntegramente en esta lectura.

## Referencias

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Comparar con la curva de crecimiento para la edad gestacional


### 2

Entre los percentiles 10 y 90: adecuado para la edad gestacional

| Detalles del resultado | |
| --- | --- |
| Peso mediano para 34s 0d (Hadlock 1991) | 2377 g |
| Percentil estimado | 18 |


### 3

Entre los percentiles 10 y 90: adecuado para la edad gestacional

| Detalles del resultado | |
| --- | --- |
| Peso mediano para 40s 0d (Hadlock 1991) | 3619 g |
| Percentil estimado | 56 |


### 4

Por debajo del percentil 10: pequeño para la edad gestacional

| Detalles del resultado | |
| --- | --- |
| Peso mediano para 34s 0d (Hadlock 1991) | 2377 g |
| Percentil estimado | < 1 |

Por debajo del percentil 3: por consenso de Delphi, es restricción del crecimiento fetal incluso sin Doppler alterado.

