const setupNewUser = (info, callback) => {
  console.log('--> setupNewUser: function called <--');
  let user = {
    name: info.name,
    status: 'active',
  };

  try {
    Database.save(user, callback);
  } catch (err) {
    callback(err);
  }
};

class Database {
  static save(user, callback) {
    console.log('--> Database: Initiating save!! <--');
    // do something to simulate saving to a database
    callback();
  }
}

export { setupNewUser, Database };
