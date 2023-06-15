import Styled from './styles';

interface PropsList {
  id: string;
  //추후 추가 예정
}

const CheckBox = (props: PropsList) => {
  const { id } = props;
  return <Styled.CheckBoxLabel htmlFor={id}>
  <Styled.CheckBoxInput type="checkbox" id={id} name={id} />
</Styled.CheckBoxLabel>;
}

export default CheckBox;



