const countdownForAll = (options) => {
  let endingDate = new Date(options.endingDate);
  let startingDate = new Date(options.startingDate);

  const totalSeconds = (endingDate - startingDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
};

setInterval(() => {
  countdownForAll();
}, 1000);

module.exports.countdownForAll = countdownForAll;
