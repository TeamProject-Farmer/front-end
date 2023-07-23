import Styled from './styles';
import Icon from '../Icon';

interface Props {
  modalType: string;
  modalName: string;
  reviewItem?:string[];
}
const MiniModal = (props:Props) => {
  const {modalType, modalName, reviewItem} = props;
  return <Styled.Wrapper>
    <Styled.Header>
      <Styled.HeaderTitle>
        <Styled.CloseButton>
          <Icon name='closeBtn' width={17} height={17}></Icon>
        </Styled.CloseButton>
      </Styled.HeaderTitle>
    </Styled.Header>
  </Styled.Wrapper>;
}


export default MiniModal;