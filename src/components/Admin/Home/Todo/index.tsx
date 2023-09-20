import styled from '@emotion/styled';
import { TodoList } from '../../../../utils/admin/ArrayItem';

const Todo = () => {
  return (
    <Styled.Wrapper>
      <Styled.TableWrapper>
        {TodoList.map(item => (
          <Styled.Col key={item.id}>
            <Styled.UpperTable>{item.title}</Styled.UpperTable>
            {/* 하단의 현황 데이터는 추후 연동해서 데이터 받아오면 될 것 같음 */}
            <Styled.LowerTable>0</Styled.LowerTable>
          </Styled.Col>
        ))}
      </Styled.TableWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 1200px;
    height: 176px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #fff;
  `,
  TableWrapper: styled.div`
    width: 1152px;
    height: 128px;
    display: flex;
    color: #000;
    font-size: 14px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;

    line-height: 140%;
  `,
  Col: styled.div`
    flex-grow: 1;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    &:first-of-type {
      border-radius: 5px 0 0 5px;
      & > div:last-of-type {
        border-radius: 0 0 0 7px;
      }
    }
    &:last-of-type {
      border-radius: 0 5px 5px 0;
      & > div:last-of-type {
        border-radius: 0 0 5px 0;
      }
    }
  `,
  UpperTable: styled.div`
    background-color: #b9b9b933;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  `,
  LowerTable: styled.div`
    background-color: #fff;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  `,
};

export default Todo;
