import Styled from './styles';

interface PropsList {
  text: string;
  modalOpen?: ()=>void | undefined;
}
const SmallButton = (props: PropsList) => {
  const { text, modalOpen } = props;
  return <Styled.SmallButtonBox onClick={modalOpen}>{text}</Styled.SmallButtonBox>;
};

export default SmallButton;
