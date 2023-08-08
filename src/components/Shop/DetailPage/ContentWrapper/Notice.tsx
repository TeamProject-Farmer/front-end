import styled from '@emotion/styled';
import theme from '@styles/theme';

const Notice = () => {
  const shipList = [
    { id: 1, title: '배송', content: '일반택배' },
    {
      id: 2,
      title: '배송비',
      content: '3,500원 (70,000원 이상 구매시 무료배송)',
    },
    { id: 3, title: '도서산간 추가 배송비', content: '5,000원' },
    { id: 4, title: '배송불가 지역', content: '배송불가 지역이 없습니다.' },
  ];
  const exchangeList = [
    {
      id: 1,
      title: '반품배송비',
      content: '3,500원(최초 배송비가 무료인 경우 7,000원 부과)',
    },
    { id: 2, title: '교환배송비', content: '7,000원' },
    { id: 3, title: '보내실 곳', content: '파머 주소' },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Title>배송</Styled.Title>
      <Styled.Container>
        {shipList.map(item => (
          <div key={item.id}>
            <Styled.Box>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </Styled.Box>
            <Styled.Line />
          </div>
        ))}
      </Styled.Container>
      <Styled.Title>교환/환불</Styled.Title>
      <Styled.Container>
        {exchangeList.map(item => (
          <div key={item.id}>
            <Styled.Box >
              <div>{item.title}</div>
              <div>{item.content}</div>
            </Styled.Box>
            <Styled.Line />
          </div>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  `,
  Title: styled.div`
    margin-bottom: 39px;
    font-size: 20px;
    font-weight: 700;
  `,
  Container: styled.div`
    margin-bottom: 80px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  `,
  Box: styled.div`
    display: flex;
    height: 43px;
    align-items: center;
    & > div:first-child {
      width: 160px;
    }
  `,
  Line: styled.div`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.green1};
  `,
};

export default Notice;
