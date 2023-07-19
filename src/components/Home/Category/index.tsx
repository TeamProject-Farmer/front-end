import Styled from './styles';
import Title from '../Common/Title';
import Plant from './Plant';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getProductCategory } from 'src/apis/home/home';
import { TCategoryProps } from 'src/types/home/types';
import { useEffect, useState } from 'react';

const Category = ({ category }) => {
  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   fetch('http://3.39.150.186:8080/api/main/product-category')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCategory(data);
  //     });
  // }, []);
  // console.log(category);
  return (
    <Styled.Wrapper>
      <Title title="카테고리" />
      <Styled.Plants>
        {category &&
          category?.map((ele: TCategoryProps) => (
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
