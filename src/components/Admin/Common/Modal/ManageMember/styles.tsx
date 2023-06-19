import styled from '@emotion/styled';
import theme from '@styles/theme';
import closeIcon from '@assets/images/admin/closeIcon.svg';
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
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
  `,
  BodyTitle: styled.div`
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
  BodyTable: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ababab;
    border-left: 1px solid #ababab;
    margin-bottom: 50px;
  `,
  Row: styled.div`
    display: flex;
    width: 100%;
  `,
  CellTitle: styled.div`
    flex-grow: 1;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding: 28px;
    border-bottom: 1px solid #ababab;
    border-right: 1px solid #ababab;
  `,
  CellContent: styled.div`
    width: 654px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ababab;
    border-right: 1px solid #ababab;
    padding: 7px;
  `,
  SmallBlank: styled.input`
    width: 87px;
    height: 42px;
    margin: 7px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  NormalBlank: styled.input`
    width: 621px;
    height: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-radius: 5px;
  `,
  BlankBetween: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 5px;
    display: flex;
    align-items: center;
  `,
  Select: styled.select`
    width: 621px;
    height: 42px;
    border: 1px solid #000000;
    border-radius: 5px;
  `,
  Option: styled.option`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
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

  TotalWrapper: styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    background: #fbfbfb;
    border-left: 1px solid #ababab;
    border-top: 1px solid #ababab;
    border-radius: 5px;
    overflow: hidden;
  `,
  TotalCol: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  `,
  TotalUpperRow: styled.div`
    width: 100%;
    display: flex;
    flex-grow: 4;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
  TotalLowerRow: styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  `,
};

export default Styled;
