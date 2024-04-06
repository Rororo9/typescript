import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly director: string,
    readonly year: number,
    readonly price: number,
  ) {}
}
