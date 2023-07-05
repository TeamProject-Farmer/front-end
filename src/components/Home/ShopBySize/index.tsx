import Styled from './styles';
import Icon from '@components/Common/Icon';
import { useState } from 'react';

const category = [
  {id: 'small', src: 'smallBtn', hover: 'smallBtn_w'},
  {id: 'medium', src: 'mediumBtn', hover: 'mediumBtn_w'},
  {id: 'large', src: 'largeBtn', hover: 'largeBtn_w'},
]

const ShopPrev = () => {
  const [hoveredSize, setHoveredSize] = useState(null)

  const handleMouseEnter = (id) => {
    setHoveredSize(id)
  }

  const handleMouseLeave = () => {
    setHoveredSize(null)
  }

  return (
    <Styled.Wrapper>
      <Styled.ContentBox>
        <Styled.Title>shop by size</Styled.Title>
        <Styled.SizeBox>
          {
            category.map((size) => (
              <Styled.List 
                key={size.id} 
                onMouseEnter={() => handleMouseEnter(size.id)} 
                onMouseLeave={handleMouseLeave}
              >
                {
                  hoveredSize === size.id ?
                    <Icon name={size.hover} width={46} height={46}/>
                  : <Icon name={size.src} width={46} height={46}/> 
                }
            {size.id}
          </Styled.List>
            ))
          }
        </Styled.SizeBox>
      </Styled.ContentBox>
    </Styled.Wrapper>
  );
};

export default ShopPrev;
