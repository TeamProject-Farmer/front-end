import styled from '@emotion/styled';

interface Props {
  height: number;
}
const VerticalLine = (props: Props) => {
  const {height} = props;
  return <Styled.Line height={height}></Styled.Line>;
};

const Styled = {
  Line: styled.div<Props>`
    width: 1px;
    height: ${props => (props.height ? `${props.height}px` : '100px')};
    background-color: #747474;
  `,
};

export default VerticalLine;
