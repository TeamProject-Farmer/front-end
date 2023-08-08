import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import TotalStarGauge from '@components/Shop/Common/gauge/TotalStarGauge';
import share from '@assets/images/shop/shareIcon.svg';
import star from '@assets/images/shop/panelFilledStar.svg';
import blank from '@assets/images/shop/blankStar.svg';
import checkIcon from '@assets/images/shop/checkIcon.svg';
import boxIcon from '@assets/images/shop/boxIcon.svg';
import down from '@assets/images/shop/downloadIcon.svg';
import arrow from '@assets/images/shop/optionArrow.svg';
import { getDetail } from 'src/apis/shop/product';
import { getReview } from 'src/apis/shop/review';
import { useSelector } from 'react-redux';
import { idSelector, PanelProps } from 'src/types/shop/types';

const Panel = () => {
  const productId = useSelector(idSelector);
  const [detailList, setDetailList] = useState<PanelProps>();
  const [totalStar, setTotalStar] = useState(0);

  const handleDetailData = async () => {
    const response = await getDetail(productId);
    setDetailList(response);
  };
  const handleReviewData = async () => {
    const response = await getReview(productId, 'best');
    setTotalStar(response.totalElements);
  };

  useEffect(() => {
    handleDetailData();
    handleReviewData();
  }, []);
  
  let like: number = 4;
  const filledStar = <Styled.Star />;
  const blankStar = <Styled.BlankStar />;
  const maxStars = 5;
  let stars = (
    <Styled.StarWrapper>
      {Array.from({ length: maxStars }, (_, index) =>
        index < like ? filledStar : blankStar,
      )}
    </Styled.StarWrapper>
  );
  const tempOptionList = [
    { id: '01', price: '0', menu: '피쉬본 단품' },
    { id: '02', price: '1,500', menu: '피쉬본 단품+심플화분' },
    { id: '03', price: '3,000', menu: '피쉬본 단품+심플화분+영양제' },
    { id: '04', price: '5,000', menu: '피쉬본 선물세트(화분+영양제+포장)' },
  ];
  return (
    <Styled.Wrapper>
      <Styled.InnerBox>
        <Styled.ImageBox>
          <Image
            src={detailList.thumbnailImg}
            alt="temp"
            className="imageStyle"
            width={548.55}
            height={547.55}
          ></Image>
        </Styled.ImageBox>
        <Styled.ContentWrapper>
          <Styled.TitleWrapper>
            <div>{detailList.name}</div>
            <Styled.ShareButton></Styled.ShareButton>
          </Styled.TitleWrapper>
          <Styled.Review>
            {/* <Styled.StarWrapper>{stars}</Styled.StarWrapper> */}
            <Styled.StarWrapper>
              <TotalStarGauge star={4.7} />
            </Styled.StarWrapper>

            <div>{totalStar}개의 리뷰</div>
          </Styled.Review>
          <Styled.PriceWrapper>
            <Styled.OriginPrice>
              <div>{detailList.discountRate}%</div>
              <div>{detailList.price}</div>
            </Styled.OriginPrice>
            <Styled.CurrentPrice>
              <div>
                <div>{detailList.price}~</div>
                <button>특가</button>
              </div>
              <button>
                쿠폰받기
                <Styled.DownLoadIcon />
              </button>
            </Styled.CurrentPrice>
          </Styled.PriceWrapper>
          <Styled.ShipmentWrapper>
            <Styled.EachShip>
              <Styled.EachShipTitle>혜택</Styled.EachShipTitle>
              <Styled.ShipCommonBox>
                <div>23P</div>
                <div>적립</div>
              </Styled.ShipCommonBox>
            </Styled.EachShip>
            <Styled.EachShip>
              <Styled.EachShipTitle>배송</Styled.EachShipTitle>
              <Styled.EachShipContent>
                <Styled.ShipCommonBox>
                  <div>3000원</div>
                  <div>선결제</div>
                </Styled.ShipCommonBox>
                <div>일반택배</div>
                <Styled.ShipCheck>
                  <div>
                    <Styled.CheckIcon />
                    <div>지역별 차등 배송비</div>
                  </div>
                  <div>
                    <Styled.CheckIcon />
                    <div>제주도/도서산간 지역 3,000원</div>
                  </div>
                </Styled.ShipCheck>
                <Styled.ExpectShip>
                  <Styled.BoxIcon />
                  <div>4/26(수)</div>
                  <div>도착 예정</div>
                </Styled.ExpectShip>
              </Styled.EachShipContent>
            </Styled.EachShip>
          </Styled.ShipmentWrapper>
          <Styled.VerticalLine />
          <Styled.OptionWrapper>
            <div>옵션</div>
            <Styled.OptionArrow />
            <Styled.Select>
              {tempOptionList.map((item, index) => (
                <Styled.Options key={index}>
                  <div>
                    {item.id}. {item.menu}
                  </div>
                  <div>+{item.price}원</div>
                </Styled.Options>
              ))}
            </Styled.Select>
          </Styled.OptionWrapper>
          <Styled.TotalPriceWrapper>
            <div>주문금액</div>
            <div>0원</div>
          </Styled.TotalPriceWrapper>
          <Styled.ButtonWrapper>
            <button>구매하기</button>
            <button>장바구니</button>
          </Styled.ButtonWrapper>
        </Styled.ContentWrapper>
      </Styled.InnerBox>
    </Styled.Wrapper>
  );
};
const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 712px;
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    align-items: center;
    justify-content: center;
  `,
  InnerBox: styled.div`
    width: ${theme.size.mainWidth};
    display: flex;
    justify-content: space-between;
  `,
  ImageBox: styled.div`
    width: 548.55px;
    height: 547.55px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    margin-right: 56px;
    overflow: hidden;
    .imageStyle {
      width: auto;
      height: auto;
      object-fit: cover;
    }
  `,
  ContentWrapper: styled.div`
    width: 548px;
    color: ${theme.colors.black};
    & > div {
      margin-bottom: 8px;
    }
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 35px;
    font-weight: 500;
  `,
  ShareButton: styled(share)`
    width: 20px;
    height: 25px;
  `,
  Review: styled.div`
    display: flex;
    & > div:last-child {
      font-size: 12px;
      font-weight: 600;
    }
  `,
  StarWrapper: styled.div`
    width: 115px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
    & > img {
      width: 19px;
      height: 19.43px;
    }
    & > * > span {
      margin-right: 0px !important;
    }
  `,
  Star: styled(star)``,
  BlankStar: styled(blank)``,

  PriceWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  OriginPrice: styled.div`
    margin-bottom: 8px;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: #585858;
    & > div:last-child {
      text-decoration: line-through;
      color: #b3b3b3;
    }
  `,
  CurrentPrice: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 700;
    & > div {
      display: flex;
      align-items: center;
    }

    & > div > button {
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 500;
      width: 38px;
      height: 23px;
      border-radius: 3px;
      background-color: #33b822;
      margin-left: 17px;
    }
    & > button:last-child {
      color: ${theme.colors.white};
      font-size: 16px;
      width: 116px;
      height: 35px;
      border-radius: 5px;
      background-color: #59b941;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  DownLoadIcon: styled(down)`
    margin-left: 6px;
  `,

  ShipmentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    color: #585858;
    font-weight: 400;
    font-size: 16px;
    & > div {
    }
  `,
  EachShip: styled.div`
    display: flex;
    & > div {
      display: flex;
    }
  `,
  EachShipTitle: styled.div`
    width: 46px;
    margin-bottom: 8px;
  `,
  EachShipContent: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ShipCommonBox: styled.div`
    display: flex;
    font-size: 16px;
    margin-bottom: 6px;
    & > div:first-child {
      font-weight: 600;
      margin-right: 4px;
      color: ${theme.colors.black};
    }
    & > div:nth-child(2) {
      font-weight: 400;
    }
  `,
  ShipCheck: styled.div`
    display: flex;
    margin-top: 11px;
    margin-left: 1px;
    & > div {
      margin-right: 19px;
      font-size: 12px;
      display: flex;
      align-items: center;
      & > svg:first-child {
        margin-right: 6px;
      }
    }
  `,
  CheckIcon: styled(checkIcon)``,
  ExpectShip: styled.div`
    width: 502px;
    height: 41px;
    border-radius: 5px;
    margin-top: 11px;
    margin-bottom: 15px;
    background-color: var(--4, #ecf9e9);
    display: flex;
    align-items: center;
    & > div:nth-child(2) {
      color: #33b822;
      font-size: 16px;
      font-weight: 600;
      margin-right: 5px;
    }
    & > div:last-child {
      color: #010101;
      font-size: 14px;
      font-weight: 300;
    }
  `,
  BoxIcon: styled(boxIcon)`
    margin-left: 14px;
    margin-right: 9px;
  `,
  VerticalLine: styled.hr`
    width: 100%;
    height: 1px;
    background-color: #585858;
    border: none;
  `,

  OptionWrapper: styled.div`
    color: #000;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    margin-left: 25px;
    align-items: center;
    justify-content: space-between;
    & > div {
      margin-top: 15px;
    }
    position: relative;
  `,
  //css 부분을 좀 더 커스텀하기 위해서는 div로 하거나 라이브러리를 사용해야할 것 같은데
  //아직 정확하게 나온 디자인이 없어서 우선은 임시로 select로 해놨습니다.

  Select: styled.select`
    width: 433px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    margin-top: 15px;
    appearance: none;
    /* 이 부분은 아직 디자인 나온게 없어서 임시로 설정해뒀습니다. */
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
  `,
  Options: styled.option``,
  OptionArrow: styled(arrow)`
    position: absolute;
    top: 50%;
    right: 17px;
  `,
  TotalPriceWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 18px;
    margin-top: 38px;
    margin-bottom: 15px;
    & > div:first-child {
      font-size: 16px;
      font-weight: 600;
    }
    & > div:last-child {
      text-align: right;
      font-size: 25px;
      font-weight: 600;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    & > button {
      display: flex;
      width: 270px;
      height: 60px;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 25px;
      font-weight: 700;
    }
    & > button:first-child {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green1};
    }
    & > button:last-child {
      color: ${theme.colors.green1};
      background-color: #ecf9e9;
    }
  `,
};
export default Panel;
