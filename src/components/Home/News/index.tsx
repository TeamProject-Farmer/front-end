import Styled from './styles';
import Image from 'next/image';

const News = ({ news }) => {
  const { subject, content, imgUrl } = news;
  return (
    <Styled.Wrapper>
      <Styled.Title>farmer news</Styled.Title>
      <Styled.ImgBox>
        <Styled.FlexBox>
          <Styled.ImgTitle>관련 뉴스</Styled.ImgTitle>
          <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
        </Styled.FlexBox>
        {/* <Image src={news.imgUrl} alt="news image" width={553} height={600} /> */}
      </Styled.ImgBox>
      <Styled.ContentBox>
        <Styled.ContentTitle>{news.subject}</Styled.ContentTitle>
        <Styled.Content>{news.content}</Styled.Content>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default News;
