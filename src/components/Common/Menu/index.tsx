import React, { useEffect } from 'react';
import Styled from './styles';
import { useState } from 'react';
import { getProductCategory } from 'src/apis/common/category';
import { sizeCategory } from 'src/utils/home/category';
import { ICategory } from 'src/types/home/types';
import Link from 'next/link';
import Icon from '../Icon';

const Menu = ({ setShowMenu }) => {
  const [category, setCategory] = useState<ICategory[]>();
  useEffect(() => {
    getProductCategory().then(res => setCategory(res));
  }, []);
  const handleClose = () => {
    setShowMenu(false);
  };
  console.log(category);
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
