import { useState, useEffect } from 'react';
import { getCoupon, getPoint } from 'src/apis/order/order';
import { Coupon } from 'src/types/order/types';
import { useQueries } from '@tanstack/react-query';

const useDiscount = (orderedPrice: number) => {
  const [usedPoint, setUsedPoint] = useState<number>();

  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>();

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

  const { data: points } = pointData;
  const { data: couponList } = couponData;

  // 쿠폰이 선택되었을 때
  useEffect(() => {
    if (!couponList) return;

    const selectedOption = couponList.find(
      coupon => coupon.memberCouponId === selectedCouponId,
    );
    setSelectedCoupon(selectedOption);
  }, [selectedCouponId]);

  useEffect(() => {
    if (selectedCoupon === null) {
      setDiscountedPrice(0);
    } else if (selectedCoupon?.couponPolicy === 'FIXED') {
      setDiscountedPrice(selectedCoupon.fixedPrice);
    } else if (selectedCoupon?.couponPolicy === 'RATE') {
      const price = orderedPrice * (selectedCoupon.rateAmount / 100);
      setDiscountedPrice(price);
    }
  }, [selectedCoupon]);

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
  };

  const calculateDiscountedPointPrice = () => {
    let updatedDiscountedPrice = usedPoint;

    if (usedPoint > points) {
      alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
      updatedDiscountedPrice = points;
    } else if (usedPoint < 2000) {
      alert('적립금 최소 사용금액은 2000원입니다.');
      updatedDiscountedPrice = points;
    }

    setUsedPoint(updatedDiscountedPrice);
    setDiscountedPrice(updatedDiscountedPrice);
  };

  //최종 가격 계산
  const finalPrice = isNaN(orderedPrice - discountedPrice)
    ? orderedPrice
    : orderedPrice - discountedPrice;
  return {
    couponList,
    usedPoint,
    selectedCouponId,
    handlePointChange,
    handleSelectedCoupon,
    discountedPrice,
    finalPrice,
    calculateDiscountedPointPrice,
  };
};

export default useDiscount;
