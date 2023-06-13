import Styled from './styles';
import AccountBodyPart from './AccountBodyPart';
import AccountTabWrapper from './AccountTabWrapper';
import ButtonWrapper from '../common/InnerBox/ButtonWrapper';
import SmallButton from '../common/SmallButton';


const AccountBody = () => {
  return (
    <>
      <Styled.Wrapper>
        <AccountTabWrapper />
        <Styled.BodyWrapper>
          <AccountBodyPart
            nickname="Sarah"
            manager="슈퍼관리자"
            registerDate="2023-04-02"
            role="쇼핑몰 관리자"
          ></AccountBodyPart>
        </Styled.BodyWrapper>
        <ButtonWrapper>
          <SmallButton text="추가" />
          <SmallButton text="수정" />
        </ButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default AccountBody;
