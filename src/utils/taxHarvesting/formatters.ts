/* 
© 2026 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2026.
*/

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export const formatSignedCurrency = (value: number) =>
  `${value > 0 ? "+" : value < 0 ? "-" : ""}${formatCurrency(Math.abs(value))}`;

export const formatCompactAmount = (value: number) => {
  if (value === 0) {
    return "0";
  }

  if (Math.abs(value) >= 1) {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 4,
    }).format(value);
  }

  return value.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
};

export const formatFullAmount = (value: number) => {
  if (value === 0) {
    return "0";
  }

  return value.toString();
};
