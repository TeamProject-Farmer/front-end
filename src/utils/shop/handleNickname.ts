const handleNickname = (str: string) => {
  let originStr = str;
  let maskingStr = '';
  let strLength = originStr.length;
  if (strLength < 3) maskingStr = originStr.replace(/(?<=.{1})./gi, '*');
  else maskingStr = originStr.replace(/(?<=.{2})./gi, '*');

  return maskingStr;
};

export default handleNickname