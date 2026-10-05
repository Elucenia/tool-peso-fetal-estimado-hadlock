<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · ja · no clinical/professional/rights approval -->

# 推定胎児体重（Hadlock）

[条件・出典・許諾](https://elucenia.org/ja/tools/peso-fetal-estimado-hadlock)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 頭囲

`cc`

cm · 範囲: 8–40

### 腹囲

`ca`

cm · 範囲: 8–45

### 大腿骨長

`cf`

cm · 範囲: 1–9

### 在胎期間：週 （任意、パーセンタイル用）

`ig_sem`

週 · 任意 · 範囲: 20–42

### 在胎期間：日

`ig_dias`

日 · 任意 · 範囲: 0–6

## 方法の版

Hadlock 1985 HC/AC/FLの3計測、Hadlock 1991対数正規中央値曲線、SD 12.7%、ローカル近似

## 記載された計算式

Hadlock（1985）、HC・AC・FLはcm： log10(推定胎重) = 1.326 − 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL.

パーセンタイル（Hadlock 1991）： 体重中央値 = e0.578 + 0.332 × GA − 0.00354 × GA² (GAは週数), 標準偏差は体重中央値の12.7%。正規分布のzスコアからパーセンタイルを求めます。

## 限界・対象集団

Hadlock 1985の文献は、109胎児で頭部・腹部・大腿骨の寸法を使い、胎児体重のモデルを評価しました。推定体重は直接測定ではなく、予測誤差があります。この研究で報告された1標準偏差の7.5%を、1991年の成長曲線のパラメータと混同してはいけません。パーセンタイルとローカルの近似には追加の出典・変法が必要ですが、今回の読解ではその全体をまだ確認していません。

## 参考文献

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
