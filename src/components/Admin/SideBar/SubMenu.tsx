import Link from 'next/link';
import { SubMenuStyled as Styled } from './styles';
import { SubMenus } from 'src/utils/admin/sideBarMenu';

interface Props {
  menuName: string;
  currentPage: string;
  pathName: string;
}

const SubMenu = (props: Props) => {
  const { menuName, currentPage, pathName } = props;
  return (
    <Styled.Wrapper>
      <>
        {menuName == currentPage ? (
          SubMenus(menuName)?.map(item => (
            <Styled.InnerWrapper isClicked={item.pathName == pathName}>
              <Link href={item.pathName}>{item.value}</Link>
            </Styled.InnerWrapper>
          ))
        ) : (
          <></>
        )}
      </>
    </Styled.Wrapper>
  );
};

export default SubMenu;
