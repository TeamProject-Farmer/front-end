import Styled from './styles';
import Title from '../../Home/Common/Title';
import Plant from './Plant';
import { ICategory } from 'src/types/home/types';

const Category = ({ category }) => {
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
