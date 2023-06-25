import Styled from './styles';
import { singleTabPropsList } from '@components/Admin/Type';

const SingleTab = (props: singleTabPropsList) => {
  const { text } = props;
  return <Styled.TabBox>{text}</Styled.TabBox>;
};

export default SingleTab;
