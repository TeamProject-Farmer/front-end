import styled from '@emotion/styled';

const Styled = {
  //헤더와 푸터 width를 사이즈를 픽셀로 하기보다는 100%로 설정해주시는건 어떨까요?
  //화면에서 헤더와 푸터 부분만 덩그러니 떠있는 것 같아서 바꾸는게 좋을 것 같습니다!
  Wrapper: styled.div`
    width: 1920px;
  `,
  Header: styled.header`
    padding: 0 400px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Utils: styled.ul`
    display: flex;
    gap: 20px;
  `,
};

export default Styled;
