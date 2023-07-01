import styled from '@emotion/styled';
import Title from '../Common/Title';
import Todo from './Todo';
import Analytics from './Analytics';
import Board from './Board';

const Home = () => {
  return (
    <Styled.Wrapper>
      <Title title='오늘의 할 일'/>
      <Todo />
      <Title title='통계'/>
      <Analytics />
      <Title title='게시판'/>
      <Board />
    </Styled.Wrapper>
    
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-bottom: 20px;
    cursor: pointer;
  `,

};
export default Home;
