import Link from 'next/link';
import Image from 'next/image';
import Styled from './styles';
import SiderBarMenu from './SiderBarMenu';
import { sideBarMenuItems } from '@components/Admin/ArrayItem';

interface PropsList {
  menuName: string | undefined;
}
const SideBar = (props: PropsList) => {
  const { menuName } = props;
  let category: string;

  if (menuName == undefined) {
    category = 'home';
  } else {
    category = menuName;
  }
  console.log('category');
  console.log(category);
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Link href="/">
          <Image
            src="/assets/images/admin/logo.svg"
            alt="logo"
            width={150}
            height={34}
          ></Image>
        </Link>
      </Styled.Header>
      {sideBarMenuItems.map((item, index) => (
        <Link href={item.href} key={index}>
          <SiderBarMenu
            isCurrentPage={category === item.imageName}
            imageName={item.imageName}
            text={item.menuName}
          />
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SideBar;
