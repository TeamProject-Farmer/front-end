const generateOrderNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const randomDigits = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');

  const orderNumber = `${year}${month}${day}${hours}${minutes}${seconds}${randomDigits}`;
  return orderNumber;
};

export default generateOrderNumber;
