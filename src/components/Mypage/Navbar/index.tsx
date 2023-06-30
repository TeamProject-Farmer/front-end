import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navbarItems } from 'src/utils/mypage/navbar';
import { Styled } from '../styles';

const navbarStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between; // 디자이너 분들 컨펌 못받으면 다시 수정
  margin-top: 15px;
  padding: 0 200px;
`;

const navbarItemStyles = (isActive: boolean) => css`
  color: ${isActive ? 'rgba(89, 185, 65, 1)' : 'inherit'};
  font-weight: ${isActive ? '900' : '500'};
`;

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav css={navbarStyles}>
        {navbarItems.map(item => {
          const isActive = router.pathname === item.link;
          return (
            <Link key={item.title} href={item.link}>
              <a css={navbarItemStyles(isActive)}>{item.title}</a>
            </Link>
          );
        })}
      </nav>
      <Styled.SplitLine />
    </>
  );
};

export default Navbar;
