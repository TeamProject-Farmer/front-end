import Styled from './styles';

interface PropsList {
  id?: number | string |undefined;
}

const CheckBox = (props: PropsList) => {
  const {id} = props;

  return (
    <Styled.CheckBoxLabel htmlFor={id}>
      <Styled.CheckBoxInput
        type="checkbox"
        id={id}
      />
    </Styled.CheckBoxLabel>
  );
};

export default CheckBox;
