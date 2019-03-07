const setupNewUser = (info, callback) => {
  let user = {
    name: info.name,
    nameLowerCase: info.name.toLowerCase(),
  };

  try {
    Database.save(user, callback);
  } catch (err) {
    callback(err);
  }
};

class Database {
  static save(user, callback) {
    console.log('---> initiating a database save!!');
    // do something to simulate saving to a database
    user.name = user.name;
    callback();
  }
}

export { setupNewUser, Database };
