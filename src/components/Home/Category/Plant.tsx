import styled from '@emotion/styled';
import Image from 'next/image';

const Plant = ({ name, src }) => {
  return (
    <Styled.Wrapper>
      <Image
        src={`/assets/images/home/${src}.png`}
        alt={name}
        width={169}
        height={212}
        style={{ objectFit: 'contain' }}
      />
      <Styled.Name>{name}</Styled.Name>
    </Styled.Wrapper>
  );
};

export default Plant;

const Styled = {
  Wrapper: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Name: styled.p`
    font-size: 20px;
    margin-top: 15px;
  `,
};
