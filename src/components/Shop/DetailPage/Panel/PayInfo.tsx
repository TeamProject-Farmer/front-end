import theme from '@styles/theme';
import styled from '@emotion/styled';
import handleShipDay from 'src/utils/shop/handleShipDay';
import checkIcon from '@assets/images/shop/checkIcon.svg';
import boxIcon from '@assets/images/shop/boxIcon.svg';

const PayInfo = () => {
  return (
    <>
      <Styled.ShipmentWrapper>
        <Styled.EachShip>
          <Styled.EachShipTitle>혜택</Styled.EachShipTitle>
          <Styled.ShipCommonBox>
            <div>23P</div>
            <div>적립</div>
          </Styled.ShipCommonBox>
        </Styled.EachShip>
        <Styled.EachShip>
          <Styled.EachShipTitle>배송</Styled.EachShipTitle>
          <Styled.EachShipContent>
            <Styled.ShipCommonBox>
              <div>2,500원</div>
              <div>선결제</div>
            </Styled.ShipCommonBox>
            <div>일반택배</div>
            <Styled.ShipCheck>
              <div>
                <Styled.CheckIcon />
                <div>지역별 차등 배송비</div>
              </div>
              <div>
                <Styled.CheckIcon />
                <div>제주도/도서산간 지역 2,500원</div>
              </div>
            </Styled.ShipCheck>
            <Styled.ExpectShip>
              <Styled.BoxIcon />
              <div>{handleShipDay()}</div>
              <div>도착 예정</div>
            </Styled.ExpectShip>
          </Styled.EachShipContent>
        </Styled.EachShip>
      </Styled.ShipmentWrapper>
    </>
  );
};

const Styled = {
  ShipmentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    color: #585858;
    font-weight: 400;
    font-size: 16px;
    & > div {
    }
  `,
  EachShip: styled.div`
    display: flex;
    & > div {
      display: flex;
    }
  `,
  EachShipTitle: styled.div`
    width: 46px;
    margin-bottom: 8px;
  `,
  EachShipContent: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ShipCommonBox: styled.div`
    display: flex;
    font-size: 16px;
    margin-bottom: 6px;
    & > div:first-child {
      font-weight: 600;
      margin-right: 4px;
      color: ${theme.colors.black};
    }
    & > div:nth-child(2) {
      font-weight: 400;
    }
  `,
  ShipCheck: styled.div`
    display: flex;
    margin-top: 11px;
    margin-left: 1px;
    & > div {
      margin-right: 19px;
      font-size: 12px;
      display: flex;
      align-items: center;
      & > svg:first-child {
        margin-right: 6px;
      }
    }
  `,
  CheckIcon: styled(checkIcon)``,
  ExpectShip: styled.div`
    width: 502px;
    height: 41px;
    border-radius: 5px;
    margin-top: 11px;
    margin-bottom: 15px;
    background-color: var(--4, #ecf9e9);
    display: flex;
    align-items: center;
    & > div:nth-child(2) {
      color: #33b822;
      font-size: 16px;
      font-weight: 600;
      margin-right: 5px;
    }
    & > div:last-child {
      color: #010101;
      font-size: 14px;
      font-weight: 300;
    }
  `,

  BoxIcon: styled(boxIcon)`
    margin-left: 14px;
    margin-right: 9px;
  `,
};

export default PayInfo;
