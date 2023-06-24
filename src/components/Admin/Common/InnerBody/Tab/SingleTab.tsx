import Styled from './styles';
import {singleTabPropsList} from '@components/Admin/Type'

const SingleTab = (props: singleTabPropsList) => { 
  const { text, fieldName, name, setState } = props;
  return <Styled.TabBox fieldState={fieldName == name} onClick={()=>setState(name)}>{text}</Styled.TabBox>;
};

export default SingleTab;
