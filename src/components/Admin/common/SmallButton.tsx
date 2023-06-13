import Styled from './styles';

interface PropsList {
  text: string;
}
const SmallButton = (props: PropsList) => {
  const { text } = props;
  return <Styled.SmallButtonBox>{text}</Styled.SmallButtonBox>;
};

export default SmallButton;
