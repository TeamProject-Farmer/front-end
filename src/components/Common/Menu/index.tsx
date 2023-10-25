import { useEffect } from 'react';

import Link from 'next/link';

import Icon from '../Icon';

import Styled from './styles';

import { useQuery } from '@tanstack/react-query';

import { sizeCategory } from 'src/utils/home/category';

import { Category } from 'src/types/common/types';

import { getProductCategory } from 'src/apis/common/category';

const Menu = ({ setShowMenu }) => {
  const { data: category } = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: getProductCategory,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  const handleClose = () => {
    setShowMenu(false);
  };

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
