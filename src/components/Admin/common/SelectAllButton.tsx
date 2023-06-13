import Styled from './styles';

interface PropsList {
  text: string;
}
const SelectAllButton = (props: PropsList) => {
  const { text } = props;
  return <Styled.SelectAllBox>{text}</Styled.SelectAllBox>;
};

export default SelectAllButton;
