export default class Hello {
  static helloWithName(fullName) {
    console.log('hello with name being called...');
    return `hello ${fullName.firstName} ${fullName.lastName}!`;
  }

  static helloThere() {
    console.log('hello there being called');
    return 'hello there!';
  }
}
