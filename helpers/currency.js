const currency = require("currency.js");

function getPrice(rawPrice) {
  let currentPrice = 0;
  const currentCurrency = process.env.STEAM_CURRENCY;

  switch (currentCurrency) {
    case "1": // USD - United States Dollar
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "2": // GBP - United Kingdom Pound
      currentPrice = currency(rawPrice, {
        symbol: "£",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "3": // EUR - European Union Euro
      currentPrice = currency(rawPrice, {
        symbol: "€",
        decimal: ",",
        separator: " ",
      }).value;
      break;
    case "4": // CHF - Swiss Francs
      currentPrice = currency(rawPrice, {
        symbol: "CHF",
        decimal: ".",
        separator: " ",
      }).value;
      break;
    case "5": // RUB - Russian Rouble
      currentPrice = currency(rawPrice, {
        symbol: "₽",
        decimal: ",",
        separator: "",
      }).value;
      break;
    case "6": // PLN - Polish Złoty
      currentPrice = currency(rawPrice, {
        symbol: "zł",
        decimal: ",",
        separator: " ",
      }).value;
      break;
    case "7": // BRL - Brazilian Reals
      currentPrice = currency(rawPrice, {
        symbol: "R$",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "8": // JPY - Japanese Yen
      currentPrice = currency(rawPrice, {
        symbol: "¥",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "9": // NOK - Norwegian Krone
      currentPrice = currency(rawPrice, {
        symbol: "kr",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "10": // IDR - Indonesian Rupiah
      currentPrice = currency(rawPrice, {
        symbol: "Rp",
        decimal: ".",
        separator: " ",
      }).value;
      break;
    case "11": // MYR - Malaysian Ringgit
      currentPrice = currency(rawPrice, {
        symbol: "RM",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "12": // PHP - Philippine Peso
      currentPrice = currency(rawPrice, {
        symbol: "₱",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "13": // SGD - Singapore Dollar
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "14": // THB - Thai Baht
      currentPrice = currency(rawPrice, {
        symbol: "฿",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "15": // VND - Vietnamese Dong
      currentPrice = currency(rawPrice, {
        symbol: "₫",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "16": // KRW - South Korean Won
      currentPrice = currency(rawPrice, {
        symbol: "₩",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "18": // UAH - Ukrainian Hryvnia
      currentPrice = currency(rawPrice, {
        symbol: "₴",
        decimal: ",",
        separator: " ",
      }).value;
      break;
    case "19": // MXN - Mexican Peso
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "20": // CAD - Canadian Dollars
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "21": // AUD - Australian Dollars
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "22": // NZD - New Zealand Dollar
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "23": // CNY - Chinese Renminbi (yuan)
      currentPrice = currency(rawPrice, {
        symbol: "¥",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "24": // INR - Indian Rupee
      currentPrice = currency(rawPrice, {
        symbol: "₹",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "25": // CLP - Chilean Peso
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "27": // COP - Colombian Peso
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "28": // ZAR - South African Rand
      currentPrice = currency(rawPrice, {
        symbol: "R",
        decimal: ".",
        separator: " ",
      }).value;
      break;
    case "29": // HKD - Hong Kong Dollar
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "30": // TWD - New Taiwan Dollar
      currentPrice = currency(rawPrice, {
        symbol: "NT$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "31": // SAR - Saudi Riyal
      currentPrice = currency(rawPrice, {
        symbol: "ر.س",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "32": // AED - United Arab Emirates Dirham
      currentPrice = currency(rawPrice, {
        symbol: "AED",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "35": // ILS - Israeli New Shekel
      currentPrice = currency(rawPrice, {
        symbol: "₪",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "37": // KZT - Kazakhstani Tenge
      currentPrice = currency(rawPrice, {
        symbol: "₸",
        decimal: ",",
        separator: " ",
      }).value;
      break;
    case "38": // KWD - Kuwaiti Dinar
      currentPrice = currency(rawPrice, {
        symbol: "KD",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "39": // QAR - Qatari Riyal
      currentPrice = currency(rawPrice, {
        symbol: "QR",
        decimal: ".",
        separator: ",",
      }).value;
      break;
    case "40": // CRC - Costa Rican Colón
      currentPrice = currency(rawPrice, {
        symbol: "₡",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    case "41": // UYU - Uruguayan Peso
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ",",
        separator: ".",
      }).value;
      break;
    default:
      currentPrice = currency(rawPrice, {
        symbol: "$",
        decimal: ".",
        separator: ",",
      }).value;
      break;
  }

  return currentPrice;
}

module.exports = getPrice;
