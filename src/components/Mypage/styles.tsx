import styled from '@emotion/styled';
import theme from '@styles/theme';
import More from '@assets/images/mypage/more.svg';
import OptionButton from '@assets/images/mypage/option.svg';

export const Styled = {
  Container: styled.div`
    width: 1920px;
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
    margin-bottom: 2rem;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: ${props => props.margin}rem;
  `,
  TextBox: styled.div`
    height: 340px;
    border-radius: 20px;
    border: 1px solid black;
  `,
  HeaderFlexDiv: styled.div`
    display: flex;
    justify-content: space-between;
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
    flex-shrink: 1;
    margin-left: 3.5rem;
  `,
  NameText: styled.h1`
    font-size: 20px; // 한줄 초과로 인한 폰트사이즈 자체 수정
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
    cursor: pointer;
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
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.mypageGray};
  `,
  CheckWrapper: styled.div`
    margin-left: 12.5rem;
    margin-right: 12.5rem;
  `,
  NoneListWrapper: styled.div`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    gap: 2rem;
    height: 35rem;
  `,
  Checkbox: styled.div`
    display: flex;
    height: 6rem;
    border-radius: 12px;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    align-items: center;
    margin-top: 0.9rem;
  `,
  SearchInput: styled.select`
    background-color: ${theme.colors.white};
    cursor: pointer;
    padding: 0 60px;
    height: 2.3rem;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.mypageGray};
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `,
  OPtionIcon: styled(OptionButton)`
    margin-left: -40px;
    align-self: center;
    cursor: pointer;
    pointer-events: none;
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
  NoneText: styled.h1`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: ${theme.colors.mypageGray};
    /* margin-top: 2.5rem;
    margin-bottom: 2.5rem; */
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ListInfoText: styled.h1<{ size?: string; color?: string }>`
    font-size: ${props => props.size}px;
    font-weight: 400;
    color: ${props => props.color};
    text-align: center;
  `,
  ListSpan: styled.span`
    font-size: 12px;
    font-weight: 300;
    color: #5b5b5b;
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
  FlexCartRow: styled.div`
    display: grid;
    background-color: ${theme.colors.green3};
    grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 1.5fr;
    justify-items: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  `,
  CartRow: styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 1.5fr;
    justify-items: center;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    /* margin-bottom: 2rem; */
    border-bottom: 1px solid ${theme.colors.borderGray};
  `,
  CartListRow: styled.div`
    width: 100px;
    height: 100px;
    background-color: '#D9D9D9';
  `,
  CartCheckBox: styled.input`
    width: '16px';
    height: '16px';
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
  QuantityContainer: styled.div`
    display: flex;
    border-color: #b9b9b9;
    border-radius: 6px;
    border-width: 1px;
    padding: 8px;
    align-items: center;
  `,
  QuantityButton: styled.button`
    font-size: 23px;
    color: #454545;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: pointer;
  `,
  QuantityText: styled.span`
    margin: 0 14px;
    font-size: 15px;
    color: ${theme.colors.black};
  `,
  CartCommonButton: styled.button<{
    backgroundColor: string;
    padding: string;
    width: string;
  }>`
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding}rem;
    width: ${props => props.width}px;
    border-radius: 40px;
    align-items: center;
  `,
  ButtonText: styled.h1<{ size: string; color: string; weight: string }>`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    font-weight: ${props => props.weight};
  `,
  CartOrderBox: styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    background-color: ${theme.colors.cartButtonGray};
    padding: 1.7rem;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    border-radius: 42px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 6rem;
  `,
  OrderText: styled.h1`
    font-size: 15px;
    font-weight: 300;
    color: ${theme.colors.black};
    span {
      font-weight: 500;
      font-size: 19px;
    }
  `,
  ProductInfoWrapper: styled.div``,
  ProductName: styled.h1`
    /* Add styles for ProductName */
  `,
  ProductDetails: styled.h1`
    /* Add styles for ProductDetails */
  `,
  ProductButton: styled.button`
    background-color: ${theme.colors.green4};
    color: ${theme.colors.black};
    font-size: 17px;
    font-weight: 300;
    height: 35px;
    padding: 0 15px;
    margin-top: 1rem;
    margin-right: 10px;
  `,
  ReviewButton: styled.button`
    background-color: ${theme.colors.pointGreen};
    color: ${theme.colors.white};
    font-size: 17px;
    font-weight: 300;
    height: 35px;
    padding: 0 15px;
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
    padding: 2.5rem 8rem;
  `,
  PlantCard: styled.div`
    /* margin-left: 2.5rem;
    margin-right: 2.5rem; */
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
    gap: 2.5rem;
  `,

  // 쿠폰 페이지
  Coupon: styled.div`
    border-bottom: 1px solid ${theme.colors.gray};
    margin-left: 2.5rem;
  `,
  CouponText: styled.h1`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.black};
  `,
  CouponBox: styled.div`
    height: 500px;
    border-radius: 20px;
    margin-bottom: 8rem;
  `,
  CouponHeader: styled.div`
    display: flex;
    margin-top: 2.5rem;
    margin-left: 2.5rem;
    justify-content: space-between;
    background-color: ${theme.colors.green3};
    padding: 1.5rem;
  `,
  HeaderLabel: styled.h1`
    font-size: 15px;
    margin-right: 6.3rem;
    margin-left: 7.3rem;
    color: ${theme.colors.white};
    font-weight: 600;
  `,
  CouponTextWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
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
  ErrorText: styled.h1`
    font-size: 12px;
    font-weight: 500;
    color: #fd6666;
    margin-left: 1rem;
  `,

  // calendar
  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
  `,

  //새로 추가된 부분
  EmptyCart: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    font-size: 20px;
    font-weight: 700;
    color: #606367;
    padding-top: 50px;
  `,
};
