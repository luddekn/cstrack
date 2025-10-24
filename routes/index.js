const express = require("express");
const router = express.Router();
const db = require("../models/index");

const ItemService = require("../services/ItemService");
const itemService = new ItemService(db);

router.get("/", async (req, res, next) => {
  try {
    const csItems = await itemService.getAll();
    if (csItems.length === 0) {
      return res.status(200).render("index", {
        title: "CSTrack",
        items: [],
        totalSpent: (0).toFixed(2),
        totalProfit: (0).toFixed(2),
      });
    }

    const items = await Promise.all(
      csItems.map(async (item) => {
        const url = new URL("https://steamcommunity.com/market/priceoverview/");
        const params = {
          appid: 730, // 730 is the appID for CS2
          currency: 9, // Currency=9 is NOK
          market_hash_name: item.itemName,
        };

        Object.entries(params).forEach(([key, value]) =>
          url.searchParams.set(key, value),
        );

        const apires = await fetch(url);
        const data = await apires.json();

        const rawprice = data.lowest_price.split(" ")[0];
        const currentPrice = parseFloat(rawprice.replace(",", "."));
        return {
          itemId: item.id,
          itemUrl: item.itemUrl,
          itemName: item.itemName,
          quantity: item.quantity,
          buyPrice: Number(item.buyPrice.toFixed(2)),
          currentPrice: Number(currentPrice.toFixed(2)),
          totalCost: Number((item.quantity * item.buyPrice).toFixed(2)),
          profit: Number(
            (item.quantity * (currentPrice - item.buyPrice)).toFixed(2),
          ),
        };
      }),
    );

    let totalSpent = 0;
    let totalProfit = 0;
    items.forEach((item) => {
      totalSpent += item.totalCost;
      totalProfit += item.profit;
    });

    return res.status(200).render("index", {
      title: "CSTrack",
      items: items,
      totalSpent: totalSpent.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
    });
  } catch (err) {
    console.log(err);
    res.status(500).render("error");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { itemUrl, quantity, buyPrice } = req.body;
    if (
      !itemUrl ||
      !itemUrl.includes("https://steamcommunity.com/market/listings/730/")
    ) {
      return res.redirect("/");
    }
    if (isNaN(quantity) || quantity <= 0) {
      return res.redirect("/");
    }
    if (isNaN(buyPrice) || buyPrice < 0) {
      return res.redirect("/");
    }

    const rawName = itemUrl.split("/").pop();
    const itemName = decodeURI(rawName);

    await itemService.addItem(itemUrl, itemName, quantity, buyPrice);
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).render("error");
  }
});

router.post("/delete/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.redirect("/");
    }

    const itemExist = await itemService.exist(id);
    if (!itemExist) {
      return res.redirect("/");
    }

    await itemService.deleteItem(id);
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).render("error");
  }
});

module.exports = router;
