import Styled from './styles';
import {TotalList} from '../ModalType'

const TotalMember = () => {
  
  return (
    <Styled.TotalWrapper>
      {TotalList.map(item => (
        <Styled.TotalCol key={item}>
          <Styled.TotalUpperRow >{item}</Styled.TotalUpperRow>
          <Styled.TotalLowerRow>0</Styled.TotalLowerRow>
        </Styled.TotalCol>
      ))}
    </Styled.TotalWrapper>
  );
};

export default TotalMember;
