import styled from '@emotion/styled';
import theme from '@styles/theme';
import closeIcon from '@assets/images/Admin/closeIcon.svg';
import imageIcon from '@assets/images/Admin/imageIcon.svg';
import addIcon from '@assets/images/Admin/circleAddButton.svg';

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
    width: 961px;
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
    //figma에는 17px로 되어있는데 svg에는 19px라고 되어있음 어떤걸 해야하는건지 모르겠음
    object-fit: contain;
    position: absolute;
    right: 20px;
  `,

  Body: styled.div`
    width: 100%;
    /* height: 635px; */
    height: 650px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
  `,
  UpperWrapper: styled.div`
    display: flex;
  `,
  TempImage: styled.div`
    width: 265px;
    height: 306px;
    background: #d9d9d9;
  `,
  AddImageWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 907px;
    height: 145px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  AddImageButton: styled.button`
    width: 233px;
    height: 134px;
    background: #d9d9d9;
    margin: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ImageIcon: styled(imageIcon)`
    width: 32px;
    height: 32px;
    object-fit: contain;
  `,
  AddIconWrapper: styled.button`
    flex-grow: 1;
    display: flex;
  justify-content: center;
  margin: 7px;
    `,
  AddIcon: styled(addIcon)`
    width: 50px;
    height: 50px;
  `,
  RowWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Row: styled.div`
    display: flex;
    margin-bottom: 15px;
  `,
  UpperTitle: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    width: 90px;
    margin-left: 25px;
    display: flex;
    align-items: center;
  `,
  UpperContent: styled.input`
    width: 535px;
    height: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  BodyTitle: styled.div`
    margin-top: 20px;
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
