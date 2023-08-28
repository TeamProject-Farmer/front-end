const handleShipDay = () => {
  const d = new Date();
  const year = d.getFullYear(); // 년
  const month = d.getMonth(); // 월
  const day = d.getDate(); // 일

  const today = new Date(year, month, day +2);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let dayOfWeek = week[today.getDay()];

  const shipDay = `${today.getMonth() + 1}/${today.getDate()}(${dayOfWeek})`;

  return shipDay;
}

export default handleShipDay;