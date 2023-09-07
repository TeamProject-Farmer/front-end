import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navbarItems } from 'src/utils/mypage/navbar';
import { Styled } from '../../styles';

const navbarStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  padding: 0 200px;
`;

const navbarItemStyles = (isActive: boolean) => css`
  color: ${isActive ? 'rgba(89, 185, 65, 1)' : 'inherit'};
  margin-right: 5.5rem;
  font-weight: '500';
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
              <span css={navbarItemStyles(isActive)}>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <Styled.SplitLine />
    </>
  );
};

export default Navbar;
