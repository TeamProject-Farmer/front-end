import Styled from '../styles';
import AdminLayout from '../AdminLayout';
import Todo from './Todo';
import SmallInnerBox from './SmallInnerBox';
import Event from './Event';
import Banner from './Banner';
const HomeBody = () => {
  return (
    <AdminLayout>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>오늘의 할일</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Todo />
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>구매내역</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <SmallInnerBox></SmallInnerBox>
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>
          이벤트/기획전 관리
        </Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Event />
      <Styled.ContentHeader>
        <Styled.ContentHeaderTitle>배너관리</Styled.ContentHeaderTitle>
      </Styled.ContentHeader>
      <Banner />
    </AdminLayout>
  );
};

export default HomeBody;
