import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { userToken } from 'src/types/shop/types';

const checkIsMember = () => {
  const router = useRouter();
  const token = useSelector(userToken);

  const coupon = () => {
    if (token === ''){
      alert('로그인 후 사용 가능한 기능입니다.')
      router.replace('/login');
    }
    else alert('신규 가입 쿠폰이 발급되었습니다.');
  };
  
  const routeToLogin = () => {
    if (token === ''){
      alert('로그인 후 사용 가능한 기능입니다.')
      router.replace('/login');
    }
  }
  return {coupon, routeToLogin}
}

export default checkIsMember;