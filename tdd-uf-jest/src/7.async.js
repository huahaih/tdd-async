export const login = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'John Smith') {
        resolve('Successful');
      }
      reject('User Not Found');
    }, 100);
  });
};

export const loginAndGetMessageFromServer = (user, messageFromServer) => {
  login(user).then(message => messageFromServer(message));
};
