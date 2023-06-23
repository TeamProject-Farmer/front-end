import Styled from './styles';
import Clock from 'react-live-clock';

const CurrentTime = () => {
  return (
    <>
      <Styled.TimeWrapper>
        <Clock
          format={'YYYY년 MM월 DD일 HH:mm:ss'}
          ticking={true}
          timezone={'Asia/Seoul'}
          noSsr={true}
        />
      </Styled.TimeWrapper>
    </>
  );
};

export default CurrentTime;
