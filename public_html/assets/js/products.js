// ALLE Produkte direkt eingebettet (funktioniert lokal ohne fetch)
const products = [
  {
    "id": "0001",
    "label": "Adamin",
    "slides": [
      {"before": "shopimg/adamin.jpg", "after": "shopimg/adaminuv.jpg"},
      {"before": "shopimg/adamin2.jpg", "after": "shopimg/adamin2uv.jpg"},
      {"before": "shopimg/adamin3.jpg", "after": "shopimg/adamin3uv.jpg"}
    ],
    "price": "CHF 160.-",
    "minerals": "Adamin, Limonit",
    "fundort": "Oujela, Mexiko",
    "groesse": "6 cm x 5.5 cm x 2.5 cm",
    "gewicht": "75 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0001-large.html"
  },
  {
    "id": "0002",
    "label": "Calcit",
    "slides": [
      {"before": "shopimg/calcitsphalerit.jpg", "after": "shopimg/calcitsphalerituv.jpg"},
      {"before": "shopimg/calcitsphalerit2.jpg", "after": "shopimg/calcitsphalerit2uv.jpeg"},
     {"before": "shopimg/calcitsphalerit3.jpg", "after": "shopimg/calcitsphalerit3uv.jpg"}
    ],
    "price": "CHF 115.-",
    "minerals": "Calcit, Sphalerit",
    "fundort": "Trepca, Kosovo",
    "groesse": "7.5 cm x 5.5 cm x 4.5 cm",
    "gewicht": "234 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0002-large.html"
  },
  {
    "id": "0003",
    "label": "Wernerit / Rubin",
    "slides": [
      {"before": "shopimg/rubinwernerit.jpg", "after": "shopimg/rubinwernerituv.jpg"},
      {"before": "shopimg/rubinwernerit2.jpg", "after": "shopimg/rubinwernerit2uv.jpg"}
    ],
    "price": "CHF 255.-",
    "minerals": "Rubin, Wernerit, Phlogopit",
    "fundort": "Xinjang, China",
    "groesse": "8.5 cm x 5 cm x 2.5 cm",
    "gewicht": "179 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0003-large.html"
  },
  {
    "id": "0004",
    "label": "Fluorit mit Quarz",
    "slides": [
      {"before": "shopimg/fluoritquarz.jpg", "after": "shopimg/fluoritquarzuv.jpg"},
      {"before": "shopimg/fluoritquarz2.jpg", "after": "shopimg/fluoritquarz2uv.jpg"},
      {"before": "shopimg/fluoritquarz3.jpg", "after": "shopimg/fluoritquarz3uv.jpg"}
    ],
    "price": "CHF 165.-",
    "minerals": "Fluorit, Quarz",
    "fundort": "Pasto Bueno, Peru",
    "groesse": "6 cm x 4.5 cm x 4 cm",
    "gewicht": "122 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0004-large.html"
  },
  {
    "id": "0005",
    "label": "Pyrit mit Limonit",
    "slides": [
      {"before": "shopimg/pyrit.jpg", "after": "shopimg/pyrituv.jpg"},
      {"before": "shopimg/pyrit2.jpg", "after": "shopimg/pyrit2uv.jpg"},
      {"before": "shopimg/pyrit3.jpg", "after": "shopimg/pyrit3uv.jpg"}
    ],
    "price": "CHF 175.-",
    "minerals": "Pyrit, Limonit",
    "fundort": "Zacatecas, Mexiko",
    "groesse": "9.5 cm x 6.5 cm x 2 cm",
    "gewicht": "204 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0005-large.html"
  },
  {
    "id": "0006",
    "label": "Calcit auf Amethyst",
    "slides": [
      {"before": "shopimg/amethyst.jpg", "after": "shopimg/amethystuv.jpg"},
      {"before": "shopimg/amethyst2.jpg", "after": "shopimg/amethyst2uv.jpg"},

    ],
    "price": "CHF 325.-",
    "minerals": "Calcit auf Amethystrose",
    "fundort": "Rio Grande do Sul, Brasilien",
    "groesse": "11 cm x 10 cm x 3.5 cm",
    "gewicht": "1227 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0006-large.html"
  },
    {
    "id": "0007",
    "label": "Calcit Fluorit",
    "slides": [
      {"before": "shopimg/calcitfluorit.jpg", "after": "shopimg/calcitfluorituv.jpg"},
      {"before": "shopimg/calcitfluorit2.jpg", "after": "shopimg/calcitfluorit2uv.jpg"},
      {"before": "shopimg/calcitfluorit3.jpg", "after": "shopimg/calcitfluorit3uv.jpg"},
        {"before": "shopimg/calcitfluorit4.jpg", "after": "shopimg/calcitfluorit4uv.jpg"}
    ],
    "price": "CHF 365.-",
    "minerals": "Calcit mit Fluorit",
    "fundort": "El Amman, Marokko",
    "groesse": "8.5 cm x 6.5 cm x 5.5 cm",
    "gewicht": "193 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0007-large.html"
  },
    {
    "id": "0008",
    "label": "Adamin zweifarbig",
    "slides": [
      {"before": "shopimg/adaminweissgruen.jpg", "after": "shopimg/adaminweissgruenuv.jpg"},
      {"before": "shopimg/adaminweissgruen2.jpg", "after": "shopimg/adaminweissgruen2uv.jpg"}
    ],
    "price": "CHF 415.-",
    "minerals": "Adamin Weiss und Adamin Grün",
    "fundort": "Oujela, Mexiko",
    "groesse": "6.5 cm x 4.5 cm x 2.5 cm",
    "gewicht": "97 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0008-large.html"
  },
    {
    "id": "0009",
    "label": "Fluorit Petroleum",
    "slides": [
      {"before": "shopimg/fluoritpetroleum.jpg", "after": "shopimg/fluoritpetroleumuv.jpg"},
      {"before": "shopimg/fluoritpetroleum2.jpg", "after": "shopimg/fluoritpetroleum2uv.jpg"},
      {"before": "shopimg/fluoritpetroleum3.jpg", "after": "shopimg/fluoritpetroleum3uv.jpg"},

    ],
    "price": "CHF 395.-",
    "minerals": "Fluorit mit Petroleum Inklusionen",
    "fundort": "China",
    "groesse": "4.5 cm x 3 cm x 2 cm",
    "gewicht": "17 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0009-large.html"
  },
    {
    "id": "0010",
    "label": "Fluorit auf Wolframit",
    "slides": [
      {"before": "shopimg/fluoritwolframit.jpg", "after": "shopimg/fluoritwolframituv.jpg"},
      {"before": "shopimg/fluoritwolframit2.jpg", "after": "shopimg/fluoritwolframit2uv.jpg"},
      {"before": "shopimg/fluoritwolframit3.jpg", "after": "shopimg/fluoritwolframit3uv.jpg"},

    ],
    "price": "CHF 195.-",
    "minerals": "Fluorit auf Wolframit",
    "fundort": "China",
    "groesse": "7.5 cm x 7 cm x 3.5 cm",
    "gewicht": "193 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0010-large.html"
  },
    {
    "id": "0011",
    "label": "Troostit mit Sphalerit",
    "slides": [
      {"before": "shopimg/troostit.jpg", "after": "shopimg/troostituv.jpg"},
      {"before": "shopimg/troostit2.jpg", "after": "shopimg/troostit2uv.jpg"},
      {"before": "shopimg/troostit3.jpg", "after": "shopimg/troostit3uv.jpg"},

    ],
    "price": "Not for Sale",
    "minerals": "Troostit mit Sphalerit",
    "fundort": "Sterling Hill, USA",
    "groesse": "2 cm x 2 cm x 2 cm",
    "gewicht": "9 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0011-large.html"
  }
    ,
    {
    "id": "0012",
    "label": "Morganit",
    "slides": [
      {"before": "shopimg/morganit.jpg", "after": "shopimg/morganituv.jpg"},
      {"before": "shopimg/morganit2.jpg", "after": "shopimg/morganit2uv.jpg"},
      {"before": "shopimg/morganit3.jpg", "after": "shopimg/morganit3uv.jpg"},

    ],
    "price": "CHF 390.-",
    "minerals": "Morganit mit Mica",
    "fundort": "Nangarhar, Afghanistan",
    "groesse": "8 cm x 5.5 cm x 2.5 cm",
    "gewicht": "186 g",
    "fluoreszenz": "365 nm",
    "large": "assets/fluoslider-0012-large.html"
  }
];





