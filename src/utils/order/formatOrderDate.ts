const formatOrderDate = (date: string) => {
  const regex = /(\d{4})-(\d{2})-(\d{2}).*/;
  const formattedDate = date.replace(regex, '$1.$2.$3');
  return formattedDate;
};

export default formatOrderDate;
