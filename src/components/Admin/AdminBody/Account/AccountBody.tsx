import AccountInnerBox from './AccountInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import InnerBody from '@components/Admin/Common/InnerBody';

const AccountBody = () => {
  return (
    <>
      <InnerBody
        tabProps={
          <>
            <SingleTab text="등록일순" />
            <SingleTab text="이름순" />
          </>
        }
        innerBoxProps={
          <AccountInnerBox
            nickname="Sarah"
            manager="슈퍼관리자"
            registerDate="2023-04-02"
            role="쇼핑몰 관리자"
          ></AccountInnerBox>
        }
        footerButtonProps={
          <>
            <SmallButton text="추가" />
            <SmallButton text="수정" />
          </>
        }
      />
    </>
  );
};

export default AccountBody;
