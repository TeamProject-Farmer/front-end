import { useEffect } from 'react';
import Image from 'next/image';
import Styled from './styles';
import DetailOption from './DetailOption';
import FooterButtonWrapper from '../../FooterButtonWrapper';
import SmallButton from '../../FooterButtonWrapper/SmallButton';

interface PropsList {
  id: number;
  modalClose: () => void;
}
const ManageProduct = (props: PropsList) => {
  const { id, modalClose } = props;
  const close = modalClose;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Styled.ModalWrapper top={window.scrollY}>
        <Styled.ModalBox>
          <Styled.Header>
            <div>상품 관리</div>
            <Styled.CloseIcon onClick={close} />
          </Styled.Header>
          <Styled.Body>
            <Styled.UpperWrapper>
              <Styled.TempImage />
              <Styled.RowWrapper>
                <Styled.Row>
                  <Styled.UpperTitle>상품명</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
                <Styled.Row>
                  <Styled.UpperTitle>카테고리</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
                <Styled.Row>
                  <Styled.UpperTitle>가격</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
                <Styled.Row>
                  <Styled.UpperTitle>할인율</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
                <Styled.Row>
                  <Styled.UpperTitle>수량</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
                <Styled.Row>
                  <Styled.UpperTitle>상품코드</Styled.UpperTitle>
                  <Styled.UpperContent></Styled.UpperContent>
                </Styled.Row>
              </Styled.RowWrapper>
            </Styled.UpperWrapper>
            <Styled.BodyTitle>상품 옵션 설정</Styled.BodyTitle>
            <DetailOption />
            <FooterButtonWrapper>
              <SmallButton text="추가" />
              <SmallButton text="수정" />
              <SmallButton text="삭제" />
            </FooterButtonWrapper>
            <Styled.BodyTitle>상세이미지 추가</Styled.BodyTitle>
            <Styled.AddImageWrapper>
              <Styled.AddImageButton>
                <Styled.ImageIcon />
              </Styled.AddImageButton>
              <Styled.AddImageButton>
                <Styled.ImageIcon />
              </Styled.AddImageButton>
              <Styled.AddImageButton>
                <Styled.ImageIcon />
              </Styled.AddImageButton>
              <Styled.AddIconWrapper>
                <Styled.AddIcon></Styled.AddIcon>
              </Styled.AddIconWrapper>
            </Styled.AddImageWrapper>
            <Styled.BodyTitle>상품 상세설명 편집</Styled.BodyTitle>
            <Image
              src="/assets/images/admin/postEditor.png"
              alt="editorImage"
              width={950}
              height={570}
              style={{ objectFit: 'contain' }}
            />
          </Styled.Body>
          <Styled.Footer>
            <Styled.Button>저장</Styled.Button>
            <Styled.Button onClick={close}>취소</Styled.Button>
          </Styled.Footer>
        </Styled.ModalBox>
      </Styled.ModalWrapper>
    </>
  );
};

export default ManageProduct;
