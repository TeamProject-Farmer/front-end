import React, { useEffect, useState } from 'react';
import { Styled } from '../styles';
import InputGroup from './InputGroup';
import { getEdit } from 'src/apis/mypage/editProfile';
import { useDispatch } from 'react-redux';
import { setUserNickname } from 'store/reducers/userSlice';
import { useRouter } from 'next/router';

const Row = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // 중복확인 사이클 관리
  useEffect(() => {
    if (duplicate) {
      setDuplicate(false);
    }
  }, [nickname]);

  // 마이페이지 프로필 수정
  const handleEdit = async () => {
    try {
      const response = await getEdit({ nickname, password });

      console.log(nickname);
      dispatch(setUserNickname(nickname));

      console.log(response.data);
      router.push('/mypage');
    } catch (err) {
      if (err.response.data.message === '해당 닉네임이 존재합니다.') {
        setDuplicate(true);
      }
    }
  };

  return (
    <Styled.BoxWrapper>
      <Styled.CardBox size="350">
        <Styled.HeaderFlexDiv>
          <Styled.HeaderText />
          <Styled.EditButton onClick={handleEdit}>수정하기</Styled.EditButton>
        </Styled.HeaderFlexDiv>

        <InputGroup
          nickname={nickname}
          setNickname={setNickname}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
          duplicate={duplicate}
        />
      </Styled.CardBox>
    </Styled.BoxWrapper>
  );
};

export default Row;
