import { useState, useEffect } from 'react';
import Styled from './styles';
// import dynamic from 'next/dynamic';
// import Clock from 'react-live-clock';
// import moment from 'moment';
import 'moment/locale/ko';
// const Clock = dynamic(() => import('react-live-clock'), { ssr: false ,});
//아직 어떤거 사용할지 고려 중

const CurrentTime = () => {
  // const [currentTime, setCurrentTime] = useState(null);
  
  // useEffect(() => {
  //   const timeId = setInterval(() => handleTick(), 1000);

  //   return () => {
  //     clearInterval(timeId);
  //   };
  // });

  // const handleTick = () => {
  //   setCurrentTime(moment().format('YYYY년 MM월 DD일 HH:mm:ss'));
  // };
  return (
    <>
      <Styled.TimeWrapper>
        {/* <Clock
          format={'YYYY년 MM월 DD일 HH:mm:ss'}
          ticking={true}
          timezone={'Asia/Seoul'}
          noSsr={true}
        /> */}
        {/* {currentTime} */}
      </Styled.TimeWrapper>
    </>
  );
};

export default CurrentTime;
