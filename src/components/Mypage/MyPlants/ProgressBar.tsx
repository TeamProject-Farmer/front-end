import React, { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Button from '@assets/images/mypage/button.svg';

// 프로그레스바 issue
// 1. 아직 정확하게 정해진 기능 아님
// 2. UI 확정 아님
// 3. 남근님께서 임시로 틀 정도만 잡아달라고 하셔서 임시 구현*

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
`;

const ProgressBarFill = styled.div<{ progress?: number }>`
  height: 100%;
  background-color: ${theme.colors.black};
  border-radius: 10px;
  width: ${props => props.progress}%;
`;

const ProgressBarButton = styled(Button)<{ progress?: number }>`
  position: absolute;
  top: 10px;
  left: ${props => props.progress}%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(50); // 초기 프로그레스 값

  const handleButtonDrag = e => {
    const progressBarWidth = e.currentTarget.parentElement.offsetWidth;
    const clickPositionX =
      e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left;
    const newProgress = Math.round((clickPositionX / progressBarWidth) * 100);

    if (newProgress >= 0 && newProgress <= 100) {
      setProgress(newProgress);
    }
  };

  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progress} />
      <ProgressBarButton
        progress={progress}
        onMouseDown={e => e.preventDefault()}
        onMouseMove={handleButtonDrag}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
