import Styled from './styles';
import {smallButtonPropsList} from '@components/Admin/Type'

const SmallButton = (props: smallButtonPropsList) => {
  const { text, modalOpen } = props;
  return <Styled.SmallButtonBox onClick={modalOpen}>{text}</Styled.SmallButtonBox>;
};

export default SmallButton;
