import styled from '@emotion/styled';

interface Props {
  size?: number;
  star: number;
  color?: string;
}
const TestStar = (props: Props) => {
  const {size, star, color} = props;

  const ratingToPercent = () => {
    const score = star * 20;
    return score;
  };

  return (
    <Styled.StarRateWrap>
      <Styled.StarRateFill style={{ width: ratingToPercent() + '%' }} >
        {(() => {
          const array = [];
          for (let i = 0; i < 5; i++)
            array.push(
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={size? size: 23}
                  height={size? size: 23}
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M11.102 1.83338C11.4678 1.08657 12.5322 1.08657 12.8981 1.83338L15.4764 7.0972C15.6214 7.39311 15.9028 7.59862 16.2288 7.64663L22.009 8.49801C22.8265 8.61842 23.1535 9.62217 22.5637 10.201L18.3731 14.3142C18.1394 14.5436 18.0328 14.8728 18.0877 15.1956L19.0752 20.9974C19.2144 21.8154 18.3543 22.4373 17.6211 22.0488L12.4683 19.3181C12.1754 19.1629 11.8246 19.1629 11.5317 19.3181L6.37892 22.0488C5.64574 22.4373 4.78562 21.8154 4.92484 20.9974L5.9123 15.1956C5.96724 14.8728 5.86065 14.5436 5.62695 14.3142L1.43629 10.201C0.846549 9.62217 1.17352 8.61842 1.99105 8.49801L7.77123 7.64663C8.09721 7.59862 8.37861 7.39311 8.52356 7.0972L11.102 1.83338Z"
                    fill={color? color: "#33b822"}
                  />
                </svg>
              </span>,
            );
          return array;
        })()}
      </Styled.StarRateFill>
      <Styled.StarRateBase>
        {(() => {
          const array = [];
          for (let i = 0; i < 5; i++)
            array.push(
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={size? size: 23}
                  height={size? size: 23}
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M11.102 1.83338C11.4678 1.08657 12.5322 1.08657 12.8981 1.83338L15.4764 7.0972C15.6214 7.39311 15.9028 7.59862 16.2288 7.64663L22.009 8.49801C22.8265 8.61842 23.1535 9.62217 22.5637 10.201L18.3731 14.3142C18.1394 14.5436 18.0328 14.8728 18.0877 15.1956L19.0752 20.9974C19.2144 21.8154 18.3543 22.4373 17.6211 22.0488L12.4683 19.3181C12.1754 19.1629 11.8246 19.1629 11.5317 19.3181L6.37892 22.0488C5.64574 22.4373 4.78562 21.8154 4.92484 20.9974L5.9123 15.1956C5.96724 14.8728 5.86065 14.5436 5.62695 14.3142L1.43629 10.201C0.846549 9.62217 1.17352 8.61842 1.99105 8.49801L7.77123 7.64663C8.09721 7.59862 8.37861 7.39311 8.52356 7.0972L11.102 1.83338Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>,
            );
          return array;
        })()}
      </Styled.StarRateBase>
    </Styled.StarRateWrap>
  );
};

const Styled = {
  StarRateWrap: styled.div`
    position: relative;
    width: max-content;
  `,
  StarRateFill: styled.div`
    color: #33b822;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    gap: 3px;
    top: 0;
    left: 0;
    overflow: hidden;    
  `,
  StarRateBase: styled.div`
    display: flex;
    gap: 3px;
    z-index: 0;
    padding: 0;
  `,
};

export default TestStar;
