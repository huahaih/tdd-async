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
    // do something
    user.name = user.name;
    callback();
  }
}

export { setupNewUser, Database };
