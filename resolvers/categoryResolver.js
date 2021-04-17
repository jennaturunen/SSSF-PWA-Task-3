import Category from '../models/category.js';

export default {
  Species: {
    category(parent) {
      console.log('categoryresolver, get category', parent);
      return Category.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: (parent, args) => {
      console.log('categoryresolver, addCategory new', args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
