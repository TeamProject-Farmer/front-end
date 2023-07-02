import styled from '@emotion/styled';
import theme from '@styles/theme';
import More from '@assets/images/mypage/more.svg';

export const Styled = {
  Container: styled.div`
    width: 100%;
  `,

  SplitLine: styled.div`
    margin-top: 15px;
    border-bottom: 2px solid ${theme.colors.green1};
    margin-bottom: 2.5rem;
  `,

  // profile
  BoxWrapper: styled.div<{ margin?: string }>`
    margin-left: 12.5rem;
    margin-right: 12.5rem;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: ${props => props.margin}rem;
  `,
  TextBox: styled.div`
    height: 340px;
    border-radius: 20px;
    border: 1px solid black;
  `,
  HeaderDiv: styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
  `,
  HeaderText: styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-left: 2.5rem;
    color: ${theme.colors.black};
  `,
  EditButton: styled.button`
    margin-right: 3.5rem;
    border-radius: 8px;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 500;
    height: 35px;
    background-color: ${theme.colors.green1};
    color: ${theme.colors.white};
  `,
  ProfileWrapper: styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.8rem;
    margin-left: 3rem;
  `,
  ProfileTextWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 9rem;
  `,
  InfoWrapper: styled.div`
    margin-left: 3.5rem;
  `,
  NameText: styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: ${theme.colors.black};
    span {
      color: ${theme.colors.pointGreen};
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.8rem;
    gap: 1rem;
  `,
  AccumulatedAmountText: styled.h1`
    font-size: 14px;
    margin-top: 3px;
    margin-bottom: 2rem;
    font-weight: 400;
    span {
      color: ${theme.colors.green2};
    }
  `,
  SubText: styled.h1`
    font-size: 15px;
    font-weight: 400;
    color: ${theme.colors.black};
  `,
  NumberText: styled.h1`
    font-size: 30px;
    font-weight: 400;
    color: ${theme.colors.black};
  `,
  Line: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid ${theme.colors.lightGray};
    width: 220px;
    height: 130px;
  `,
  FlexDiv: styled.div`
    display: flex;
  `,

  // 문구 배너
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 180px;
    background-color: ${theme.colors.green3};
    border-radius: 20px;
    padding: 3rem;
  `,
  h1Text: styled.h1<{ size?: string }>`
    font-size: 25px;
    color: ${theme.colors.white};
    font-weight: ${props => props.size};
  `,

  // 목록 리스트
  More: styled(More)`
    margin-right: 3.5rem;
    cursor: pointer;
  `,
  ListWrapper: styled.div`
    margin-top: 1.5rem;
    margin-left: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  ListDiv: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 1.25rem;
    gap: 0.2rem;
  `,
  Title: styled.h1<{ size?: string }>`
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.black};
    margin-top: ${props => props.size}rem;
  `,
  ReviewText: styled.h1`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.green4};
  `,

  // 구매 목록 페이지 *
  ListText: styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin-bottom: 2rem;
  `,
  CheckButton: styled.button`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 500;
    padding: 0 110px;
    height: 60px;
    margin-bottom: 1.5rem;
  `,
  InfoText: styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.mypageGray};
  `,
  CheckWrapper: styled.div`
    margin-left: 12.5rem;
    margin-right: 12.5rem;
  `,
  Checkbox: styled.div`
    display: flex;
    height: 6rem;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    align-items: center;
    margin-top: 2.5rem;
  `,
  SearchInput: styled.input`
    background-color: ${theme.colors.white};
    padding: 0 40px;
    height: 2.3rem;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.black};
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  TitleText: styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.black};
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  `,
  ListInfoText: styled.h1<{ size?: string; color?: string }>`
    font-size: ${props => props.size}px;
    font-weight: 500;
    color: ${props => props.color};
  `,
  FlexRow: styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1.5fr;
    justify-items: center;
    align-items: center;
    border-top: 1px solid ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.black};
    padding-top: 1rem;
    padding-bottom: 1rem;
  `,
  FlexRowCenter: styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1.5fr;
    justify-items: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 8rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid ${theme.colors.black};
  `,
  Image: styled.div`
    background-color: slategray;
    width: 150px;
    height: 150px;
  `,
  ProductInfoWrapper: styled.div``,
  ProductName: styled.h1`
    /* Add styles for ProductName */
  `,
  ProductDetails: styled.h1`
    /* Add styles for ProductDetails */
  `,
  ProductButton: styled.button`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    height: 35px;
    padding: 0 20px;
    margin-top: 1rem;
  `,

  // MyPlants
  MyPlantsButton: styled.button<{ size?: string }>`
    margin-right: ${props => props.size}rem;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 500;
    height: 30px;
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
  `,
  CardBox: styled.div<{ size: string }>`
    height: ${props => props.size}px;
    border-radius: 20px;
    border: 1px solid black;
    margin-bottom: 8rem;
  `,
  PlantCard: styled.div`
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-top: 3rem;
    width: 250px;
    height: 370px;
    border: 1px solid ${theme.colors.black};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  `,
  PlantImage: styled.div`
    width: 200px;
    height: 170px;
    background-color: #489be3;
  `,
  CardWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  // 쿠폰 페이지
  CouponWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-top: 2rem;
  `,
  Coupon: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  CouponText: styled.h1`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.black};
    margin-top: 0.8rem;
  `,

  // 프로필 수정
  InputGroup: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2.5rem;
    margin-top: 1.8rem;
  `,
  InputLabel: styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.black};
    margin-right: 2rem;
    width: 100px;
    span {
      color: ${theme.colors.pointGreen};
      margin-left: 2px;
      vertical-align: middle;
    }
  `,
  Input: styled.input<{ edit?: boolean }>`
    width: 300px;
    height: 40px;
    background: ${props =>
      props.edit ? theme.colors.white : theme.colors.lightGray};
    border-radius: 4px;
    border: ${props =>
      props.edit ? `1px solid ${theme.colors.borderGray}` : 'none'};
    padding: 20px;
    font-size: 15px;
    font-weight: 500;
    color: ${theme.colors.black};
  `,
  InputWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
  `,
};
