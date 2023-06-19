import Image from 'next/image';
import Styled from './styles';

const SearchBar = () => {
  return (
    <Styled.SearchBox>
      <Styled.SearchIcon>
        <Image
          src="/assets/images/admin/searchIcon.png"
          alt="searchIcon"
          width={26}
          height={25}
          style={{ objectFit: 'contain' }}
        />
      </Styled.SearchIcon>
    </Styled.SearchBox>
  );
};

export default SearchBar;
