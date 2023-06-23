import { useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import ProductInnerBox from './ProductInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import WarningModal from '@components/Admin/Common/Modal/WarningModal';
import ManageProduct from '@components/Admin/Common/Modal/ManageProduct';

const ProductrBody = () => {
  const [modalOpen, setModalOpen] = useState(0);

  const openModal = () => {
    setModalOpen(1);
  };
  const openModal2 = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  }

  const tempTItle: string = '스칸답서스';
  const tempDate: string = '2023-04-01';
  const tempCategory: string = '공기정화식물 > 관엽식물';
  const tempPrice: number = 50000;
  const tempDiscount: number = 61;
  const tempProductCode: string = '20230401 - 00000001';

  return (
    <>
    {modalOpen === 2 ? <ManageProduct id={0} modalClose={closeModal} /> : null}
      {modalOpen === 1 ? (
        <WarningModal
          title="상품"
          content="상품은"
          modalOpen={modalOpen}
          modalClose={closeModal}
        />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab text="신상품순" />
            <SingleTab text="낮은가격순" />
            <SingleTab text="높은가격순" />
            <SingleTab text="판매량순" />
          </>
        }
        innerBoxProps={
          <ProductInnerBox
            title={tempTItle}
            date={tempDate}
            category={tempCategory}
            price={tempPrice}
            discount={tempDiscount}
            productCode={tempProductCode}
          />
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal2}/>
            <SmallButton text="수정" />
            <SmallButton text="삭제"  modalOpen={openModal}/>
          </>
        }
      />
    </>
  );
};

export default ProductrBody;
