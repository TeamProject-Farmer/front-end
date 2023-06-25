import { useEffect, useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import AccountInnerBox from './AccountInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import ManageAccount from '@components/Admin/Common/Modal/ManageAccount';
import { accountList, accountData } from 'src/apis/admin/account';

const AccountBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [fieldName, setFieldName] = useState<string>('username');
  const [pageNum, setPageNumber] = useState<number>(0);
  const [data, setData] = useState<string>('');
  const [checkList, setCheckList] = useState([]);
  const [idList, setIdList] = useState([]);

  const openModal = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  const handleAccountList = async () => {
    try {
      const res = await accountList(fieldName);
      const component = res.data.content.map(i => {
        return (
          <AccountInnerBox
            key={i.id}
            nickname={i.nickname}
            manager={i.grade}
            registerDate={i.id}
            role={i.role}
            checkList = {checkList}
          ></AccountInnerBox>
        );
      });

      const ids = [];
      res.data.content.map((item, i: number) => {
        ids[i] = item.id;
      });
      setIdList(ids);
      setData(component);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccountSearch = async () => {
    try {
      const response = await accountData(15);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleAccountList();
    handleAccountSearch();
  }, [fieldName]);

  const handleCheckAll = () => {
    console.log(checkList.length === idList.length);
    setCheckList(checkList.length === idList.length ? [] : idList);
  };
  const handleCheckEach = (e, id) => {
    if (e.target.checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter(checkedId => checkedId !== id));
    }
  };

  return (
    <>
      {modalOpen === 2 ? (
        <ManageAccount id={1} modalClose={closeModal} />
      ) : null}
      <InnerBody
        handleCheckAll={handleCheckAll}
        tabProps={
          <>
            <SingleTab
              name="createdDate"
              text="등록일순"
              fieldName={fieldName}
              setState={setFieldName}
            />
            <SingleTab
              name="username"
              text="이름순"
              fieldName={fieldName}
              setState={setFieldName}
            />
          </>
        }
        innerBoxProps={data}
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
