const countdownForAll = (endingDate, startingDate) => {
  let endTime = new Date(endingDate);
  let startTime = new Date(startingDate);

  const totalSeconds = (endTime - startTime) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(
    `${days} days, ${hours} hour, ${minutes} minutes, ${seconds} seconds`
  );
};

setInterval(() => {
  countdownForAll();
}, 1000);

module.exports.countdownForAll = countdownForAll;
