import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import heart from '@assets/images/shop/optionBoxHeart.svg';
import arrow from '@assets/images/shop/optionArrow.svg';
import { getDetail } from 'src/apis/shop/product';
import {
  OptionBoxProps,
  selectOptionProps,
  selectListProps,
} from 'src/types/shop/types';

const OptionBox = (props: OptionBoxProps) => {
  const { isPanel, selectList, setSelectList } = props;

  const router = useRouter();
  const productId = Number(router.query?.detail) || 1;
  const [isShowOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState<selectOptionProps[]>([]);
  const [lastOption, setLastOption] = useState<string>('상품을 선택하세요.');
  
  const handleDetailData = async () => {
    const response = await getDetail(productId);
    setOptions(response.options);
    console.log('OptionBoxPage----response')
    console.log(response.options)
  };
  const handleSelectList = (item: selectListProps) => {
    setSelectList([
      ...selectList.filter(i => i.id != item.id),
      {
        id: item.id,
        optionName: item.optionName,
        optionPrice: item.optionPrice,
      },
    ]);
  };
  if (options.length <= 0) {
    setOptions([{ id: 0, optionName: '단일 옵션입니다.', optionPrice: 0 }]);
  }
  useEffect(() => {
    if (selectList.length <= 0) setLastOption('상품을 선택하세요.');
    else setLastOption(selectList.at(-1).optionName);
  }, [selectList]);
  
  useEffect(() => {
    handleDetailData();
  }, [router]);

  if (isPanel) {
    return (
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
    );
  } else {
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
            <div>0원</div>
          </Styled.TotalPrice>
          <Styled.Buttons>
            <button>장바구니</button>
            <button>바로구매</button>
          </Styled.Buttons>
        </Styled.Lower>
      </Styled.Wrapper>
    );
  }
};

const ColorOption = styled.div``;
const Styled = {
  Wrapper: styled.div`
    width: 302px;
    height: 720px;
    margin-left: 69px;
    cursor: pointer;
  `,
  Upper: styled.div`
    display: flex;
    flex-direction: column;
    height: 548px;
  `,
  SelectBox: styled.div`
    position: relative;
    height: 66px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    color: #606060;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    display: flex;
    align-items: center;
    &::before {
      content: '⌵';
      position: absolute;
      top: 15px;
      right: 16px;
      color: #747474;
      font-size: 20px;
      font-weight: 600;
    }
  `,
  Label: styled.label`
    margin-left: 4px;
    text-align: center;
    color: #59b941;
    font-size: 16px;
    font-weight: 500;
  `,
  SelectOptions: styled.ul<{ show: boolean }>`
    margin-top: ${props => (props.show ? '10px' : '0')};
    margin-bottom: ${props => (props.show ? '10px' : '0')};
    width: 302px;
    overflow: hidden;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 5px;
    border: ${props => (props.show ? '1px solid #000' : '')};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    & > li:last-child > div {
      border: none;
    }
  `,
  Option: styled.li`
    height: fit-content;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    display: flex;
    justify-content: center;
    padding: 15px 14px 0 14px;
    & > div {
      height: fit-content;
      width: 271px;
      border-bottom: 1px solid #a6a6a6;
      display: flex;
      justify-content: space-between;
    }
    & > div > div:first-of-type {
      margin-bottom: 5px;
    }
    & > div > div:first-of-type {
      color: #727272;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 15px;
    }
    &:hover ${ColorOption} {
      color: #33b822;
    }
  `,
  SelectedOption: styled.div`
    height: 66px;
    border-radius: 5px;
    background-color: #ceeec9;
    color: #606060;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;
  `,
  Lower: styled.div`
    height: 100px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  TotalPrice: styled.div`
    & > div:first-child {
      font-size: 14px;
    }
    & > div:last-child {
      font-size: 20px;
    }
  `,
  Buttons: styled.div`
    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 5px;
      width: 145px;
      height: 53px;
    }
    & > button:first-child {
      color: ${theme.colors.green1};
      border: 1px solid ${theme.colors.green1};
    }
    & > button:last-child {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green1};
    }
  `,
  HeartIcon: styled(heart)``,
  PanelSelectBox: styled.div`
    position: relative;
    cursor: pointer;
  `,
  OptionArrow: styled(arrow)`
    position: absolute;
    top: 48px;
    right: 17px;
    z-index: 1;
  `,
  PanelSelect: styled.div`
    width: 433px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    appearance: none;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    position: relative;
    display: flex;
    align-items: center;
    /* &::before {
      content: '⌵';
      position: absolute;
      top: 15px;
      right: 16px;
      color: #747474;
      font-size: 20px;
      font-weight: 600;
    } */
  `,
  PanelLabel: styled.label`
    margin-left: 4px;
    text-align: center;
    color: #59b941;
    font-size: 16px;
    font-weight: 500;
  `,
  PanelSelectOptions: styled.ul<{ show: boolean }>`
    position: absolute;
    list-style: none;
    top: 60px;
    left: 0;
    width: 433px;
    overflow: hidden;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 5px;
    border: ${props => (props.show ? '1px solid #000' : '')};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    & > li:last-child > div {
      border: none;
    }
  `,
  PanelOption: styled.li`
    width: 433px;
    height: fit-content;
    font-size: 17px;
    font-weight: 500;
    line-height: 19px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    display: flex;
    justify-content: center;
    padding: 13px 14px;
    & > div {
      height: 100%;
      width: 98%;
      border-bottom: 1px solid #a6a6a6;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > div > div:last-child {
      color: #727272;
      font-size: 12px;
      line-height: 15px;
    }
    &:hover ${ColorOption} {
      color: #33b822;
    }
  `,
};

export default OptionBox;
