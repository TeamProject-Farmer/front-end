import Image from 'next/image';
import styled from '@emotion/styled';
import { sideMenuProps } from '../Type';


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
        <Styled.MenuWrapper>
          
          <Styled.Menu>{text}</Styled.Menu>
        </Styled.MenuWrapper>
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


const Styled = {
  Wrapper: styled.div<{isClicked?: boolean} >`
    width: 100%;
    height: 56px;
    display: flex;
    padding: 5px 30px;
    justify-content: space-between;
    color: ${props => (props.isClicked ? '#9CDC1F' : '#8a8a8a')};
    background-color: ${props => (props.isClicked ? '#292929' : '')};
    &:hover {
      background-color: #ffffff15;
      color: #ffffffd4;
    }
  `,
  MenuWrapper: styled.div`
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    margin-left: 18px;
    height: 100%;
  `,
};
export default SiderBarMenu;
