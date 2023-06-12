import Image from 'next/image';

import Styled from './styles';

interface PropsList {
  imageName: string;
  menuName: string;
  router: string;
}

const SiderBarMenu = (props: PropsList) => {
  const { imageName, menuName, router } = props;
  const imageUrl = `/assets/images/admin/${imageName}.png`;

  return router == `/admin/${imageName}` ? (
    <>
      <Styled.ActiveMenuWrapper>
        <Styled.MenuImageBox>
          <Image
            src={imageUrl}
            alt="HomeIcon"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Styled.MenuImageBox>
        <Styled.MenuText>{menuName}</Styled.MenuText>
      </Styled.ActiveMenuWrapper>
    </>
  ) : router == '/admin' && imageName == 'home' ? (
    <>
      <Styled.ActiveMenuWrapper>
        <Styled.MenuImageBox>
          <Image
            src="/assets/images/admin/home.png"
            alt="HomeIcon"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Styled.MenuImageBox>
        <Styled.MenuText>{menuName}</Styled.MenuText>
      </Styled.ActiveMenuWrapper>
    </>
  ) : (
    <>
      <Styled.MenuWrapper>
        <Styled.MenuImageBox>
          <Image
            src={imageUrl}
            alt="HomeIcon"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Styled.MenuImageBox>
        <Styled.MenuText>{menuName}</Styled.MenuText>
      </Styled.MenuWrapper>
    </>
  );
};

export default SiderBarMenu;
