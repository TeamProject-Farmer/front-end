import React, { useEffect } from 'react';
import Styled from './styles';
import { useState } from 'react';
import { getProductCategory } from 'src/apis/common/category';
import { sizeCategory } from 'src/utils/home/category';
import { Category } from 'src/types/common/types';
import Link from 'next/link';
import Icon from '../Icon';

const Menu = ({ setShowMenu }) => {
  const [category, setCategory] = useState<Category[]>();
  useEffect(() => {
    getProductCategory().then(res => setCategory(res));
  }, []);
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
              category?.map(el => (
                <Link href={`/shop/${el.categoryName}`}>
                  <Styled.Li key={el.categoryId}>{el.categoryName}</Styled.Li>
                </Link>
              ))}
          </Styled.Ul>
        </Styled.FlexBox>
        <Styled.FlexBox>
          <Styled.Title>Shop By Size</Styled.Title>
          <Styled.Ul>
            {sizeCategory &&
              sizeCategory?.map(el => (
                <Link href={`/shop/${el.id}`}>
                  <Styled.Li key={el.id}>{el.id}</Styled.Li>
                </Link>
              ))}
          </Styled.Ul>
        </Styled.FlexBox>
      </Styled.Menu>
    </Styled.Wrapper>
  );
};

export default Menu;
