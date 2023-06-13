import Styled from './styles';

interface PropsList {
  text: string;
}
const MiddleButton = (props: PropsList) => {
  const { text } = props;
  return <Styled.MiddleButtonBox>{text}</Styled.MiddleButtonBox>;
};

export default MiddleButton;
