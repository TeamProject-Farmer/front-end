import { Styled, ColorOption } from './styles';
import { PanelOptionProps } from 'src/types/shop/types';

const PanelOptionBox = (props: PanelOptionProps) => {
  const {
    isShowOptions,
    setShowOptions,
    lastOption,
    options,
    handleSelectList,
    handleResultPrice,
    handleOrder,
    handleCartData,
  } = props;

  return (
    <Styled.PannelWrapper>
      <Styled.OptionWrapper>
        <div>옵션</div>
        <Styled.PanelSelectBox>
          <Styled.OptionArrow />
          <Styled.PanelSelect onClick={() => setShowOptions(prev => !prev)}>
            <Styled.PanelLabel>{lastOption}</Styled.PanelLabel>
            <Styled.PanelSelectOptions show={isShowOptions}>
              {options?.map(item => (
                <Styled.PanelOption
                  key={item.id}
                  onClick={() => handleSelectList(item)}
                >
                  <div>
                    <ColorOption>{item.optionName}</ColorOption>
                    <div>+{item.optionPrice}원</div>
                  </div>
                </Styled.PanelOption>
              ))}
            </Styled.PanelSelectOptions>
          </Styled.PanelSelect>
        </Styled.PanelSelectBox>
      </Styled.OptionWrapper>
      <Styled.TotalPriceWrapper>
        <div>주문금액</div>
        <div>{handleResultPrice()}</div>
      </Styled.TotalPriceWrapper>
      <Styled.ButtonWrapper>
        <button onClick={() => handleOrder()}>구매하기</button>
        <button onClick={() => handleCartData()}>장바구니</button>
      </Styled.ButtonWrapper>
    </Styled.PannelWrapper>
  );
};

export default PanelOptionBox;
