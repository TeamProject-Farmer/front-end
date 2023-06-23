import Styled from './styles';
import {statusBoxPropsList} from '@components/Admin/Type'

const StatusBox = (props: statusBoxPropsList) => {
  const { title, first, second, third, last, checkBox } = props;

  if (checkBox) {
    return (
      <Styled.InnerBoxWrapper>
        {/* <Styled.BodyPartCheckBox></Styled.BodyPartCheckBox> */}
        <Styled.InnerBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>구매날짜: {first}</Styled.Content>
          <Styled.Content>구매자: {second}</Styled.Content>
          <Styled.Content>구매번호: {third}</Styled.Content>
          <Styled.LastContent>현재 상태: {last}</Styled.LastContent>
        </Styled.InnerBox>
        <Styled.CheckBoxLabel htmlFor={title}>
          <Styled.CheckBoxInput type="checkbox" id={title} name={title} />
        </Styled.CheckBoxLabel>
      </Styled.InnerBoxWrapper>
    );
  } else {
    return (
      <Styled.InnerBoxWrapper>
        <Styled.InnerBox>
        <Styled.Title>{title}</Styled.Title>
          <Styled.Content>구매날짜: {first}</Styled.Content>
          <Styled.Content>구매자: {second}</Styled.Content>
          <Styled.Content>구매번호: {third}</Styled.Content>
          <Styled.LastContent>현재 상태: {last}</Styled.LastContent>
        </Styled.InnerBox>
      </Styled.InnerBoxWrapper>
    );
  }
};

export default StatusBox;
