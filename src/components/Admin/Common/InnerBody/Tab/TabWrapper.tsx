import Styled from './styles';



const TabWrapper = (props) => {
  return (
    <>
      <Styled.TabWrapper>
        <Styled.TabContainer>{props.children}</Styled.TabContainer>
        <Styled.SelectAllButton >전체선택</Styled.SelectAllButton>
      </Styled.TabWrapper>
    </>
  );
};

export default TabWrapper;
