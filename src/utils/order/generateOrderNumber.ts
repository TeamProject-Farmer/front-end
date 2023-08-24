const generateOrderNumber = () => {
  const currentDate = new Date();
  const randomDigits = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');

  const orderNumber = `${currentDate.getFullYear()}${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}${randomDigits}`;

  return orderNumber;
};

export default generateOrderNumber;
