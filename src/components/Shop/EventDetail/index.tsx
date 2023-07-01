import styled from '@emotion/styled';
import Item from '../Common/Item';

const EventDetail = () => {
  return <div>
    {/* 데이터가 어떻게 넘어오냐에 따라 다를 것 같음 */}
    <Item number={1} image='이미지' contentTitle='상품명' pricePercent={20} totalPrice='10,000' reviewScore={4.8} totalReview='1,105'></Item>
  </div>;
}

export default EventDetail;