
const currencyCountryCodes = {
  "AFN": "AFN", // Afghanistan
  "ALL": "AL", // Albania
  "DZD": "DZ", // Algeria
  "USD": "SD", // American Samoa, Ecuador, El Salvador
  "EUR": "UR", // Andorra, Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy
  "AOA": "AO", // Angola
  "XCD":  "DM", // Anguilla, Antigua and Barbuda, Dominica, Grenada
  "ARS": "AR", // Argentina
  "AMD": "AM", // Armenia
  "AWG": "AW", // Aruba
  "AUD": "AU", // Australia
  "AZN": "AZ", // Azerbaijan
  "BSD": "BS", // Bahamas
  "BHD": "BH", // Bahrain
  "BDT": "BD", // Bangladesh
  "BBD": "BB", // Barbados
  "BYN": "BY", // Belarus
  "BZD": "BZ", // Belize
  "XOF": "BF", // Benin, Burkina Faso, Côte d’Ivoire, Guinea-Bissau
  "BMD": "BM", // Bermuda
  "BTN": "BT", // Bhutan
  "BOB": "BO", // Bolivia
  "BAM": "BA", // Bosnia and Herzegovina
  "BWP": "BW", // Botswana
  "BRL": "BR", // Brazil
  "BND": "BN", // Brunei
  "BGN": "BG", // Bulgaria
  "BIF": "BI", // Burundi
  "KHR": "KH", // Cambodia
  "XAF": "CG", // Cameroon, Central African Republic, Chad, Congo (Brazzaville), Equatorial Guinea, Gabon
  "CAD": "CA", // Canada
  "CVE": "CV", // Cape Verde
  "KYD": "KY", // Cayman Islands
  "CLP": "CL", // Chile
  "CNY": "CN", // China
  "COP": "CO", // Colombia
  "KMF": "KM", // Comoros
  "CDF": "CD", // Congo (Kinshasa)
  "CRC": "CR", // Costa Rica
  "HRK": "HR", // Croatia
  "CUP": "CU", // Cuba
  "CZK": "CZ", // Czech Republic
  "DKK": "DK", // Denmark
  "DJF": "DJ", // Djibouti
  "DOP": "DO", // Dominican Republic
  "EGP": "EG", // Egypt
  "ERN": "ER", // Eritrea
  "ETB": "ET", // Ethiopia
  "FJD": "FJ", // Fiji
  "GMD": "GM", // Gambia
  "GEL": "GE", // Georgia
  "GHS": "GH", // Ghana
  "GTQ": "GT", // Guatemala
  "GNF": "GN", // Guinea
  "GYD": "GY", // Guyana
  "HTG": "HT", // Haiti
  "HNL": "HN", // Honduras
  "HKD": "HK", // Hong Kong
  "HUF": "HU", // Hungary
  "ISK": "IS", // Iceland
  "INR": "IN", // India
  "IDR": "ID", // Indonesia
  "IRR": "IR", // Iran
  "IQD": "IQ", // Iraq
  "ILS": "IL", // Israel
  "JMD": "JM", // Jamaica
  "JPY": "JP", // Japan
  "JOD": "JO", // Jordan
  "KZT": "KZ", // Kazakhstan
  "KES": "KE", // Kenya
  "KWD": "KW", // Kuwait
  "KGS": "KG", // Kyrgyzstan
  "LAK": "LA", // Laos
  "LBP": "LB", // Lebanon
  "LSL": "LS", // Lesotho
  "LRD": "LR", // Liberia
  "LYD": "LY", // Libya
  "CHF": "LI", // Liechtenstein
  "MOP": "MO", // Macau
  "MKD": "MK", // Macedonia
  "MGA": "MG", // Madagascar
  "MWK": "MW", // Malawi
  "MYR": "MY", // Malaysia
  "MVR": "MV", // Maldives
  "XOF": "ML", // Mali
  "MRO": "MR", // Mauritania
  "MUR": "MU", // Mauritius
  "MXN": "MX", // Mexico
  "MDL": "MD", // Moldova
  "MNT": "MN", // Mongolia
  "MAD": "MA", // Morocco
  "MZN": "MZ", // Mozambique
  "MMK": "MM", // Myanmar
  "NAD": "NA", // Namibia
  "NPR": "NP", // Nepal
  "ANG": "NL", // Netherlands Antilles
  "NZD": "NZ", // New Zealand
  "NIO": "NI", // Nicaragua
  "NGN": "NG", // Nigeria
  "KPW": "KP", // North Korea
  "NOK": "NO", // Norway
  "OMR": "OM", // Oman
  "PKR": "PK", // Pakistan
  "PAB": "PA", // Panama
  "PGK": "PG", // Papua New Guinea
  "PYG": "PY", // Paraguay
  "PEN": "PE", // Peru
  "PHP": "PH", // Philippines
  "PLN": "PL", // Poland
  "QAR": "QA", // Qatar
  "RON": "RO", // Romania
  "RUB": "RU", // Russia
  "RWF": "RW", // Rwanda
  "WST": "WS", // Samoa
  "STD": "ST", // São Tomé and Príncipe
  "SAR": "SA", // Saudi Arabia
  "RSD": "RS", // Serbia
  "SCR": "SC", // Seychelles
  "SLL": "SL", // Sierra Leone
  "SGD": "SG", // Singapore
  "SBD": "SB", // Solomon Islands
  "SOS": "SO", // Somalia
  "ZAR": "ZA", // South Africa
  "KRW": "KR", // South Korea
  "SSP": "SS", // South Sudan
  "LKR": "LK", // Sri Lanka
  "SDG": "SD", // Sudan
  "SRD": "SR", // Suriname
  "SZL": "SZ", // Swaziland
  "SEK": "SE", // Sweden
  "CHF": "CH", // Switzerland
  "SYP": "SY", // Syria
  "TWD": "TW", // Taiwan
  "TJS": "TJ", // Tajikistan
  "TZS": "TZ", // Tanzania
  "THB": "TH", // Thailand
  "TOP": "TO", // Tonga
  "TTD": "TT", // Trinidad and Tobago
  "TND": "TN", // Tunisia
  "TRY": "TR", // Turkey
  "TMT": "TM", // Turkmenistan
  "UGX": "UG", // Uganda
  "UAH": "UA", // Ukraine
  "AED": "AE", // United Arab Emirates
  "GBP": "GB", // United Kingdom
  "UYU": "UY", // Uruguay
  "UZS": "UZ", // Uzbekistan
  "VUV": "VU", // Vanuatu
  "VND": "VN", // Vietnam
  "YER": "YE", // Yemen
  "ZMW": "ZM", // Zambia
  "ZWL": "ZW"  // Zimbabwe
};
