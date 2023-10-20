import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPoint } from 'src/apis/order/order';

const usePoint = () => {
  const [typedPoint, setTypedPoint] = useState<number>();
  const [usedPoint, setUsedPoint] = useState<number>();

  const { data: point } = useQuery({
    queryKey: ['point'],
    queryFn: getPoint,
    onSuccess: (data: number) => setUsedPoint(data),
  });

  const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedPoint = Number(event.target.value);
    setTypedPoint(typedPoint);
  };

  const handlePointClick = () => {
    let updatedDiscountedPrice = typedPoint;

    if (typedPoint > point) {
      alert('최대로 사용할 수 있는 적립금을 초과하였습니다.');
      updatedDiscountedPrice = point;
    } else if (typedPoint < 2000) {
      alert('적립금 최소 사용금액은 2000원입니다.');
      updatedDiscountedPrice = point;
    }

    setUsedPoint(updatedDiscountedPrice);
  };

  return { typedPoint, usedPoint, handlePointChange, handlePointClick };
};

export default usePoint;
