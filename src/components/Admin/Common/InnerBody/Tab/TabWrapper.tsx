import Styled from './styles';

interface TempProps {
  handleCheckAll?: ()=>void;
  children?: any;
  
}
const TabWrapper = (props:TempProps) => {
  return (
    <>
      <Styled.TabWrapper>
        <Styled.TabContainer>{props.children}</Styled.TabContainer>
        <Styled.SelectAllButton onClick={props.handleCheckAll} >전체선택</Styled.SelectAllButton>
      </Styled.TabWrapper>
    </>
  );
};

export default TabWrapper;
