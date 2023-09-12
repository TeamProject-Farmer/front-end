import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Plant = ({ name, src }) => {
  return (
    <Link href={`/shop/${name}`}>
      <Styled.Wrapper>
        <Image
          src={src}
          alt={name}
          width={169}
          height={212}
          style={{ objectFit: 'contain' }}
        />
        <Styled.Name>{name}</Styled.Name>
      </Styled.Wrapper>
    </Link>
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
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
  `,
};
