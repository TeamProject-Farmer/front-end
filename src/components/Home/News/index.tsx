import Styled from './styles';
import Image from 'next/image';
import Link from 'next/link';

const News = ({ news }) => {
  console.log(news);
  const { subject, content, imgUrl } = news;
  return (
    <Styled.Wrapper>
      <Styled.Title>farmer news</Styled.Title>
      <Styled.ImgBox>
        <Styled.FlexBox>
          <Styled.ImgTitle>관련 뉴스</Styled.ImgTitle>
          <Link href="/shop/다육이">
            <Styled.ShopBtn>&gt; Shop Now</Styled.ShopBtn>
          </Link>
        </Styled.FlexBox>
        <Image src={imgUrl} alt="news image" width={553} height={600} />
      </Styled.ImgBox>
      <Styled.ContentBox>
        <Styled.ContentTitle>{subject}</Styled.ContentTitle>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default News;
