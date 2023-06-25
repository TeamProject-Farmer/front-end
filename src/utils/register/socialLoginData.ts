// 카카오
const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const REDIRECT_URI = 'http://localhost:3000/login/kakao'; // 추후 배포 주소로 변경 예정
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

// 네이버

// 구글
