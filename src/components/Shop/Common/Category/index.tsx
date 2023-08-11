import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Styled from './styles';
import { setCategoryId } from 'store/reducers/categorySlice';
import { getProductCategory } from 'src/apis/common/category';
import { ICategory } from 'src/types/home/types';
import Plant from './Plant';

const Category = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  const handleDispatch = (id: string) => {
    dispatch(setCategoryId(id));
  }
  useEffect(() => {
    handleCategoryList();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Title>카테고리</Styled.Title>
      <Styled.Plants>
        {categoryList &&
          categoryList?.map((plant: ICategory) => (
            <div key={plant.categoryId} onClick={()=>handleDispatch(plant.categoryName)}>
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
