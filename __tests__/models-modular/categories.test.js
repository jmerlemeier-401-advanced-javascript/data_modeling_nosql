const Categories = require('../../models-modular/categories/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', (done) => {
    let newCategory = { name: 'Pip',description: "is a monster"}
    categories.create(newCategory)
      .then(result => {
        expect(result.name).toBe('Pip');
        done();
      })
      .catch(err => expect(err).not.toBeDefined());
  });

  it('can get() a category', () => {
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});