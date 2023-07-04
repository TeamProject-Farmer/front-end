import styled from '@emotion/styled';
import theme from '@styles/theme';
import Footer from '@components/Home/Footer';

const Shop = () => {
  const Add1: string = '식물 키우기 어려우시죠?';
  const Add2: string = '내 반려식물을 등록하고 관리해보세요.';
  return (
    <Styled.Wrapper>
      {/* header, footer, category 부분은 홈 부분과 겹쳐서 여쭤보고 진행하면 좋을 것 같음 */}
      <Styled.EventWrapper>
        <Styled.SmallEvent>
          <div>
            <span>{Add1}</span>
            <span>{Add2}</span>
          </div>
        </Styled.SmallEvent>
        <Styled.NormalEvent>이벤트 페이지</Styled.NormalEvent>
        <Styled.NormalEvent>이벤트 페이지</Styled.NormalEvent>
      </Styled.EventWrapper>
      <Footer />
    </Styled.Wrapper>
  );
};

// 겹치는 부분이 많다면 style 파일을 만들어서 관리하는게 나아보임
const Styled = {
  Wrapper: styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
  `,
  EventWrapper: styled.div`
    width: 100%;
    height: 1351px;
    padding: 45px 363px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid  ${theme.colors.black};
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      background: #d9d9d9;
      margin: 25px 0;
    }
  `,
  SmallEvent: styled.div`
    height: 226px;
    & > div {
      display: flex;
      flex-direction: column;
      text-align: left;
      & > span {
        color: #000;
        font-size: 25px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      & > span:last-child {
        font-weight: 700;
      }
    }
  `,
  NormalEvent: styled.div`
    height: 330px;
    font-size: 64px;
    font-weight: 700;
  `,
};

export default Shop;
