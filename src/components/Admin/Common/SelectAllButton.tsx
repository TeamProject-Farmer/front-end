import Styled from './styles';
import {selectAllPropsList} from '@components/Admin/Type'

const SelectAllButton = (props: selectAllPropsList) => {
  const { text } = props;
  return <Styled.SelectAllBox>{text}</Styled.SelectAllBox>;
};

export default SelectAllButton;
