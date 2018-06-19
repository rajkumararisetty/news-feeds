export const postTimeCalculator = (postTime) => {
  let timeDifference = (((Date.now() - postTime)/1000)/60).toFixed(0);
  if (timeDifference >= 60) {
    timeDifference = (timeDifference/60).toFixed(0);
    if(timeDifference >= 24) {
      timeDifference = (timeDifference/24).toFixed(0);
      return `${timeDifference} days`
    }
    return `${timeDifference} hours`
  }
  return `${timeDifference} mins`;
};
