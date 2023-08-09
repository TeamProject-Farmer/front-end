import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getProductCategory } from 'src/apis/common/category';
import { ICategory } from 'src/types/home/types';
import { setCategoryId } from 'store/reducers/categorySlice';
import Styled from './styles';
import Plant from './Plant';

const Category = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const menu = router.query.category;
  let category: string;
  if (menu) {
    category = menu.toString();
  }
  
  const [categoryList, setCategoryList] = useState([]);
  const handleCategoryList = async () => {
    const response = await getProductCategory();
    setCategoryList(response);
  };
  useEffect(() => {
    handleCategoryList();
  }, []);
  useEffect(() => {
    dispatch(setCategoryId(category))
  }, [category])
  return (
    <Styled.Wrapper>
      <Styled.Title>카테고리</Styled.Title>
      <Styled.Plants>
        {categoryList &&
          categoryList?.map((plant: ICategory) => (
            <Link href={`/shop/${plant.categoryName}`} key={plant.categoryId}>
              <Plant name={plant.categoryName} src={plant.imgUrl} />
            </Link>
          ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default Category;