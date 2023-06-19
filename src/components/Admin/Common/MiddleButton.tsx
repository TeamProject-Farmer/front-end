import Styled from './styles';

interface PropsList {
  text: string;
  modalOpen?: () => void | undefined;
}
const MiddleButton = (props: PropsList) => {
  const { text, modalOpen } = props;
  return (
    <Styled.MiddleButtonBox onClick={modalOpen}>{text}</Styled.MiddleButtonBox>
  );
};

export default MiddleButton;
