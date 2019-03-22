export default class Hello {
  static helloWithName(fullName) {
    console.log('--> helloWithName called <--');
    return `hello ${fullName.firstName} ${fullName.lastName}!`;
  }

  static helloThere() {
    console.log('--> helloThere called!! <--');
    return 'hello there!';
  }
}
