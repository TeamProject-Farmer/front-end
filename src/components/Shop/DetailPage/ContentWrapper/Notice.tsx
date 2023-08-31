import styled from '@emotion/styled';
import theme from '@styles/theme';
import { shipList } from 'src/utils/shop/shipmentNotice';
import { exchangeList } from 'src/utils/shop/shipmentNotice';

const Notice = () => {
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
