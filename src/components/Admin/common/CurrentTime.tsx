import React, { useState, useEffect } from 'react';
import Styled from './styles';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  // const hours = String(currentTime.getHours()).padStart(2, '0');
  // const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  // const seconds = String(currentTime.getSeconds()).padStart(2, '0');

  useEffect(() => {
    const timeId = setInterval(() => handleTick(), 1000);

    return () => {
      clearInterval(timeId);
    };
  });

  const handleTick = () => {
    setCurrentTime(new Date());
  };
  return (
    <Styled.LayoutTime>
      <span>{currentTime.getFullYear()}년 &nbsp;</span>
      <span>{currentTime.getMonth() + 1}월 &nbsp;</span>
      <span>{currentTime.getDate()}일 &nbsp;</span>
      {/* 초까지 변경되는 코드도 넣었는데 render되는데 1초 이상 걸리면 error 창이 뜨는 것 같습니다. 
      돌아가는데 문제는 없지만 외관상 문제가 있다고 판단되어 주석처리 해놨습니다.
      추후 상의 해봐야할 것 같습니다. 
      혹시 몰라서 두가지 방법 다 해놨습니다. */}
      {/* <span>{new Date().toLocaleTimeString()}</span> */}
            {/* <span>
        {hours}:{minutes}:{seconds}
      </span> */}
      <span>{currentTime.toLocaleTimeString().slice(0, -3)}</span>

    </Styled.LayoutTime>
  );
};

export default CurrentTime;
