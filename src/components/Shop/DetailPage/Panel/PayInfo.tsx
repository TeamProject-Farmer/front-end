import theme from '@styles/theme';
import styled from '@emotion/styled';
import handleShipDay from 'src/utils/shop/handleShipDay';
import { PayInfoStyled as Styled } from './styles';

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


export default PayInfo;
