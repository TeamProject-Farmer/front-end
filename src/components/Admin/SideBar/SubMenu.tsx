import { SubMenuStyled as Styled } from './styles';
import { SubMenus } from 'src/utils/admin/sideBarMenu';

interface Props {
  menuName: string;
  currentPage: string;
}

const SubMenu = (props: Props) => {
  const { menuName, currentPage } = props;
  return (
    <Styled.Wrapper>
      <>
        { menuName == currentPage ? SubMenus(menuName)?.map((item)=>(
          <Styled.InnerWrapper>{item.value}</Styled.InnerWrapper>
        )) :<></>}
        
      </>
    </Styled.Wrapper>
  );
};

export default SubMenu;
