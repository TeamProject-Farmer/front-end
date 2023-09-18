import Image from 'next/image';
import styled from '@emotion/styled';
import CurrentTime from '../CurrentTime';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.SearchBar>
        {/*후에 검색 기능 넣으면 될 것 같음 */}
        <Styled.SearchIcon>
          <Image
            src="/assets/images/admin/searchIcon.svg"
            alt="searchIcon"
            width={24.7}
            height={25}
          ></Image>
        </Styled.SearchIcon>
        <Styled.SearchInput placeholder="검색"></Styled.SearchInput>
      </Styled.SearchBar>
      <Styled.SideWrapper>
        <Image
          src="/assets/images/admin/remind.svg"
          alt="icon"
          width={26}
          height={26}
        ></Image>
        <Image
          src="/assets/images/admin/settingIcon.svg"
          alt="icon"
          width={26}
          height={26}
        ></Image>
        <CurrentTime />
      </Styled.SideWrapper>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: calc((100%) - 240px);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `,
  SearchBar: styled.label`
    width: 320px;
    height: 40px;
    border-radius: 40px;
    /* border: 1px solid gray; */
    padding-left: 50px;
    position: relative;
    font-size: 16px;
    /* font-family: Spoqa Han Sans Neo; */
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    &::placeholder {
      color: #b9b9b9;
    }
  `,
  SearchIcon: styled.button`
    position: absolute;
    left: 13px;
    width: 43px;
    height: 100%;
    border-radius: 30px 0 0 30px;
  `,
  SearchInput: styled.input`
    width: 100%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    outline: none;
  `,
  SideWrapper: styled.div`
    margin-right: 10px;
    display: flex;
    & > img {
      margin-right: 15px;
    }
  `,
};
export default Header;
