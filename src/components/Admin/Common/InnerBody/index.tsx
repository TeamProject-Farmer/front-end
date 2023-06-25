import Styled from './styles';
import TabWrapper from './Tab/TabWrapper';
import FooterButtonWrapper from '../FooterButtonWrapper';
import { innerBodyPropsList } from '@components/Admin/Type';

const InnerBody = (props: innerBodyPropsList) => {
  const { tabProps, innerBoxProps, footerButtonProps, handleCheckAll } = props;
  console.log('innerBoxProps');
  console.log(innerBoxProps);
  return (
    <>
      <Styled.Wrapper>
        <TabWrapper handleCheckAll={handleCheckAll}>{tabProps}</TabWrapper>
        <Styled.BodyWrapper>{innerBoxProps}</Styled.BodyWrapper>
        <FooterButtonWrapper>{footerButtonProps}</FooterButtonWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default InnerBody;
