<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · it · no clinical/professional/rights approval -->

# Peso fetale stimato (Hadlock)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/peso-fetal-estimado-hadlock)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Circonferenza cranica (CC)

`cc`

cm · intervallo: 8–40

### Circonferenza addominale (CA)

`ca`

cm · intervallo: 8–45

### Lunghezza del femore (LF)

`cf`

cm · intervallo: 1–9

### Età gestazionale: settimane (facoltativo, per il percentile)

`ig_sem`

settimane · facoltativo · intervallo: 20–42

### Età gestazionale: giorni

`ig_dias`

giorni · facoltativo · intervallo: 0–6

## Edizione del metodo

Hadlock 1985 HC/AC/FL, 3 misure; mediana lognormale Hadlock 1991; DS 12,7%, approssimazione locale

## Formula documentata

Hadlock (1985), HC, AC e FL in cm: log10(peso fetale stimato) = 1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL.

Percentile (Hadlock 1991): peso mediano = e0,578 + 0,332 × GA − 0,00354 × GA² (GA in settimane), con deviazione standard 12,7% del peso mediano; percentile dallo z-score della distribuzione normale.

## Limiti e popolazione

La fonte Hadlock 1985 ha valutato modelli di peso fetale in 109 feti, usando dimensioni di testa, addome e femore. Il peso stimato non è una misura diretta e presenta un errore di previsione; la 1 DS del 7,5% riportata nello studio non deve essere confusa con i parametri della curva di crescita del 1991. Percentili e approssimazioni locali dipendono da una fonte/variante aggiuntiva, non ancora verificata integralmente in questa lettura.

## Riferimenti

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
