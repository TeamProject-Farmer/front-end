import styled from '@emotion/styled';
import theme from '@styles/theme';
import closeIcon from '@assets/images/admin/closeIcon.svg';
import imageIcon from '@assets/images/admin/imageIcon.svg';


interface CssProps {
  top: number;
}
const Styled = {
  
  ModalWrapper: styled.div<CssProps>`
    position: absolute;
    top: ${props => props.top}px;
    overflow: hidden;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `,
  ModalBox: styled.div`
    margin-left: 400px;
    width: 1030px;
    height: fit-content;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div`
    width: 100%;
    height: 70px;
    background: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    position: relative;
  `,
  CloseIcon: styled(closeIcon)`
    object-fit: contain;
    position: absolute;
    right: 20px;
  `,

  Body: styled.div`
    width: 100%;
    height: 650px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  `,
  ImageWrapper: styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ImportButton: styled.button`
    width: 173.98px;
    height: 41.74px;
    margin-top: 17.8px;
    background: #ffffff;
    border: 1px solid #9e9e9e;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000000;
  `,
  ImageButton: styled.button`
    width: 220px;
    height: 150px;
    background: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ImageIcon: styled(imageIcon)`
    width: 32px;
    height: 32px;
    object-fit: contain;
  `,
  UpperWrapper: styled.div`
    height: 150px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  `,
  UpperBox: styled.div`
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  `,
  UpperTitle: styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  `,
  LongInput: styled.input`
    width: 642px;
    height: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  SmallInput: styled.input`
    width: 300px;
    height: 41px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  BetweenInput: styled.div`
    margin: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  `,
  BodyTitle: styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
  `,

  Footer: styled.div`
    width: 100%;
    height: 78px;
    background: #e5e5e5;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Button: styled.button`
    width: 162.4px;
    height: 29px;
    background: #ffffff;
    border: 1px solid #9e9e9e;
    &:first-child {
      margin-right: 17px;
    }
  `,
};

export default Styled;
