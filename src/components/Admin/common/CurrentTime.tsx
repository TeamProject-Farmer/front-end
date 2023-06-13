import Styled from './styles';
import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

const CurrentTime = () => {
  return (
    <Styled.LayoutTime>
      <Clock
        format={'YYYY년 MM월 DD일 HH:mm:ss'}
        ticking={true}
        timezone={'Asia/Seoul'}
      />
    </Styled.LayoutTime>
  );
};

export default CurrentTime;
