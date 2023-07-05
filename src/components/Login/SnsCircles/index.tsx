import { socialLoginData } from 'src/utils/login/socialLoginData';
import Styled from '../../Register/styles';
import Link from 'next/link';

const SnsCircles = () => {
  return (
    <Styled.IconWrapper>
      {socialLoginData.map(item => (
        <Link key={item.url} href={item.url}>
          <item.icon className="cursor-pointer" />
        </Link>
      ))}
    </Styled.IconWrapper>
  );
};

export default SnsCircles;
