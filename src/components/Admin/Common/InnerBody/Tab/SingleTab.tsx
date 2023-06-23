import Styled from './styles';

interface PropsList {
  text: string;
  fieldName?: string;
  name?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
}
const SingleTab = (props: PropsList) => { 
  const { text, fieldName, name, setState } = props;
    console.log('name')
    console.log(name)
  return <Styled.TabBox fieldState={fieldName == name} onClick={()=>setState(name)}>{text}</Styled.TabBox>;
};

export default SingleTab;
