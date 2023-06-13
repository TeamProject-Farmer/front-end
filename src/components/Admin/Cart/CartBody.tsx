import Styled from './styles';
import CartTabWrapper from './CartTabWrapper';
import ButtonWrapper from '../common/InnerBox/ButtonWrapper';
import SmallButton from '../common/SmallButton';
import BlueBodyPart from '../common/InnerBox/BlueBodyPart';

const CartBody = () => {
  return (
    <>
      <Styled.Wrapper>
        <CartTabWrapper />
        <Styled.BodyWrapper>
          <BlueBodyPart
            title="스칸답서스"
            first="2023.04.05"
            second="Mark"
            third="123123123"
            last="배송중"
            checkBox={true}
          />
        </Styled.BodyWrapper>
        <ButtonWrapper>
          <SmallButton text="추가" />
          <SmallButton text="수정" />
          <SmallButton text="삭제" />
        </ButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default CartBody;
