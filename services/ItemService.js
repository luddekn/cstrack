class ItemService {
  constructor(db) {
    this.Items = db.Items;
  }

  async getAll() {
    return this.Items.findAll({ where: {} });
  }
  async addItem(itemUrl, itemName, quantity, buyPrice) {
    return this.Items.create({
      itemUrl: itemUrl,
      itemName: itemName,
      quantity: quantity,
      buyPrice: buyPrice,
    });
  }
  async deleteItem(id) {
    return this.Items.destroy({ where: { id: id } });
  }
}

module.exports = ItemService;
