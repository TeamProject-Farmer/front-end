import styled from '@emotion/styled';

interface PropsList {
  title: string;
}

const Title = (props: PropsList) => {
  const { title } = props;
  return <Styled.Wrapper>{title}</Styled.Wrapper>;
};

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    color: #1a1c1e;
    font-size: 16px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.064px;
    margin: 16px 0 18px 0;
  `,
};
export default Title;
