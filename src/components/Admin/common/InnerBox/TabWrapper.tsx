import Styled from './styles';
import SelectAllButton from '../SelectAllButton';

const TabWrapper = props => {
  return (
    <>
      <Styled.TabWrapper>
        <Styled.TabContainer>{props.children}</Styled.TabContainer>
        <SelectAllButton text="전체 선택"></SelectAllButton>
      </Styled.TabWrapper>
    </>
  );
};

export default TabWrapper;
