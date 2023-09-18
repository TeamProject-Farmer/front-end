import Clock from 'react-live-clock';
import styled from '@emotion/styled';

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

const Styled = {
  TimeWrapper: styled.div`
    color: #1a1c1e;
    font-size: 16px;
    /* 폰트 부분은 추후 여쭤봐야할 것 같음 */
    /* font-family: Spoqa Han Sans Neo; */ 
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.064px;
    margin-left: 6px;
  `,
};

export default CurrentTime;
