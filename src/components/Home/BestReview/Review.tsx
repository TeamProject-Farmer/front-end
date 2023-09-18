import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '@components/Common/Icon';
import Link from 'next/link';
import Image from 'next/image';

const Review = ({ memberNickName, imgUrl, likeCount, content, productId }) => {
  const countStar = (likeCount: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const iconSrc = i < likeCount ? 'fullStar' : 'emptyStar';
      stars.push(<Icon key={i} name={iconSrc} width={30} height={28} />);
    }
    return stars;
  };

  return (
    <Link href={`/shop/detail/${productId}`}>
      <Styled.Wrapper>
        <Styled.flexBox>
          <Styled.UserBox>
            <Styled.UserName>{memberNickName}</Styled.UserName>
            <Icon name="moreBtn" width={25} height={25} />
          </Styled.UserBox>
          <Styled.ImgBox>
            <Image src={imgUrl} alt="리뷰 이미지" fill={true} />
          </Styled.ImgBox>
          <Styled.ContentBox>
            <Styled.StarBox>
              <Styled.Star>{countStar(likeCount)}</Styled.Star>
              <Styled.Like>
                <Icon name="thumbsUp" width={28} height={30} />
                <Styled.LikeQty>{likeCount}</Styled.LikeQty>
              </Styled.Like>
            </Styled.StarBox>
            <Styled.Content>{content}</Styled.Content>
          </Styled.ContentBox>
        </Styled.flexBox>
      </Styled.Wrapper>
    </Link>
  );
};

export default Review;

const Styled = {
  Wrapper: styled.div`
    margin-right: 32px;
    width: 277px;
    height: 426px;
    border: 1px solid #000000;
    border-radius: 15px;
    flex-shrink: 0;
  `,
  flexBox: styled.div`
    padding: 30px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  UserBox: styled.div`
    padding: 0 10px;
    margin-bottom: 17px;
    display: flex;
    justify-content: space-between;
  `,
  UserName: styled.div`
    font-size: 16px;
    font-weight: 500;
  `,
  MoreBtn: styled.p``,
  ImgBox: styled.div`
    position: relative;
    width: 266px;
    height: 266px;
    background-color: ${theme.colors.lightGray};
  `,
  ContentBox: styled.div`
    margin-top: 12px;
    padding: 0 9px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  StarBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Star: styled.div`
    display: flex;
  `,
  Like: styled.div`
    position: relative;
  `,
  LikeQty: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
    position: absolute;
    top: 0;
    right: -11px;
    border-radius: 50%;
    color: #fff;
    background-color: ${theme.colors.pointGreen};
    font-size: 12px;
  `,
  Content: styled.p`
    font-weight: 500;
    font-size: 12px;
  `,
};
