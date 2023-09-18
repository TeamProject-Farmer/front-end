import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {  useSelector } from 'react-redux';
import { orderDataSelector } from 'src/types/shop/types';
import { OptionBoxProps, selectOptionProps } from 'src/types/shop/types';
import useOptionBox from 'src/hooks/shop/useOptionBox';
import PanelOptionBox from './PanelOptionBox';
import ContentOptionBox from './ContentOptionBox';

const OptionBox = (props: OptionBoxProps) => {
  const { isPanel, optionList, selectList, setSelectList, selectPrice, setSelectPrice } = props;

  const router = useRouter();  
  const orderData = useSelector(orderDataSelector);
  const productId = Number(router.query?.detail) || 1;
  const [isShowOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState<selectOptionProps[]>([]);
  const [lastOption, setLastOption] = useState<string>('상품을 선택하세요.');

  
  const { handleResultPrice, handleSelectList, handleCartData, handleOrder } =
    useOptionBox({
      productId, optionList, selectList, setSelectList, selectPrice, setSelectPrice, orderData
    });

  useEffect(() => {
    if (optionList) {
      if (optionList.length <= 0) {
        console.log(optionList.length);
        setOptions([{ id: 0, optionName: '단일 옵션입니다.', optionPrice: 0 }]);
      } else {
        console.log(optionList.length);
        setOptions(optionList);
      }
    }
  }, [optionList]);

  useEffect(() => {
    if (selectList.length <= 0) setLastOption('상품을 선택하세요.');
    else setLastOption(selectList.at(-1).optionName);
  }, [selectList]);

  if (isPanel) {
    return (
      <PanelOptionBox
        isShowOptions={isShowOptions}
        setShowOptions={setShowOptions}
        lastOption={lastOption}
        options={options}
        handleSelectList={handleSelectList}
        handleResultPrice={handleResultPrice}
        handleOrder={handleOrder}
        handleCartData={handleCartData}
      />
    );
  } else {
    return (
      <ContentOptionBox
        isShowOptions={isShowOptions}
        setShowOptions={setShowOptions}
        setSelectList={setSelectList}
        selectList={selectList}
        options={options}
        handleSelectList={handleSelectList}
        handleResultPrice={handleResultPrice}
        handleOrder={handleOrder}
        handleCartData={handleCartData}
      />
    );
  }
};

export default OptionBox;
