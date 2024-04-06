import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

  getTotalCost(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    const totalCost = this.getTotalCost();
    return totalCost - (totalCost * discount);
  }

  removeItemById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}
