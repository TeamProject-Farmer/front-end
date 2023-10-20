import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoupon } from 'src/apis/order/order';
import { Coupon } from 'src/types/order/types';

const useCoupon = (orderedPrice: number) => {
  const { data: couponList } = useQuery({
    queryKey: ['coupon'],
    queryFn: getCoupon,
  });

  const [selectedCouponId, setSelectedCouponId] = useState<number>(0);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>();
  const [discountedPrice, setDiscountedPrice] = useState<number>();

  const handleSelectedCoupon = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = Number(event.target.value);
    setSelectedCouponId(selectedValue);
  };

  useEffect(() => {
    if (!couponList) return;
    const selectedOption = couponList.find(
      coupon => coupon.memberCouponId === selectedCouponId,
    );
    setSelectedCoupon(selectedOption);
  }, [selectedCouponId]);

  useEffect(() => {
    if (selectedCoupon === undefined) {
      setDiscountedPrice(0);
    } else if (selectedCoupon?.couponPolicy === 'FIXED') {
      console.log('fixed');
      setDiscountedPrice(selectedCoupon.fixedPrice);
    } else if (selectedCoupon?.couponPolicy === 'RATE') {
      const price = orderedPrice * (selectedCoupon.rateAmount / 100);
      setDiscountedPrice(price);
    }
  }, [selectedCoupon]);

  return {
    couponList,
    selectedCouponId,
    handleSelectedCoupon,
    discountedPrice,
  };
};

export default useCoupon;
