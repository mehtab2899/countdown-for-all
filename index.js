const countdownForAll = (endingDate) => {
  let endTime = new Date(endingDate);
  let startTime = new Date();

  const totalSeconds = (endTime - startTime) / 1000;
  console.log(totalSeconds);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(
    `${days} days, ${hours} hour, ${minutes} minute, ${seconds} seconds`
  );
};

let endingDate = "28 oct 2021";

setInterval(() => {
  countdownForAll(endingDate);
}, 1000);

module.exports.countdownForAll = countdownForAll;
