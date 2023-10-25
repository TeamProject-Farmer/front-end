import Styled from './styles';

import Title from '../../Home/Common/Title';
import Plant from './Plant';

import { useQuery } from '@tanstack/react-query';

import { Category as ICategory } from 'src/types/common/types';

import { getProductCategory } from 'src/apis/common/category';

const Category = () => {
  const { data: category, isLoading } = useQuery<ICategory[]>({
    queryKey: ['category'],
    queryFn: getProductCategory,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  if (isLoading) return;
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
