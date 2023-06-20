import styled from '@emotion/styled'
import theme from '@styles/theme'

const Indicator = ({activeIndex, sliderContents, onclick}) => {
  console.log(activeIndex)
  return (
    <Style.Indicator>
      {
        sliderContents.map((content) => (
          <Style.List 
            key={content.id}
            selected={content.id === activeIndex ? true: false}
            onClick={() => onclick(content.id)}
          >
            {content.title}
          </Style.List>
        ))
      }
    </Style.Indicator>
  )
}

export default Indicator

const Style = {
  Indicator: styled.ul`
    position: absolute;
    left: 705px;
    bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 154px;
  `,
  List: styled.li<{selected: boolean}>`
    position: relative;
    font-size: 20px;
    font-weight: ${({selected}) => (selected? '700' : '400')};
    color: ${({selected}) => (selected? theme.colors.green1 : '#000')};
    :not(:last-child)::before {
      content: '';
      position: absolute;
      display: block;
      background-color: #000;
      width: 125px;
      height: 2px;
      top: 50%;
      left: 120%;
    }
  `
}
