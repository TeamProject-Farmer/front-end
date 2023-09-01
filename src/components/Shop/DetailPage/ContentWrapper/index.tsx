import theme from '@styles/theme';
import styled from '@emotion/styled';
import { OptionBoxProps } from 'src/types/shop/types';
import SideAd from '@components/Shop/Common/SideAd';
import OptionBox from './OptionBox';
import DetailImage from './DetailImage';
import Review from './Review';
import QnA from './QnA';
import Notice from './Notice';

const ContentWrapper = (props: OptionBoxProps) => {
  const { selectList, setSelectList, selectPrice, setSelectPrice } = props;
  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <SideAd left={-160} />
        <Styled.ExceptOption>
          <DetailImage />
          <Review />
          <QnA />
          <Notice />
        </Styled.ExceptOption>
        <OptionBox
          setSelectList={setSelectList}
          selectList={selectList}
          setSelectPrice={setSelectPrice}
          selectPrice={selectPrice}
        />
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${theme.size.shopDetailWrapper};
    margin: 0 auto;
  `,
  ContentWrapper: styled.div`
    margin-top: 58px;
    display: flex;
    margin-bottom: 187px;
    justify-content: center;
    height: 4130px;
    position: relative;
  `,
  ExceptOption: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 740px;
  `,
};

export default ContentWrapper;
