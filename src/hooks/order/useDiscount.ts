import { useState, useEffect } from 'react';
import { getMemberCoupon } from 'src/apis/order/order';
import { getMemberPoint } from 'src/apis/order/order';
import { Coupon } from 'src/types/order/types';

const useDiscount = (orderedPrice: number) => {
  const [coupon, setCoupon] = useState<Coupon[]>();
  const [point, setPoint] = useState<number>();
  const [usedPoint, setUsedPoint] = useState<number>();

  useEffect(() => {
    // 적립금 데이터 불러오기
    getMemberPoint().then(res => {
      // console.log('point', res);
      setPoint(res);
      setUsedPoint(res);
    });
    // 쿠폰 데이터 불러오기
    getMemberCoupon().then(res => setCoupon(res));
  }, []);

  // 쿠폰이 선택되었을 때
  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>();
  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);

  useEffect(() => {
    if (!coupon) return;

    const selectedOption = coupon.find(
      coupon => coupon.couponId === selectedCouponId,
    );
    if (discountedPrice) {
      setDisabledPointBtn(false);
      setDisabledCouponBtn(false);
    }
    setSelectedCoupon(selectedOption || null);
    setDisabledPointBtn(selectedOption ? true : false);
  }, [selectedCouponId, coupon]);

  // 쿠폰 선택할 때
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

  // 최종 할인된 가격 계산
  const calculateDiscountedCouponPrice = (fullPrice: number) => {
    if (selectedCoupon === null) {
      setDiscountedPrice(0);
    }
    if (selectedCoupon && selectedCoupon.couponPolicy === 'FIXED') {
      setDiscountedPrice(selectedCoupon.fixedPrice);
    } else if (selectedCoupon && selectedCoupon.couponPolicy === 'RATE') {
      const price = fullPrice * (selectedCoupon.rateAmount / 100);
      setDiscountedPrice(price);
    }
  };

  useEffect(() => {
    calculateDiscountedCouponPrice(orderedPrice);
  }, [selectedCoupon]);

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
    handlePointChange,
    handleSelectedCoupon,
    disabledPointBtn,
    disabledCouponBtn,
    discountedPrice,
    finalPrice,
    calculateDiscountedCouponPrice,
    calculateDiscountedPointPrice,
  };
};

export default useDiscount;
