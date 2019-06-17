const createNewTransaction = (info, callback) => {
  console.log('--> createNewTransaction enter <--');

  let user = {
    name: info.name,
    accountType: 'chequing',
  };

  try {
    GeneralBank.debit(user, callback);
  } catch (err) {
    callback(err);
  }
};

class GeneralBank {
  static debit(user, callback) {
    console.log('--> GeneralBank: Initiating debit!! <--');
    // do something to simulate debiting to a bank
    callback();
  }
}

export { createNewTransaction, GeneralBank };
