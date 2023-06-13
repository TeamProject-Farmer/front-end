import Styled from '../styles';
import PointBox from './PointBox';
import ButtonWrapper from '@components/Admin/common/InnerBox/ButtonWrapper';
import SmallButton from '@components/Admin/common/SmallButton';

const Point = () => {
  return (
    <Styled.PointWrapper>
      <PointBox />
      <ButtonWrapper>
        <SmallButton text="저장" />
      </ButtonWrapper>
    </Styled.PointWrapper>
  );
};

export default Point;
