import Styled from './styles';

const DetailOption = () => {
  return (
    <>
      <Styled.OptionWrapper>
        <Styled.Option>
          <Styled.CheckBoxLabel>
            <Styled.CheckBoxInput type="checkbox" />
          </Styled.CheckBoxLabel>
          <Styled.InnerBox></Styled.InnerBox>
        </Styled.Option>
        <Styled.Option>
          <Styled.CheckBoxLabel>
            <Styled.CheckBoxInput type="checkbox" />
          </Styled.CheckBoxLabel>
          <Styled.InnerBox></Styled.InnerBox>
        </Styled.Option>
        {/*overflow에러가 있는 것 같음 */}
      </Styled.OptionWrapper>
    </>
  );
};

export default DetailOption;
