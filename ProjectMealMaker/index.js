const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers () {
      return this._course.appetizers;
    },
    set appetizers(appetizers) {
      return this._course.appetizers = appetizers;
    },
    get mains() {
      return this._course.mains;
    },
    set mains(mains) {
      return this._course.mains = mains;
    },
    get desserts() {
      return this._course.desserts;
    },
    set desserts(desserts){
      return this._course.desserts = desserts;
    },
    get courses() {
      return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
      };
    },
    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
      const dishes = this._courses[courseName];
      const randomeIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomeIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `You have choosen ${appetizers.name}, ${mains.name}, ${desserts.name} and the total price is $${totalPrice} `;
    }
  };
  
  
  menu.addDishToCourse('appetizers','Ceasar Salad', 4.25);
  menu.addDishToCourse('appetizers','Grilled Shrimp', 3.33);
  menu.addDishToCourse('appetizers','Muchroom Soup', 2.9);
  
  menu.addDishToCourse('mains','T-Bone Steak', 10.65);
  menu.addDishToCourse('mains','Salmon Steak', 9.95);
  menu.addDishToCourse('mains','Vegetable Rice', 9.95)
  
  menu.addDishToCourse('desserts','Tiramusi Cake', 3.50);
  menu.addDishToCourse('desserts','Baklava',2.88);
  menu.addDishToCourse('desserts','Assorted Ice-cream',2.80);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  