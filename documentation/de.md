<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · de · no clinical/professional/rights approval -->

# Geschätztes fetales Gewicht (Hadlock)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/peso-fetal-estimado-hadlock)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Kopfumfang (KU)

`cc`

cm · Bereich: 8–40

### Abdominalumfang (AU)

`ca`

cm · Bereich: 8–45

### Femurlänge (FL)

`cf`

cm · Bereich: 1–9

### Gestationsalter: Wochen (optional, für die Perzentile)

`ig_sem`

Wochen · optional · Bereich: 20–42

### Gestationsalter: Tage

`ig_dias`

Tage · optional · Bereich: 0–6

## Fassung der Methode

Hadlock 1985 HC/AC/FL, 3 Maße; lognormale Mediankurve Hadlock 1991; SD 12,7%, lokale Näherung

## Dokumentierte Formel

Hadlock (1985), HC, AC und FL in cm: log10(geschätztes Fetalgewicht) = 1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL.

Perzentile (Hadlock 1991): Mediangewicht = e0,578 + 0,332 × GA − 0,00354 × GA² (GA in Wochen), mit Standardabweichung 12,7% des Medianwerts; Perzentile aus dem z-Wert der Normalverteilung.

## Grenzen und Population

Hadlock 1985 untersuchte fetale Gewichtsmodelle bei 109 Feten anhand von Kopf-, Bauch- und Femurabmessungen. Geschätztes Gewicht ist keine direkte Messung und hat Vorhersagefehler; die in dieser Studie berichtete 1-SD von 7,5% darf nicht mit Parametern der Wachstumskurve von 1991 verwechselt werden. Perzentile und lokale Näherungen hängen von einer zusätzlichen, bei dieser Lektüre noch nicht vollständig geprüften Quelle oder Variante ab.

## Referenzen

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Mit der Wachstumskurve für das Gestationsalter vergleichen


### 2

Zwischen dem 10. und 90. Perzentil: angemessen für das Gestationsalter

| Ergebnisdetails | |
| --- | --- |
| Medianes Gewicht für 34 SSW 0 T (Hadlock 1991) | 2377 g |
| Geschätztes Perzentil | 18 |


### 3

Zwischen dem 10. und 90. Perzentil: angemessen für das Gestationsalter

| Ergebnisdetails | |
| --- | --- |
| Medianes Gewicht für 40 SSW 0 T (Hadlock 1991) | 3619 g |
| Geschätztes Perzentil | 56 |


### 4

Unterhalb des 10. Perzentils: klein für das Gestationsalter

| Ergebnisdetails | |
| --- | --- |
| Medianes Gewicht für 34 SSW 0 T (Hadlock 1991) | 2377 g |
| Geschätztes Perzentil | < 1 |

Unterhalb des 3. Perzentils: nach Delphi-Konsens ist dies eine fetale Wachstumsrestriktion, auch ohne auffälligen Doppler.

