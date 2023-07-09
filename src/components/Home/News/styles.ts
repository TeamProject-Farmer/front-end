import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 1920px;
    height: 830px;
    display: flex;
    background-image: url('/assets/images/home/newsBg.png');
    background-repeat: no-repeat;
    background-position: center bottom;
  `,
  Title: styled.p`
    position: absolute;
    top: -45px;
    left: 1047px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 120px;
    color: #E8F4EE;
  `,
  ImgBox: styled.div`
    width: 1032px;
    height: 567.21px;
    background-color: ${theme.colors.green3};
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px 30px 0px;
    position: relative;
    flex-shrink: 0;
    z-index: 1;
    padding-top: 77px;
    padding-left: 369px;
  `,
  FlexBox: styled.div`
    display: flex;
    justify-content: space-between;
    width: 553px;
    margin-bottom: 10px;
  `,
  ImgTitle: styled.p`
    font-weight: 600;
    font-size: 25px;
    color: #fff;
  `,
  ShopBtn: styled.p`
    border: 1px solid #fff;
    border-radius: 20px;
    font-weight: 400;
    font-size: 15px;
    color: #fff;
    padding: 7px 9px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContentBox: styled.div`
    flex-shrink: 0;
    width: 1099px;
    height: 567.21px;
    background-color: #6D9363;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 30px 0px 0px 30px;
    transform: translate(-211px, 82px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  `,
  ContentTitle: styled.p`
    width: 409px;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  `,
  Content: styled.p`
    width: 409px;
    height: 356.5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    overflow-y: scroll;
    padding-right: 22px;
    &::-webkit-scrollbar {
      padding: 0 5px;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #3D5437;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      border: 3px solid #3D5437;
    }
  `,
};

export default Styled;
