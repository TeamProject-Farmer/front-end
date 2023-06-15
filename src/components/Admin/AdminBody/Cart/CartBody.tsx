import Styled from './styles';
import CartTabWrapper from './CartTabWrapper';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import StatusBox from '@components/Admin/Common/InnerBody/InnerBox/StatusBox';

const CartBody = () => {
  return (
    <>
      <Styled.Wrapper>
        <CartTabWrapper />
        <Styled.BodyWrapper>
          <StatusBox
            title="스칸답서스"
            first="2023.04.05"
            second="Mark"
            third="123123123"
            last="배송중"
            checkBox={true}
          />
        </Styled.BodyWrapper>
        <FooterButtonWrapper>
          <SmallButton text="추가" />
          <SmallButton text="수정" />
          <SmallButton text="삭제" />
        </FooterButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default CartBody;
