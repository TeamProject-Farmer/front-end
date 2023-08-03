import Link from 'next/link';
import { useState, useEffect } from 'react';
import Styled from './styles';
import Plant from './Plant';
import { getProductCategory } from 'src/apis/common/category';

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  useEffect(() => {
    handleCategoryList();
  }, [])
  return (
    <Styled.Wrapper>
      <Styled.Title >카테고리</Styled.Title>
      <Styled.Plants>
        {categoryList.map(plant => (
          <Link href={`/shop/${plant.categoryName}`}  key={plant.categoryId}>
            <Plant name={plant.categoryName} src={plant.imgUrl} />
          </Link>
        ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default Category;
