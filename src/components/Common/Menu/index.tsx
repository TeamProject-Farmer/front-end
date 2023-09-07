import React, { useEffect } from 'react';
import Styled from './styles';
import { sizeCategory } from 'src/utils/home/category';
import { Category } from 'src/types/common/types';
import Link from 'next/link';
import Icon from '../Icon';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
const categorySelector = (state: RootState) => state.category;

const Menu = ({ setShowMenu }) => {
  const category = useSelector(categorySelector);
  // 메뉴 닫기
  const handleClose = () => {
    setShowMenu(false);
  };
  // 스크롤 이벤트 발생시 메뉴 닫기
  const handleScroll = () => {
    handleClose();
    window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.ModalBg onClick={handleClose} />
      <Styled.Menu>
        <Styled.CloseBtn onClick={handleClose}>
          <Icon name="closeBtnG" width={26} height={26} />
        </Styled.CloseBtn>
        <Styled.FlexBox>
          <Styled.Title>Shop Now</Styled.Title>
          <Styled.Ul>
            {category &&
              category?.map((el: Category) => (
                <Link href={`/shop/${el.categoryName}`}>
                  <Styled.Li onClick={handleClose} key={el.categoryId}>
                    {el.categoryName}
                  </Styled.Li>
                </Link>
              ))}
          </Styled.Ul>
        </Styled.FlexBox>
        <Styled.FlexBox>
          <Styled.Title>Shop By Size</Styled.Title>
          <Styled.Ul>
            {sizeCategory &&
              sizeCategory?.map(el => (
                <Styled.Li onClick={handleClose} key={el.id}>
                  <Link href={`/shop/bysize/${el.id}`}>{el.title}</Link>
                </Styled.Li>
              ))}
          </Styled.Ul>
        </Styled.FlexBox>
      </Styled.Menu>
    </Styled.Wrapper>
  );
};

export default Menu;
