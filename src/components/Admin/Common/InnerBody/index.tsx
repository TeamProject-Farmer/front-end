import Styled from './styles';
import TabWrapper from './Tab/TabWrapper';
import FooterButtonWrapper from '../FooterButtonWrapper';

interface PropsList {
  tabProps: any;
  innerBoxProps: any;
  footerButtonProps: any;
}

const InnerBody = (props: PropsList) => {
  const { tabProps, innerBoxProps, footerButtonProps } = props;
  return (
    <>
      <Styled.Wrapper>
        <TabWrapper>{tabProps}</TabWrapper>
        <Styled.BodyWrapper>{innerBoxProps}</Styled.BodyWrapper>
        <FooterButtonWrapper>{footerButtonProps}</FooterButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default InnerBody;
