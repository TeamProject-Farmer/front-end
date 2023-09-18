import { useState, useEffect } from 'react';
import { getCoupon, getPoint } from 'src/apis/order/order';
import { Coupon } from 'src/types/order/types';
import { getTokens } from 'src/utils/token/token';
// import { getOrderPageInfo, myPromiseAll } from '../../apis/order/order';
import { OrderedData } from 'src/types/order/types';
import { useQuery, useQueries } from '@tanstack/react-query';
const useDiscount = (orderedPrice?: number) => {
  // const { data: point } = useQuery({
  //   queryKey: 'point',
  //   queryFn: getMemberPoint,
  // });
  // const { data: coupon } = useQuery({
  //   queryKey: 'coupon',
  //   queryFn: getMemberCoupon,
  // });

  const [usedPoint, setUsedPoint] = useState<number>();

  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>();

  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);

  const [pointData, couponData] = useQueries({
    queries: [
      {
        queryKey: ['point'],
        queryFn: getPoint,
        onSuccess: (data: number) => setUsedPoint(data),
      },
      { queryKey: ['coupon'], queryFn: getCoupon },
    ],
  });

  const { data: point } = pointData;
  const { data: coupon } = couponData;

  // 쿠폰이 선택되었을 때
  useEffect(() => {
    if (!coupon) return;

    const selectedOption = coupon.find(
      coupon => coupon.memberCouponId === selectedCouponId,
    );
    setSelectedCoupon(selectedOption || null);
    setDisabledPointBtn(!!selectedOption);
  }, [selectedCouponId, coupon]);

  useEffect(() => {
    if (selectedCoupon === null) {
      setDiscountedPrice(0);
    } else if (selectedCoupon?.couponPolicy === 'FIXED') {
      setDiscountedPrice(selectedCoupon.fixedPrice);
    } else if (selectedCoupon?.couponPolicy === 'RATE') {
      const price = orderedPrice * (selectedCoupon.rateAmount / 100);
      setDiscountedPrice(price);
    }
  }, [selectedCoupon, orderedPrice]);

  const handleSelectedCoupon = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = Number(event.target.value);
    setSelectedCouponId(selectedValue);
  };

  // 적립금을 입력할 때
  const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedPoint = Number(event.target.value);
    setUsedPoint(typedPoint);

    if (selectedCouponId === 0) {
      setDisabledPointBtn(false);
    }
  };

  const calculateDiscountedPointPrice = () => {
    let updatedDiscountedPrice = usedPoint;

    if (usedPoint > point) {
      alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
      updatedDiscountedPrice = point;
    } else if (usedPoint < 2000) {
      alert('적립금 최소 사용금액은 2000원입니다.');
      updatedDiscountedPrice = point;
    } else if (coupon !== null) {
      setDisabledCouponBtn(true);
    }

    setUsedPoint(updatedDiscountedPrice);
    setDiscountedPrice(updatedDiscountedPrice);
  };

  //최종 가격 계산
  const finalPrice = isNaN(orderedPrice - discountedPrice)
    ? orderedPrice
    : orderedPrice - discountedPrice;
  return {
    coupon,
    usedPoint,
    selectedCouponId,
    handlePointChange,
    handleSelectedCoupon,
    disabledPointBtn,
    disabledCouponBtn,
    discountedPrice,
    finalPrice,
    calculateDiscountedPointPrice,
  };
};

export default useDiscount;
