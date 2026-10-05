<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · en · no clinical/professional/rights approval -->

# Estimated fetal weight (Hadlock)

[conditions, sources and permissions](https://elucenia.org/en/tools/peso-fetal-estimado-hadlock)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Head circumference (HC)

`cc`

cm · range: 8–40

### Abdominal circumference (AC)

`ca`

cm · range: 8–45

### Femur length (FL)

`cf`

cm · range: 1–9

### Gestational age: weeks (optional, for percentile)

`ig_sem`

weeks · optional · range: 20–42

### Gestational age: days

`ig_dias`

days · optional · range: 0–6

## Method edition

Hadlock 1985 HC/AC/FL, 3-measure variant; Hadlock 1991 lognormal median curve; SD 12.7%, local approximation

## Documented formula

Hadlock (1985), HC, AC and FL in cm: log10(EFW) = 1.326 − 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL.

Percentile (Hadlock 1991): median weight = e0.578 + 0.332 × GA − 0.00354 × GA² (GA in weeks), with standard deviation 12.7% of median weight; the percentile is derived from the z-score of the normal distribution.

## Limits and population

The Hadlock 1985 reference assessed fetal weight models in 109 fetuses using head, abdominal and femur dimensions. Estimated weight is not a direct measurement and has prediction error; the 1 SD of 7.5% reported in that study must not be confused with parameters of the 1991 growth curve. Local percentiles and approximations depend on an additional source/variant not yet fully checked in this reading.

## References

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
