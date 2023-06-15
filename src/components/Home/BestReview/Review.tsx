import styled from '@emotion/styled'
import theme from '@styles/theme'
import Icon from '../Common/Icon'

const Review = ({userName, star, like, title, content}) => {

  function CountStar() {
    const stars = [];
      for (let i = 0; i < 5; i++) {
        const iconSrc = i < star ? 'star' : 'emptyStar';
        stars.push(<Icon key={i} src={iconSrc} />);
      }
      return stars;
  }

  return (
    <Styled.Wrapper>
      <Styled.UserBox>
        <Styled.UserName>{userName}</Styled.UserName>
        <Icon src='moreBtn' width={25} height={25}/>
      </Styled.UserBox>
      <Styled.ImgBox/>
      <Styled.ContentBox>
        <Styled.StarBox>
          <Styled.Star>
            {CountStar()}
          </Styled.Star>
          <Styled.Like>
            <Icon src='thumbsUp'/>
            <Styled.LikeQty>{like}</Styled.LikeQty>
          </Styled.Like>
        </Styled.StarBox>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentBox>
    </Styled.Wrapper>
  )
}

export default Review

const Styled = {
  Wrapper: styled.div`
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
    display:flex;
    justify-content: space-between;
    
  `,
  UserName: styled.div`
    font-size: 16px;
    font-weight: 500;
  `,
  MoreBtn: styled.p`
    
  `,
  ImgBox: styled.div`
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
    background-color: ${theme.colors.lightGray};
    font-size: 12px;
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 16px;
  `,
  Content: styled.p`
    font-weight: 500;
    font-size: 12px;
  `,
}
