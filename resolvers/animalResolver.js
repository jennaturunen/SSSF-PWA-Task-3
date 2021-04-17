import Animal from '../models/animal.js';

export default {
  Query: {
    animals: (parent, args) => {
      return Animal.find();
    },
    animal: (parent, args) => {
      return Animal.findById(args.id);
    },
  },
  Mutation: {
    addAnimal: (parent, args, { user }) => {
      console.log('animalResolver addAnimal new', args, user);

      const newAnimal = new Animal(args);
      return newAnimal.save();
    },
    modifyAnimal: (parent, args) => {
      console.log('animalResolver modifyAnimal', args);
      // const data = {
      //   animalName: args.animalName,
      //   species: args.species
      // }
      return Animal.findByIdAndUpdate(args.id, args);
    },
  },
};
