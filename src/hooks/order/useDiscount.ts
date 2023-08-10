import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getMemberCoupon } from 'src/apis/order/order';
import { getMemberPoint } from 'src/apis/order/order';
import { ICoupon } from 'src/types/order/types';

const useDiscount = (
  setTotalAmount: Dispatch<SetStateAction<number>>,
  price: number,
) => {
  const [coupon, setCoupon] = useState<ICoupon[]>();
  const [point, setPoint] = useState<number>();
  const [usedPoint, setUsedPoint] = useState<number>();

  useEffect(() => {
    // 적립금 데이터 불러오기
    getMemberPoint().then(res => {
      setPoint(res);
      setUsedPoint(res);
    });
    // 쿠폰 데이터 불러오기
    getMemberCoupon().then(res => setCoupon(res));
  }, []);

  // 쿠폰이 선택되었을 때
  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<ICoupon | null>();
  const [disabledCouponBtn, setDisabledCouponBtn] = useState(false);
  const [disabledPointBtn, setDisabledPointBtn] = useState(false);

  const handleSelectedCoupon = (
    event: React.ChangeEvent<HTMLOptionElement>,
  ) => {
    const selectedValue = Number(event.target.value);
    setSelectedCouponId(selectedValue);
    getDiscountedPrice();
    // 쿠폰을 선택하지 않았을 때
    if (selectedValue === 0) {
      setDisabledPointBtn(false);
    }
  };

  useEffect(() => {
    if (!coupon) return;

    const selectedOption = coupon.find(
      coupon => coupon.couponId === selectedCouponId,
    );
    setSelectedCoupon(selectedOption || null);
    setDisabledPointBtn(selectedOption ? true : false);
    setDisabledCouponBtn(selectedOption ? false : true);
  }, [selectedCouponId, coupon]);

  // 적립금을 적용할 때
  const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedPoint = Number(event.target.value);
    setUsedPoint(typedPoint);

    if (selectedCouponId === 0) {
      setDisabledPointBtn(false);
    }
  };

  // 최종 할인된 가격 계산
  const [discountedPrice, setDiscountedPrice] = useState<number>();

  const getDiscountedPrice = () => {
    if (selectedCoupon !== null) {
      setDisabledCouponBtn(false);
    } else {
      // setDiscountedPrice(usedPoint);
      setDisabledCouponBtn(true);
    }
  };

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

  const calculateDiscountedPointPrice = () => {
    let updatedDiscountedPrice = null;

    if (usedPoint > point) {
      alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
      setUsedPoint(point);
      updatedDiscountedPrice = point;
    } else if (usedPoint < 2000) {
      alert('적립금 최소 사용금액은 2000원입니다.');
      setUsedPoint(point);
      updatedDiscountedPrice = point;
    } else if (usedPoint >= 2000 && usedPoint <= point) {
      updatedDiscountedPrice = usedPoint;
    }

    setDiscountedPrice(updatedDiscountedPrice);
  };

  useEffect(() => {
    calculateDiscountedCouponPrice(price);
  }, [selectedCoupon]);

  //최종 가격 계산
  const getFinalPrice = (productPrice: number) => {
    const finalPrice = isNaN(productPrice - discountedPrice)
      ? productPrice
      : productPrice - discountedPrice;
    // setTotalAmount(finalPrice);
    return finalPrice;
  };
  return {
    coupon,
    usedPoint,
    handlePointChange,
    handleSelectedCoupon,
    disabledPointBtn,
    disabledCouponBtn,
    getDiscountedPrice,
    discountedPrice,
    getFinalPrice,
    calculateDiscountedCouponPrice,
    calculateDiscountedPointPrice,
  };
};

export default useDiscount;
