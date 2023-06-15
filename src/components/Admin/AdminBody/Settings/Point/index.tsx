import Styled from '../Coupon/styles';
import PointBox from './PointBox';
import FooterButtonWrapper from '@components/Admin/Common/FooterButtonWrapper';
import SmallButton from '@components/Admin/Common/FooterButtonWrapper/SmallButton';

const Point = () => {
  return (
    <Styled.PointWrapper>
      <PointBox />
      <FooterButtonWrapper>
        <SmallButton text="저장" />
      </FooterButtonWrapper>
    </Styled.PointWrapper>
  );
};

export default Point;
