import Styled from '../styles';
import CouponTable from './CouponTable';
import ButtonWrapper from '../../common/InnerBox/ButtonWrapper';
import SmallButton from '../../common/SmallButton';

const CouponBox = () => {
  return (
    <Styled.CounponBodyWrapper>
        <CouponTable />
      </Styled.CounponBodyWrapper>
    
  );
};

export default CouponBox;
