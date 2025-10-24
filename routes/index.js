var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const url = new URL("https://steamcommunity.com/market/priceoverview/");
    const params = {
      appid: 730,
      currency: 9,
      market_hash_name: "Recoil Case",
    };

    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.set(key, value),
    );

    const itemName = "Recoil Case";
    let currentPrice = 0.0;
    const apires = await fetch(url)
      .then((api) => api.json())
      .then((apires) => {
        const rawprice = apires.lowest_price.split(" ")[0];
        const price = parseFloat(rawprice.replace(",", "."));
        currentPrice = price;
      });

    res.render("index", {
      title: "Express",
      item: itemName,
      price: currentPrice,
    });
  } catch (err) {}
});

router.post("/", async (req, res, next) => {
  try {
  } catch (err) {}
});

module.exports = router;
