import Styled from './styles';
import AdminLayout from './Admin';
import Todo from '../Home/Todo';
import SmallInnerBox from '../Home/SmallInnerBox';
import Event from '../Home/Event';
import Banner from '../Home/Banner';
const HomeLayout = () => {
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

export default HomeLayout;
