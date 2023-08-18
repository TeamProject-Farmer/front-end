import Styled from './styles';
import Title from '../../Home/Common/Title';
import Plant from './Plant';
import { Category as ICategory } from 'src/types/common/types';
import { getProductCategory } from 'src/apis/common/category';
import { useQuery } from 'react-query';

const Category = () => {
  const { data: category } = useQuery('category', () => getProductCategory(), {
    cacheTime: Infinity,
  });

  return (
    <Styled.Wrapper>
      <Title title="카테고리" />
      <Styled.Plants>
        {category &&
          category?.map((ele: ICategory) => (
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
