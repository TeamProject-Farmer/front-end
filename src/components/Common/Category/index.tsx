import Styled from './styles';
import Title from '../../Home/Common/Title';
import Plant from './Plant';
import { Category as ICategory } from 'src/types/common/types';
import { getProductCategory } from 'src/apis/common/category';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from 'store/reducers/categorySlice';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const categorySelector = (state: RootState) => state.category;
const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(categorySelector);

  useEffect(() => {
    getProductCategory().then(res => {
      dispatch(setCategory(res));
    });
  }, []);

  return (
    <Styled.Wrapper>
      <Title title="카테고리" />
      <Styled.Plants>
        {category.length !== 0 &&
          category.map((ele: ICategory) => (
            <Plant
              key={ele.categoryId}
              name={ele.categoryName}
              src={ele.imgUrl}
            />
          ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default Category;
