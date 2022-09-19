export const dateFormat = (dt) => {
  const milliseconds = dt * 1000;

  let myDate = new Date(milliseconds);

  let date = myDate.toLocaleString('en-GB').split(',')[0];

  let day = myDate.toLocaleString('en-US', { weekday: 'long' });

  return { date, day };
};
