import { useState, useEffect } from 'react';
import Styled from './styles';
import moment from 'moment';
import 'moment/locale/ko';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const timeId = setInterval(() => handleTick(), 1000);

    return () => {
      clearInterval(timeId);
    };
  });

  const handleTick = () => {
    setCurrentTime(moment().format('YYYY년 MM월 DD일 HH:mm:ss'));
  };
  return (
    <>
      <Styled.TimeWrapper>
        {currentTime}
      </Styled.TimeWrapper>
    </>
  );
};

export default CurrentTime;
