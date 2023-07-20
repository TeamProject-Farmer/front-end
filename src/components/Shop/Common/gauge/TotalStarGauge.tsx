import Styled from './styles';
import { useEffect, useState } from 'react';

const TotalStarGauge = ({ star }: {star: number}) => {
  const starIndex = ['first', 'second', 'third', 'fourth', 'last'];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let tempStar = star;
    for (let i = 0; i < 5; i++) {
      tempStar > 1
        ? (tempStarRatesArr[i] = 21)
        : (tempStarRatesArr[i] = 20 * tempStar);
      tempStar -= 1;
    }
    return tempStarRatesArr;
  };
  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);

  return (
    <Styled.StarRateWrap>
      {starIndex.map((item, idx) => {
        return (
          <span className="star_icon" key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="#D9D9D9"
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="23" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M11.102 1.83338C11.4678 1.08657 12.5322 1.08657 12.8981 1.83338L15.4764 7.0972C15.6214 7.39311 15.9028 7.59862 16.2288 7.64663L22.009 8.49801C22.8265 8.61842 23.1535 9.62217 22.5637 10.201L18.3731 14.3142C18.1394 14.5436 18.0328 14.8728 18.0877 15.1956L19.0752 20.9974C19.2144 21.8154 18.3543 22.4373 17.6211 22.0488L12.4683 19.3181C12.1754 19.1629 11.8246 19.1629 11.5317 19.3181L6.37892 22.0488C5.64574 22.4373 4.78562 21.8154 4.92484 20.9974L5.9123 15.1956C5.96724 14.8728 5.86065 14.5436 5.62695 14.3142L1.43629 10.201C0.846549 9.62217 1.17352 8.61842 1.99105 8.49801L7.77123 7.64663C8.09721 7.59862 8.37861 7.39311 8.52356 7.0972L11.102 1.83338Z"
                transform="translate(-2 -2)"
              />
              <use
                clipPath={`url(#${item}StarClip)`}
                href={`#${item}Star`}
                fill="#33B822"
              />
            </svg>
          </span>
        );
      })}
    </Styled.StarRateWrap>
  );
};

export default TotalStarGauge;
