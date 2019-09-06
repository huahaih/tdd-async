export default class Hello {
  static getFullNameString(fullName) {
    console.log('--> getFullNameString called <--');
    return `${fullName.firstName} ${fullName.lastName}`;
  }

  static helloThere(fullName) {
    const fullNameString = this.getFullNameString(fullName);
    console.log('--> helloThere called!! <--');
    return `hello there (${fullNameString})!`;
  }
}
