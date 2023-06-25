import Styled from './styles';

interface PropsList {
  id?: string;
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
