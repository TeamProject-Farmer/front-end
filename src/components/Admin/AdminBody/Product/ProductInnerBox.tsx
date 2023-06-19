import Styled from './styles';
import CheckBox from '@components/Admin/Common/InnerBody/InnerBox/CheckBox';

interface PropsList {
  title: string;
  date: string;
  category: string;
  price: number;
  discount: number;
  productCode: string;
}
const ProductInnerBox = (props: PropsList) => {
  const { title, date, category, price, discount, productCode } = props;
  return (
    <>
      <Styled.InnerBoxWrapper>
        <Styled.InnerBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>등록일자: {date}</Styled.Content>
          <Styled.Content>카테고리: {category}</Styled.Content>
          <Styled.Content>가격: {price}원</Styled.Content>{/* 가격에 ,표시 해야하는지 논의 필요 */}
          <Styled.Content>할인률: {discount}%</Styled.Content>
          <Styled.Content>상품코드: {productCode}</Styled.Content>
        </Styled.InnerBox>
        <CheckBox id={productCode}/> {/* 나중에 id값 넣어줄 예정 */}
        
      </Styled.InnerBoxWrapper>
    </>
  );
};

export default ProductInnerBox;
