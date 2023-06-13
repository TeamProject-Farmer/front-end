import Styled from './styles'
import Title from '../common/Title'
import Plant from './Plant'

const plantsData = [
  {id: 1, name: '다육이', src: 'plant'},
  {id: 2, name: '선인장', src: 'plant'},
  {id: 3, name: '스킨답서스', src: 'plant'},
  {id: 4, name: '야자목', src: 'plant'},
  {id: 5, name: '키움용품', src: 'plant'},
]

const Category = () => {
  return (
    <Styled.Wrapper>
      <Title title='카테고리'/>
      <Styled.Plants>
        {
          plantsData.map((plant) => (
            <Plant key={plant.id} name={plant.name} src={plant.src} />
          ))
        }
      </Styled.Plants>
    </Styled.Wrapper>
  )
}

export default Category
