// Your code here

class Cat {
  constructor(name, gender){
    this.name = name
    this.gender = gender
  }
  speak()
{
  return `${this.name} says meow!`

}
}

class Dog {
  constructor(name, gender){
    this.name = name
    this.gender = gender
  }
  speak(){
  }

}

class Bird {
  constructor(name, gender){
    this.name = name
    this.gender = gender
  }
  speak(){
    return `${this.name} says woof!`
  }

}
