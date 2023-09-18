import { OnOffProps } from 'src/types/shop/types';
import { OnOffStyled as Styled} from './styles';

const OnOffButton = (props: OnOffProps) => {
  const {myButton, setMyButton} = props;

  const clickedmyButton = () => {
    setMyButton(prev => !prev);
  };
  return (
    <Styled.Wrapper onClick={clickedmyButton} myButton={myButton}>
      <Styled.Pointer myButton={myButton} />
      {myButton ? (
        <Styled.PointerOn>ON</Styled.PointerOn>
      ) : (
        <Styled.PointerOff>OFF</Styled.PointerOff>
      )}
    </Styled.Wrapper>
  );
};


export default OnOffButton;
