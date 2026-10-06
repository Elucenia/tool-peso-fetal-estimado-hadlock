<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · fr · no clinical/professional/rights approval -->

# Poids fœtal estimé (Hadlock)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/peso-fetal-estimado-hadlock)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Périmètre crânien (PC)

`cc`

cm · intervalle: 8–40

### Périmètre abdominal (PA)

`ca`

cm · intervalle: 8–45

### Longueur fémorale (LF)

`cf`

cm · intervalle: 1–9

### Âge gestationnel : semaines (facultatif, pour le percentile)

`ig_sem`

semaines · facultatif · intervalle: 20–42

### Âge gestationnel: jours

`ig_dias`

jours · facultatif · intervalle: 0–6

## Édition de la méthode

Hadlock 1985 HC/AC/FL, 3 mesures ; médiane lognormale Hadlock 1991 ; écart-type 12,7 %, approximation locale

## Formule documentée

Hadlock (1985), HC, AC et FL en cm : log10(poids fœtal estimé) = 1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL.

Percentile (Hadlock 1991) : poids médian = e0,578 + 0,332 × GA − 0,00354 × GA² (GA en semaines), avec écart-type de 12,7% du poids médian ; percentile issu du score z de la distribution normale.

## Limites et population

Hadlock 1985 a évalué des modèles de poids fœtal chez 109 fœtus, avec des dimensions de la tête, de l’abdomen et du fémur. Le poids estimé n’est pas une mesure directe et comporte une erreur de prédiction ; l’écart-type (1 ET) de 7,5% rapporté dans cette étude ne doit pas être confondu avec les paramètres de la courbe de croissance de 1991. Les percentiles et approximations locales dépendent d’une source ou variante supplémentaire, non encore intégralement vérifiée lors de cette lecture.

## Références

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Comparer à la courbe de croissance pour l’âge gestationnel


### 2

Entre les percentiles 10 et 90 : adapté à l’âge gestationnel

| Détails du résultat | |
| --- | --- |
| Poids médian pour 34 s 0 j (Hadlock 1991) | 2377 g |
| Percentile estimé | 18 |


### 3

Entre les percentiles 10 et 90 : adapté à l’âge gestationnel

| Détails du résultat | |
| --- | --- |
| Poids médian pour 40 s 0 j (Hadlock 1991) | 3619 g |
| Percentile estimé | 56 |


### 4

En dessous du 10e percentile : petit pour l’âge gestationnel

| Détails du résultat | |
| --- | --- |
| Poids médian pour 34 s 0 j (Hadlock 1991) | 2377 g |
| Percentile estimé | < 1 |

En dessous du 3e percentile : selon le consensus Delphi, il s’agit d’un retard de croissance fœtale même sans Doppler anormal.

