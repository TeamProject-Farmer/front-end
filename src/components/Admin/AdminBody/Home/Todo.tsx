import Styled from './styles';

const Todo = () => {

  const TodoList = [
    { text: '결제대기', id: 0 },
    { text: '배송대기', id: 1 },
    { text: '배송중', id: 2 },
    { text: '배송완료', id: 3 },
    { text: '반품신청/완료', id: 4 },
    { text: '교환신청/완료', id: 5 },
    { text: '환불신청/완료', id: 6 },
  ];
  return (
    <Styled.TodoWrapper>
      {TodoList.map((item) => (
        <Styled.TodoCol key={item.id}>
          <Styled.TodoUpperRow >{item.text}</Styled.TodoUpperRow>
          <Styled.TodoLowerRow>0</Styled.TodoLowerRow>
        </Styled.TodoCol>
      ))}
    </Styled.TodoWrapper>
  );
};

export default Todo;
