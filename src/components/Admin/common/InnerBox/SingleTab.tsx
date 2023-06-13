import Styled from './styles';


interface PropsList {
  text: string;
}
const SingleTab = (props: PropsList) => {
  const {text} = props;
  return (
    <Styled.TabBox>{text}</Styled.TabBox>
  )
}

export default SingleTab;