import { useState, useEffect } from 'react';
import { getMemberCoupon, getMemberPoint } from 'src/apis/order/order';
import { Coupon } from 'src/types/order/types';

const useDiscount = (orderedPrice: number) => {
  const [point, setPoint] = useState<number>();
  const [usedPoint, setUsedPoint] = useState<number>();

  const [coupon, setCoupon] = useState<Coupon[]>();
  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>();

  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pointData, couponData] = await Promise.all([
          getMemberPoint(),
          getMemberCoupon(),
        ]);
        setPoint(pointData);
        setUsedPoint(pointData);
        setCoupon(couponData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
