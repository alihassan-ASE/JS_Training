//Simple Class Declration

class className{
    // now you can add what you want
}
// to call that class we need an instance of class (instance means an object of class)
new className(); // Instance of Class 


//class Expression declration and using constructor 

const MyClass = class MyClass1 {
    constructor() {
        //MyClass and MyClass1 points to same class in body
      this.myField = "foo";
    }
}
//   new MyClass1(); //this is undefined outside the body
new MyClass();

// Static property
class Color {
    static isValid(r, g, b) {
      return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    }
  }
// new Color().isValid(255, 0, 0) // is Valid is static and not accessible with instance 
  Color.isValid(255, 0, 0); // true
  Color.isValid(1000, 0, 0); // false