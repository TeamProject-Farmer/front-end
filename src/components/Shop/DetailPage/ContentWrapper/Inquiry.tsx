import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { idSelector } from 'src/types/shop/types';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import secret from '@assets/images/shop/secretIcon.svg';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import OnOffButton from './OnOffButton';
// import MiniModal from '@components/Common/MiniModal';
import QnAModal from '@components/Common/MiniModal/QnAModal';
import { getQnAList, getMyQnA } from 'src/apis/shop/qna';
import { QnAProps } from 'src/types/shop/types';

const Inquiry = () => {
  const productId = useSelector(idSelector);
  const [detailList, setDetailList] = useState([]);
  const [myDetailList, setMyDetailList] = useState([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleQnAList = async () => {
    const response = await getQnAList(productId);
    // const mine = await getMyQnA();
    setDetailList(response.content);
    // setMyDetailList(mine.content)
    // "message": "토큰을 다시 확인해주세요",
    // 토큰값이 없어서 생기는 에러가 뜨면 로그인이나 회원가입을 하게 분기처리 해주면 될 것 같습니다.
  };
  useEffect(() => {
    handleQnAList();
  }, [productId])
  const handleNickname = (str: string) =>{
      let originStr = str;
      let maskingStr ='';
      let strLength = originStr.length;
      
      if(strLength < 3){
        maskingStr = originStr.replace(/(?<=.{1})./gi, "*");
      }else {
        maskingStr = originStr.replace(/(?<=.{2})./gi, "*");
      }
      return maskingStr;
  }
  console.log('inquiryPage productId: '+ productId)
  console.log('inquiryPage detailList')
  console.log(detailList)
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {modalOpen === true ? (
          <QnAModal
            modalName="문의하기"
            modalClose={closeModal}
            setModalOpen={setModalOpen}
          />
        ) : null}
        <Styled.Title>
          <div>
            <div>문의</div>
            <div>{detailList.length}</div>
          </div>
          <Styled.MyInQuiry>
            <span>내 문의글 보기</span>
            <OnOffButton />
            <Styled.OpenModalButton onClick={openModal}>
              문의하기
            </Styled.OpenModalButton>
          </Styled.MyInQuiry>
        </Styled.Title>
        {detailList.map(item => (
          <Styled.Single key={item.qnaId}>
            <div>
              <div>구매</div>
              <VerticalLine height={13.5} />
              <div>상품</div>
              <VerticalLine height={13.5} />
              <div>미답변</div>
            </div>
            <div>
              <div>{handleNickname(item.memberName)}</div>
              <VerticalLine height={15} />
              <div>{item.qcreatedDate}</div>
            </div>
            {item.secretQuestion == 'SECRET' ? (
              <Styled.Question>
                <div>Q</div>
                <Styled.SecretIcon />
                <div>비밀글입니다.</div>
              </Styled.Question>
            ) : (
              <Styled.OpenQuestion>
                <div>Q</div>
                <div>
                  <div>{item.option}</div>
                  <div>{item.content}</div>
                </div>
              </Styled.OpenQuestion>
            )}
          </Styled.Single>
        ))}
      </Styled.Container>
      {/* 백엔드에서 데이터 어떻게 들어오는지 보고 결정해야할 것 같음 */}
      {/* <div>페이지네이션 들어갈 부분</div> */}
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: ${theme.size.shopDetailWidth};
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  `,
  Container: styled.div`
    border-bottom: 1px solid ${theme.colors.green1};
    margin-bottom: 33px;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:first-child > div:last-child {
      color: #47ac3a;
      margin-left: 6px;
    }
  `,
  MyInQuiry: styled.div`
    & > span {
      font-size: 16px;
      font-weight: 500;
      color: ${theme.colors.pointGreen};
      margin-right: 10px;
    }
  `,
  OpenModalButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    width: 95px;
    height: 32px;
    border-radius: 5px;
    background-color: ${theme.colors.pointGreen};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  `,
  Single: styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    flex-direction: column;
    & > div {
      display: flex;
      gap: 3px;
    }
  `,
  OpenQuestion: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-content: center;
    margin-bottom: 26px;
    & > div {
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
    & > div > div {
      display: flex;
      flex-direction: column;
    }
  `,
  Question: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    margin-bottom: 26px;
  `,
  SecretIcon: styled(secret)``,
};
export default Inquiry;
