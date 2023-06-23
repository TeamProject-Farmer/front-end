import { useState } from 'react';
import Styled from './styles';
import FooterButtonWrapper from '../../Common/FooterButtonWrapper';
import MiddleButton from '../../Common/MiddleButton';
import BannerImage from '@components/Admin/Common/Modal/ManageHome/BannerImage';

const Banner = () => {
  const [modalOpen, setModalOpen] = useState(0);

  const openModal = () => {
    setModalOpen(3);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  return (
    <>
      {modalOpen === 3 ? <BannerImage id={0} modalClose={closeModal} /> : null}
      <Styled.BannerWrapper>
        <Styled.BannerContainer>
          <Styled.TempImgBox />
          <Styled.TempImgBox />
          <Styled.TempImgBox />
        </Styled.BannerContainer>
        <FooterButtonWrapper>
          <MiddleButton text="배너 편집" modalOpen={openModal} />
        </FooterButtonWrapper>
      </Styled.BannerWrapper>
    </>
  );
};

export default Banner;
