const search = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'John Smith') {
        resolve('Successful');
      }
      reject('User Not Found');
    }, 100);
  });
};

export default search;
