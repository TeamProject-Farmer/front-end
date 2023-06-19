// import { useState, useEffect } from 'react';
import Styled from './styles';

const CurrentTime = () => {
  // const [currentTime, setCurrentTime] = useState(null);

  // useEffect(() => {
  //   const timeId = setInterval(() => handleTick(), 1000);
  //   return () => {
  //     clearInterval(timeId);
  //   };
  // });
  // const handleTick = () => {
  //   setCurrentTime(new Date());
  // };
  return (
    <>
      <Styled.TimeWrapper> 
        {/* {currentTime && (
          <>
            <span>{currentTime.getFullYear()}년 &nbsp;</span>
            <span>{currentTime.getMonth() + 1}월 &nbsp;</span>
            <span>{currentTime.getDate()}일 &nbsp;</span>
            <span>{currentTime.toLocaleTimeString()}</span>
          </>
        )} */}time
      </Styled.TimeWrapper>
    </>
  );
};

export default CurrentTime;
