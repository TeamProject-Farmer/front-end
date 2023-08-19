import Link from 'next/link';
import { useState, useEffect } from 'react';
import Styled from './styles';
import { getProductCategory } from 'src/apis/common/category';
import { ICategory } from 'src/types/home/types';
import Plant from './Plant';

const Category = () => {
  //공통인 부분 사용되면 삭제될 예정입니다.
  const [categoryList, setCategoryList] = useState([]);
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  useEffect(() => {
    handleCategoryList();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Title>카테고리</Styled.Title>
      <Styled.Plants>
        {categoryList &&
          categoryList?.map((plant: ICategory) => (
            <div key={plant.categoryId}>
              <Link href={`/shop/${plant.categoryName}`} >
                <Plant name={plant.categoryName} src={plant.imgUrl} />
              </Link>
            </div>
          ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default Category;
