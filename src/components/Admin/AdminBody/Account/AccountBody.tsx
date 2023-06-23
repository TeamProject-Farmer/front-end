import { useEffect, useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import AccountInnerBox from './AccountInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import ManageAccount from '@components/Admin/Common/Modal/ManageAccount';
import { accountList, accountSearch } from 'src/apis/admin/account';

const AccountBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [fieldName, setFieldName] = useState<string>('username');
  const [pageNum, setPageNumber] = useState<number>(0);
  const [data, setData] = useState<string>('');
  const openModal = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  let innerBoxList: string = null;
  const handleAccountList = async () => {
    try {
      const res = await accountList(fieldName);
      console.log(res.data.content);
      console.log(res.data.content[0]);
      console.log(res.data.totalElements);
      const Info = res.data.content.map(i => {
        return {
          nickname: i.nickname,
          manager: i.grade,
          registerDate: i.id,
          role: i.role,
        };
      });
      setData(Info);
      for (let t = 0; t < res.data.totalElements; t++) {
        
      }
      
      // innerBoxList =
      //   res.data.content &&
      //   res.data.content.map(i => {
      //     return (
      //       <AccountInnerBox
      //         nickname={i.nickname}
      //         manager={i.grade}
      //         registerDate="2023-04-02"
      //         role={i.role}
      //       ></AccountInnerBox>
      //     );
      //   });
      innerBoxList = data;
      console.log(innerBoxList);
    } catch (error) {
      console.error(error);
    }
  };
  console.log('data');
  console.log(data);
  const handleAccountSearch = async () => {
    try {
      const response = await accountSearch(15);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //test code
    handleAccountList();
    handleAccountSearch();
  }, []);

  return (
    <>
      {modalOpen === 2 ? (
        <ManageAccount id={1} modalClose={closeModal} />
      ) : null}
      {innerBoxList}
      <InnerBody
        tabProps={
          <>
            <SingleTab
              name="createdDate"
              text="등록일순"
              fieldName={fieldName}
              setState={setFieldName}
            />
            <SingleTab name="username" text="이름순" fieldName={fieldName} />
          </>
        }
        innerBoxProps={innerBoxList}
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal} />
            <SmallButton text="수정" />
          </>
        }
      />
    </>
  );
};

export default AccountBody;
