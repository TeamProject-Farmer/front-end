import Link from 'next/link';
import Styled from './styles';
import SiderBarMenu from './SiderBarMenu';
import SideBarHeader from './SideBarHeader';
import {sideBarMenuItems} from '@components/Admin/Type'

interface PropsList {
  router: string;
}

const sidebar = (props: PropsList) => {
  const { router } = props;
  
  return (
    <Styled.Wrapper>
      <SideBarHeader />
      {sideBarMenuItems.map((item, index) => (
        <Link href={item.href} key={index}>
          <SiderBarMenu
            imageName={item.imageName}
            menuName={item.menuName}
            router={router}
          />
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default sidebar;
