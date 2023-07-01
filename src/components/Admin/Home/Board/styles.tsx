import styled from '@emotion/styled';

const Styled = {
  TotalWrapper: styled.div`
    width: 1200px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  `,
  Wrapper: styled.div`
    width: 584px;
    height: 304px;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    width: 100%;
    height: 58px;
    border-radius: 5px 5px 0 0;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 21.18px;
    align-items: center;
    justify-content: space-between;

    color: #000;
    font-size: 12px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    line-height: 140%;
  `,
  Title: styled.div`
    font-weight: 500;
  `,
  AllButton: styled.div`
    font-weight: 400;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 8px 0;
  `,
  SingleContent: styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    line-height: 140%;
    padding-left: 20px;
    padding-right: 22px;
    //임시로 hover시 이펙트 넣었습니다!
    &:hover {
      box-shadow: 0px 2px 2px 0px rgba(151, 151, 151, 0.198);
    }
  `,
  ContentTitle: styled.div`
    color: #000;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
  `,
  ContentDate: styled.div`
    color: #8a8a8a;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
  `,
};

export default Styled;
