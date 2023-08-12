import styled from '@emotion/styled';
import theme from '@styles/theme';
import { PaginationProps } from 'src/types/shop/types';
import rightArrow from '@assets/images/shop/rightArrow.svg';

const Pagination = (props: PaginationProps) => {
  const { currentIndex, setCurrentIndex, totalIndex, isExceptional } = props;
  if(isExceptional){
    return (
      <Styled.PaginationWrapper>
        {totalIndex == 0? <></> : <Styled.PaginationContainer>
          <Styled.ArrowButton direct='left' onClick={()=>setCurrentIndex(0)}><Styled.LeftArrow /></Styled.ArrowButton>
          {(() => {
            const array = [];
            for (let i = 1; i <= totalIndex; i++) array.push(<Styled.PageBox key={i} isActive={currentIndex+1 === i} onClick={()=>setCurrentIndex(i-1)}>{i}</Styled.PageBox>);
            return array;
          })()}
          <Styled.ArrowButton direct='right' onClick={()=>setCurrentIndex(totalIndex-1)}><Styled.RightArrow /></Styled.ArrowButton>
        </Styled.PaginationContainer>}
        
      </Styled.PaginationWrapper>
    );
  }else {
    return (
      <Styled.PaginationWrapper>
        {totalIndex == 0? <></> : <Styled.PaginationContainer>
          <Styled.ArrowButton direct='left' onClick={()=>setCurrentIndex(1)}><Styled.LeftArrow /></Styled.ArrowButton>
          {(() => {
            const array = [];
            for (let i = 1; i <= totalIndex; i++) array.push(<Styled.PageBox key={i} isActive={currentIndex === i} onClick={()=>setCurrentIndex(i)}>{i}</Styled.PageBox>);
            return array;
          })()}
          <Styled.ArrowButton direct='right' onClick={()=>setCurrentIndex(totalIndex)}><Styled.RightArrow /></Styled.ArrowButton>
        </Styled.PaginationContainer>}
      </Styled.PaginationWrapper>
      
    );
  }
  
};

const Styled = {
  PaginationWrapper: styled.div`
    margin-top: 33px;
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `,
  PaginationContainer: styled.div`
    display: flex;
      gap: 5px;
      align-items: center;
  `,
  PageBox: styled.div<{ isActive: boolean}>`
    width: 26px;
    height: 100%;
    border-radius: 3px;
    background-color: ${(props) => (props.isActive ? " #47ac3a" : "#fff")};
    color: ${(props) => (props.isActive ? " #fff" : "#000")};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
  `,
  ArrowButton: styled.div<{direct: string}>`
    width: 25px;
    height: 25px;
    border-radius: 4px;
    background: ${theme.colors.green1};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${(props) => (props.direct == 'left' ? '30px' : "")};
    margin-left: ${(props) => (props.direct == 'right' ? '30px' : "")};
  `,
  RightArrow: styled(rightArrow)`
    margin-left: 2px;
  `,
  LeftArrow: styled(rightArrow)`
    transform: scaleX(-1);
    margin-right: 1px;
  `,
};

export default Pagination;
