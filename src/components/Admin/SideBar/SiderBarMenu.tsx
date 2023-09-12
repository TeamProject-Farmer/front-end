import Image from 'next/image';
import Icon from './Icon';
import { sideMenuProps } from '../Type';
import { SideBarMenuStyled as Styled} from './styles';

const SiderBarMenu = (props: sideMenuProps) => {
  const { isCurrentPage, imageName, text } = props;
  let color = null;
  if(isCurrentPage){
    color = '#9CDC1F';
  } else{
    color =  '#8a8a8a';
  }
  return (
    <>
      <Styled.Wrapper isClicked={isCurrentPage}>
        <Styled.InnerWrapper>
          <Icon imageName={imageName} colorName={color}/>
          <Styled.MenuText>{text}</Styled.MenuText>
        </Styled.InnerWrapper>
        <Image
          src="/assets/images/admin/downArrow.svg"
          alt="arrow"
          width={7}
          height={12.7}
        ></Image>
      </Styled.Wrapper>
    </>
  );
};



export default SiderBarMenu;
