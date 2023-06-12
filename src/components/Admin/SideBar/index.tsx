import Link from 'next/link';
import Styled from './styles';
import SiderBarMenu from './SiderBarMenu';
import SideBarHeader from './SideBarHeader';

interface PropsList {
  router: string;
}

const sidebar = (props: PropsList) => {
  const { router } = props;
  
  return (
    <Styled.Wrapper>
      <SideBarHeader />
      <Link href="/admin">
        <SiderBarMenu imageName="home" menuName="홈" router={router}/>
      </Link>
      <Link href="/admin/administrator">
        <SiderBarMenu imageName="administrator" menuName="계정"  router={router}/>
      </Link>
      <Link href="/admin/group">
        <SiderBarMenu imageName="group" menuName="회원"  router={router}/>
      </Link>
      <Link href="/admin/cart">
        <SiderBarMenu imageName="cart" menuName="주문"  router={router}/>
      </Link>
      <Link href="/admin/item">
        <SiderBarMenu imageName="item" menuName="상품"  router={router}/>
      </Link>
      <Link href="/admin/clipboard">
        <SiderBarMenu imageName="clipboard" menuName="게시판"  router={router}/>
      </Link>
      <Link href="/admin/settings">
        <SiderBarMenu imageName="settings" menuName="기타 설정"  router={router}/>
      </Link>
      <Link href="/admin/logout">
        <SiderBarMenu imageName="logout" menuName="로그아웃" router={router} />
      </Link>
    </Styled.Wrapper>
  );
};

export default sidebar;
