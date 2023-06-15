import Styled from './styles';

const Todo = () => {
  const TodoList =['결제대기','배송대기','배송중','배송완료','반품신청/완료','교환신청/완료','환불신청/완료'];
  return (
    <Styled.TodoWrapper>
      {TodoList.map((item)=>(<Styled.TodoCol><Styled.TodoUpperRow key={item}>{item}</Styled.TodoUpperRow><Styled.TodoLowerRow>0</Styled.TodoLowerRow></Styled.TodoCol>))}
    </Styled.TodoWrapper>
  )
}

export default Todo