import Styled from './styles';
import TabWrapper from './Tab/TabWrapper';
import FooterButtonWrapper from '../FooterButtonWrapper';
import {innerBodyPropsList} from '@components/Admin/Type'

const InnerBody = (props: innerBodyPropsList) => {
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
