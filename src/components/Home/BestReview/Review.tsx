import styled from '@emotion/styled';
import theme from '@styles/theme';
import Icon from '@components/Common/Icon';

const Review = ({
  memberNickName,
  imgUrl,
  fiveStarRating,
  likeCount,
  content,
}) => {
  const countStar = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const iconSrc = i < fiveStarRating ? 'fullStar' : 'emptyStar';
      stars.push(<Icon key={i} name={iconSrc} width={30} height={28} />);
    }
    return stars;
  };

  return (
    <Styled.Wrapper>
      <Styled.UserBox>
        <Styled.UserName>{memberNickName}</Styled.UserName>
        <Icon name="moreBtn" width={25} height={25} />
      </Styled.UserBox>
      <Styled.ImgBox src={imgUrl} alt="리뷰 이미지" />
      <Styled.ContentBox>
        <Styled.StarBox>
          <Styled.Star>{countStar()}</Styled.Star>
          <Styled.Like>
            <Icon name="thumbsUp" width={28} height={30} />
            <Styled.LikeQty>{likeCount}</Styled.LikeQty>
          </Styled.Like>
        </Styled.StarBox>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default Review;

const Styled = {
  Wrapper: styled.div`
    margin-right: 32px;
    width: 277px;
    height: 426px;
    padding: 0 5px;
    border: 1px solid #000000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  UserBox: styled.div`
    margin-bottom: 17px;
    display: flex;
    justify-content: space-between;
  `,
  UserName: styled.div`
    font-size: 16px;
    font-weight: 500;
  `,
  MoreBtn: styled.p``,
  ImgBox: styled.img`
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
