import styled from '@emotion/styled';
import { CheckBoxInputProps } from 'src/types/order/types';

const CheckBoxInput = ({
  label,
  smallBox,
  checked,
  onChange,
}: CheckBoxInputProps) => {
  return (
    <Styled.Wrapper>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Styled.Label smallBox={smallBox}>{label}</Styled.Label>
    </Styled.Wrapper>
  );
};

export default CheckBoxInput;

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    gap: 33px;
    align-items: center;
    position: relative;
    input {
      appearance: none;
    }
    input:before {
      content: '';
      position: absolute;
      top: 2px;
      left: 0;
      width: 21px;
      height: 21px;
      border-radius: 4px;
      border: 1px solid #ababab;
    }
    input:checked:before {
      background-image: url('/assets/images/order/checked.svg');
      background-size: 15px 9.5px;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 3px;
      background-color: #d9d9d9;
    }
  `,
  Label: styled.label<{ smallBox?: boolean }>`
    font-weight: 500;
    font-size: ${({ smallBox }) => (smallBox ? '14px' : '16px')};
  `,
};
