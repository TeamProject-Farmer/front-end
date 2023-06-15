import Styled from './styles';
import StatusBox from '@components/Admin/Common/InnerBody/InnerBox/StatusBox';

function SmallInnerBox() {
  return (
    <Styled.InnerBoxWrapper>
      <StatusBox
        title="다육이"
        first="2023.04.05"
        second="Mark"
        third="123123123"
        last="결제대기"
        checkBox={false}
      />
    </Styled.InnerBoxWrapper>
  );
}

export default SmallInnerBox;