function createProductCard(product) {
  const productHTML = `
    <div class="col-4 col-6-medium col-12-small product-card">
      <div class="fluoslider-container">
        <div class="fluoslider-small fluoslider-frame" id="fluoslider-${product.id}">
          ${product.slides.map(slide => 
            `<div class="fluoslider-small-slide-data" data-before="${slide.before}" data-after="${slide.after}"></div>`
          ).join('')}
        </div>
      </div>
      
      <button class="product-details-toggle shop-btn" data-product="${product.id}" data-label="${product.label}">
        ${product.label} ▼
      </button>
      
      <div class="product-details" id="details-${product.id}">
        <ul>
          <li><strong>Preis:</strong> ${product.price}</li>
          <li><strong>Mineralien:</strong> ${product.minerals}</li>
          <li><strong>Fundort:</strong> ${product.fundort}</li>
          <li><strong>Grösse:</strong> ${product.groesse}</li>
          <li><strong>Gewicht:</strong> ${product.gewicht}</li>
          <li><strong>Fluoreszenz:</strong> ${product.fluoreszenz}</li>
          <li><strong>Artikelnummer:</strong> Nr. ${product.id}</li>
        </ul>
      </div>
      
      <a href="#" class="shop-btn shop-btn-zoom" data-fluoslider="${product.large}">
        <i class="fas fa-search-plus" aria-hidden="true"></i>
      </a>
      
      <div class="shop-buy-row">
        <a href="mailto:uv@fluomin.ch?subject=Bestellung%20Nr.%20${product.id}&body=Ich%20m%C3%B6chte%20gerne%20das%20Mineral%20${product.label}%20Nr.%20${product.id}%20kaufen" class="shop-btn shop-btn-buy">
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/41766172112?text=Ich%20m%C3%B6chte%20gerne%20das%20Mineral%20${product.label}%20Nr.%20${product.id}%20kaufen" class="shop-btn shop-btn-buy" target="_blank">
          <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  `;
  
  const shopContainer = document.querySelector('#shop .row');
  shopContainer.insertAdjacentHTML('beforeend', productHTML);
}

function loadProducts() {
  products.forEach(product => {
    createProductCard(product);
  });
}

// Laden wenn DOM bereit
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProducts);
} else {
  loadProducts();
}
