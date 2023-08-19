import React from 'react';
import InputGroup from '../InputGroup';
import Styled from '../styles';
import PayMethodList from './PayMethodList';

const PayMethod = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <InputGroup title="결제수단" before="none">
      <Styled.InnerPaddingWrapper caption="payment">
        <PayMethodList
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
      </Styled.InnerPaddingWrapper>
    </InputGroup>
  );
};

export default PayMethod;
