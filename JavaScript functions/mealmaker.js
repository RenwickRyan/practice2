const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your Meal is ${appetizers.name}, ${mains.name}, & ${desserts.name} and the total price is ${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'cheese sticks', 7.00);
menu.addDishToCourse('appetizers', 'hot wings', 9.00);
menu.addDishToCourse('appetizers', 'french fries', 4.50);

menu.addDishToCourse('mains', 'steak', 14.00);
menu.addDishToCourse('mains', 'burger', 10.50);
menu.addDishToCourse('mains', 'chicken', 11.00);

menu.addDishToCourse('desserts', 'ice cream', 5.00);
menu.addDishToCourse('desserts', 'brownies', 8.00);
menu.addDishToCourse('desserts', 'cheesecake', 9.50);

const meal = menu.generateRandomMeal();

console.log(meal)
