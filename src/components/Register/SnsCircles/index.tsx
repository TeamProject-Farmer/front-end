import Styled from '../styles';
import Google from '@assets/images/login/google.svg';
import Kakao from '@assets/images/login/kakao.svg';
import Naver from '@assets/images/login/naver.svg';
import Link from 'next/link';
import { KAKAO_AUTH_URL } from 'src/utils/login/socialLoginData';

// 백엔드 소셜로그인 기능 구현되면 API 적용 예정
const SnsCircles = () => {
  return (
    <Styled.IconWrapper>
      <Google className="cursor-pointer" />

      {/* 카카오 로그인 */}
      <Link href={KAKAO_AUTH_URL}>
        <Kakao className="cursor-pointer" />
      </Link>

      <Naver className="cursor-pointer" />
    </Styled.IconWrapper>
  );
};

export default SnsCircles;
