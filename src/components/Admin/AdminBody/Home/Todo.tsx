import Styled from './styles';
import {TodoList} from '@components/Admin/ArrayItem'

const Todo = () => {
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
