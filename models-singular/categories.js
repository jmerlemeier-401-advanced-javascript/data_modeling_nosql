'use strict';

// Where is our schema defined?
const CategoryModel = 
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      categoryModel.findById(_id, function (err, category){
        if (err) {
          console.error(err)
          return
        }
      //  categoryModel.findById(_id, function (err, category){
      })
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new CategoryModel(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;