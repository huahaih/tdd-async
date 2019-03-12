export default class Hello {
  static helloWithName(fullName) {
    return `hello ${fullName.firstName} ${fullName.lastName}!`;
  }

  static helloThere() {
    return 'hello there!';
  }
}
