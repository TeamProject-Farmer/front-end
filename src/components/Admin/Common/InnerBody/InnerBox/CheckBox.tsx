import Styled from './styles';

interface PropsList {
  id: number;
  checkList?: number[];
  //추후 추가 예정
}

const CheckBox = (props: PropsList) => {
  const { id, checkList } = props;

  return (
    <Styled.CheckBoxLabel htmlFor={id}>
      <Styled.CheckBoxInput
        type="checkbox"
        id={id}
        isChecked={checkList && checkList.includes(id) ? true : false}
      />
    </Styled.CheckBoxLabel>
  );
};

export default CheckBox;
