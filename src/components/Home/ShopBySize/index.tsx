import Styled from './styles';
import Icon from '@components/Common/Icon';
import { useState } from 'react';
import { sizeCategory } from 'src/utils/home/category';
import Link from 'next/link';

const ShopPrev = () => {
  const [hoveredSize, setHoveredSize] = useState<string>();
  const [sizeBg, setSizeBg] = useState<string>('smallBg');

  const handleMouseEnter = (id: string, bg: string) => {
    setHoveredSize(id);
    setSizeBg(bg);
  };

  const handleMouseLeave = () => {
    setHoveredSize(null);
  };

  return (
    <Styled.Wrapper sizeBg={sizeBg}>
      <Styled.ContentBox>
        <Styled.Title>shop by size</Styled.Title>
        <Styled.SizeBox>
          {sizeCategory &&
            sizeCategory?.map(size => (
              <Link key={size.id} href={`/shop/bysize/${size.id}`}>
                <Styled.List
                  onMouseEnter={() => handleMouseEnter(size.id, size.bg)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hoveredSize === size.id ? (
                    <Icon name={size.hover} width={46} height={46} />
                  ) : (
                    <Icon name={size.src} width={46} height={46} />
                  )}
                  {size.id}
                </Styled.List>
              </Link>
            ))}
        </Styled.SizeBox>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default ShopPrev;
