import Styled from './styles';
import {middleButtonPropsList} from '@components/Admin/Type';

const MiddleButton = (props: middleButtonPropsList) => {
  const { text, modalOpen } = props;
  return (
    <Styled.MiddleButtonBox onClick={modalOpen}>{text}</Styled.MiddleButtonBox>
  );
};

export default MiddleButton;
