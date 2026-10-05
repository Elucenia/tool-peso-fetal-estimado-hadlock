<!-- ELUCENIA technical documentation · peso-fetal-estimado-hadlock · zh · no clinical/professional/rights approval -->

# 估算胎儿体重（Hadlock）

[条件、来源与许可](https://elucenia.org/zh/tools/peso-fetal-estimado-hadlock)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 头围

`cc`

cm · 范围: 8–40

### 腹围

`ca`

cm · 范围: 8–45

### 股骨长

`cf`

cm · 范围: 1–9

### 胎龄：周 （可选，用于百分位）

`ig_sem`

周 · 选填 · 范围: 20–42

### 胎龄：天

`ig_dias`

天 · 选填 · 范围: 0–6

## 方法版本

Hadlock 1985 HC/AC/FL三测量法；Hadlock 1991对数正态中位曲线；标准差12.7%，本地近似

## 已记录的公式

Hadlock（1985），HC、AC、FL以cm计： log10(估计胎重) = 1.326 − 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL.

百分位（Hadlock 1991）： 中位体重 = e0.578 + 0.332 × GA − 0.00354 × GA² (GA以周计), 标准差为中位体重的12.7%；百分位由正态分布z评分得出。

## 限制与适用人群

Hadlock 1985参考文献在109个胎儿中评估胎儿体重模型，使用头部、腹部和股骨尺寸。估计体重不是直接测量，存在预测误差；该研究报告的1个标准差为7.5%，不能与1991年生长曲线参数混淆。本地百分位及近似需要另一来源或变体支持，而本次阅读尚未完整核对该来源。

## 参考文献

- [Hadlock FP et al. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol, 1985.](https://doi.org/10.1016/0002-9378(85)90298-4)

- [Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology, 1991.](https://doi.org/10.1148/radiology.181.1.1887021)

- [Gordijn SJ et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol, 2016.](https://doi.org/10.1002/uog.15884)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
