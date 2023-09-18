import styled from '@emotion/styled';
import { AnalysticsTab } from '../../../utils/admin/ArrayItem';

const Analytics = () => {
  return (
    <Styled.TempWrapper>
      <Styled.Wrapper>
        <Styled.TabWrapper>
          {AnalysticsTab.map(item => (
            <Styled.SingleTab key={item.id}>{item.title}</Styled.SingleTab>
          ))}
        </Styled.TabWrapper>
        <Styled.Content>
          {/* 그래프 넣을 것 같은데, 백/디자인 담당자분이랑 넣을지 말지 논의할 예정 */}
        </Styled.Content>
      </Styled.Wrapper>
      <Styled.Wrapper></Styled.Wrapper>
    </Styled.TempWrapper>
  );
};

const Styled = {
  TempWrapper: styled.div`
    width: 1200px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
  `,
  Wrapper: styled.div`
    width: 584px;
    height: 328px;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
  `,
  TabWrapper: styled.div`
    width: 100%;
    height: 58px;
    border-radius: 5px 5px 0 0;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    & > div:first-of-type {
      border-radius: 5px 0 0 0;
    }
    &:last-of-type {
      border-radius: 0 5px 0 0;
    }
  `,
  Content: styled.div`
    flex-grow: 1;
  `,
  SingleTab: styled.div`
    flex-grow: 1;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-bottom: 2px solid #1a1c1e;
    }
  `,
};

export default Analytics;
