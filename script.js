const Bundles = document.querySelectorAll(".bundles__tariff_price");

function handleSymbolChange() {
  const symbol = document.querySelector(
    ".bundles__tariff_price-symbol"
  ).innerText;
  let newSymbol = symbol;
  Bundles.forEach((bundle) => {
    const bundlePriceElem = bundle.querySelector(
      ".bundles__tariff_price-number"
    );
    switch (symbol) {
      case "$": {
        newSymbol = "₽";
        bundlePriceElem.innerText = parseInt(bundlePriceElem.innerText) * 100;
        break;
      }
      case "₽": {
        newSymbol = "$";
        bundlePriceElem.innerText = parseInt(bundlePriceElem.innerText) / 100;
        break;
      }
    }
    bundle.querySelector(".bundles__tariff_price-symbol").innerText = newSymbol;
  });
}
function handlePeriodChange() {
  const period = document.querySelector(
    ".bundles__tariff_price-period"
  ).innerText;
  let newPeriod = period;
  Bundles.forEach((bundle) => {
    const bundlePriceElem = bundle.querySelector(
      ".bundles__tariff_price-number"
    );
    switch (period) {
      case "/Months": {
        newPeriod = "/Day";
        bundlePriceElem.innerText = Math.round(
          parseInt(bundlePriceElem.innerText) / 30
        );
        break;
      }
      case "/Day": {
        newPeriod = "/Months";
        bundlePriceElem.innerText = Math.round(
          parseInt(bundlePriceElem.innerText) * 30
        );
        break;
      }
    }
    bundle.querySelector(".bundles__tariff_price-period").innerText = newPeriod;
  });
}

function manageBundleClick(e) {
  switch (e.target.dataset.type) {
    case "symbol":
      return handleSymbolChange();
    case "period":
      return handlePeriodChange();
    default:
      return;
  }
}

Bundles.forEach((bundle) =>
  bundle.addEventListener("click", manageBundleClick)
);

function toggleModalMenu() {
  document.querySelector(".header__nav").classList.toggle("open");
}
