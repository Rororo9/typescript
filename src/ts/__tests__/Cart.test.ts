import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('добавление в корзину', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'The Avengers', 'Marvel', 2012, 1000));
  expect(cart.items.length).toBe(3);
});

test('общая сумма товаров в корзине', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'The Avengers', 'Marvel', 2012, 1000));
  expect(cart.getTotalCost()).toBe(3900);
});

test('общая сумма товаров в корзине со скидкой', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1015, 'The Avengers', 'Marvel', 2012, 1000));
  expect(cart.getTotalCostWithDiscount(0.1)).toBe(3510);
});

test('уаление товаров из корзины по id', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(1015, 'The Avengers', 'Marvel', 2012, 1000);
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  cart.removeItemById(1008);
  expect(cart.items.length).toBe(2);
});

