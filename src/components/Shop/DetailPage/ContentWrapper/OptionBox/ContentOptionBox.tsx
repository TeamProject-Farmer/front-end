import { Styled, ColorOption } from './styles';
import { ContentOptionProps } from 'src/types/shop/types';

const ContentOptionBox = (props: ContentOptionProps) => {
  const {
    isShowOptions,
    setShowOptions,
    selectList,
    setSelectList,
    options,
    handleSelectList,
    handleResultPrice,
    handleOrder,
    handleCartData,
  } = props;
  return (
    <Styled.Wrapper>
      <Styled.Upper>
        <Styled.SelectBox onClick={() => setShowOptions(prev => !prev)}>
          <Styled.Label>상품을 선택하세요.</Styled.Label>
        </Styled.SelectBox>
        <Styled.SelectOptions show={isShowOptions}>
          {options?.map(item => (
            <Styled.Option
              key={item.id}
              onClick={() => setShowOptions(prev => !prev)}
            >
              <div onClick={() => handleSelectList(item)}>
                <ColorOption>{item.optionName}</ColorOption>
                <div>+{item.optionPrice}원</div>
              </div>
            </Styled.Option>
          ))}
        </Styled.SelectOptions>
        {selectList?.map(item => (
          <Styled.SelectedOption
            key={item.id}
            onClick={() =>
              setSelectList(selectList.filter(i => i.id != item.id))
            }
          >
            <div>{item.optionName}</div>
            <div>+{item.optionPrice}원</div>
          </Styled.SelectedOption>
        ))}
      </Styled.Upper>
      <Styled.Lower>
        <Styled.TotalPrice>
          <div>주문금액</div>
          <div>{handleResultPrice()}</div>
        </Styled.TotalPrice>
        <Styled.Buttons>
          <button onClick={() => handleCartData()}>장바구니</button>
          <button onClick={() => handleOrder()}>바로구매</button>
        </Styled.Buttons>
      </Styled.Lower>
    </Styled.Wrapper>
  );
}

export default ContentOptionBox;