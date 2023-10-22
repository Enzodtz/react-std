import { InlineMath, BlockMath } from "react-katex";
import { Expression, Fraction, toTex } from "algebra.js";

function generateBaseFormula() {
  let exp = "";
  exp += "\\sigma";
  exp += " = ";
  exp += "\\frac{1}{n(n-1)}\\cdot";
  exp += "\\sum_{i}(x_i - \\bar{X})^{2}";

  return exp;
}

let baseFormula = generateBaseFormula();

function generateFormula1(values: number[]) {
  let n = values.length;
  let mean = values.reduce((a, b) => a + b, 0) / n;

  let exp = "";
  exp += "\\sigma";
  exp += " = ";
  exp += `\\frac{1}{${n}(${n}-1)}\\cdot`;
  exp += `\\sum_{i}(x_i - ${mean})^{2}`;

  return exp;
}

function generateFormula2(values: number[]) {
  let n = values.length;
  let mean = values.reduce((a, b) => a + b, 0) / n;

  let n_x_n_1 = n * (n - 1);

  let exp = "";
  exp += "\\sigma";
  exp += " = ";
  exp += `\\frac{1}{${n_x_n_1}}`;
  exp += " \\cdot (";

  values.forEach((v, i) => {
    exp += `(${v} - ${mean})^{2}`;

    if (i != n - 1) {
      exp += " + ";
    }
  });

  exp += ")";

  return exp;
}

function generateFormula3(values: number[]) {
  let n = values.length;
  let mean = values.reduce((a, b) => a + b, 0) / n;

  let n_x_n_1 = n * (n - 1);

  let exp = "";
  exp += "\\sigma";
  exp += " = ";
  exp += `\\frac{1}{${n_x_n_1}}`;

  let sum = 0;
  values.forEach((v, i) => {
    sum += (v - mean) ** 2;
  });

  exp += `\\cdot ${sum}`;
  return exp;
}

function generateFormula4(values: number[]) {
  let n = values.length;
  let mean = values.reduce((a, b) => a + b, 0) / n;

  let n_x_n_1 = n * (n - 1);

  let exp = "";
  exp += "\\sigma";
  exp += " = ";

  let sum = 0;
  values.forEach((v, i) => {
    sum += (v - mean) ** 2;
  });

  let std = sum / n_x_n_1;

  exp += `${std}`;

  return exp;
}

export default function Std({ values }: { values: number[] }) {
  let exps = [
    baseFormula,
    generateFormula1(values),
    generateFormula2(values),
    generateFormula3(values),
    generateFormula4(values),
  ];

  return (
    <>
      {exps.map((exp, i) => (
        <BlockMath math={exp} key={i} />
      ))}
    </>
  );
}
