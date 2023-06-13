import Styled from './styles';
import TabWrapper from '../common/InnerBox/TabWrapper';
import SingleTab from '../common/InnerBox/SingleTab';

const AccountTabWrapper = () => {
  return <TabWrapper><SingleTab text='등록일순'/><SingleTab text='이름순'/></TabWrapper>;
}

export default AccountTabWrapper;