import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { postCart } from 'src/apis/shop/product';
import { userToken } from 'src/types/shop/types';
import { selectOptionProps, OptionBoxFuncProps } from 'src/types/shop/types';
import { setSelectedOrder } from 'store/reducers/orderSlice';
import handlePrice from 'src/utils/shop/handlePrice';


const useOptionBox = (props: OptionBoxFuncProps) => {
  const {
    productId,
    optionList,
    selectList,
    setSelectList,
    selectPrice,
    setSelectPrice,
    orderData
  } = props;
  
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(userToken);

  const handleResultPrice = () => {
    if (selectList.length > 0) return handlePrice(selectPrice) + '원';
    else return '0 원';
  };
  
  const handleSelectList = (item: selectOptionProps) => {
    setSelectList([
      ...selectList.filter(i => i.id != item.id),
      {
        id: item.id,
        optionName: item.optionName,
        optionPrice: item.optionPrice,
      },
    ]);
    setSelectPrice(orderData[0].productPrice + item.optionPrice);
  };

  const routeToCart = () => {
    if (window.confirm('장바구니로 이동하시겠습니까?')) {
      router.push('/mypage/cart');
    }
  };
  const routeToLogin = () => {
    alert('로그인 해주세요.');
    router.push('/login');
  }

  //장바구니 추가
  const handleCartData = async () => {
    if (token == '') {
      //로그인 되어있지 않은 경우
      routeToLogin();
    } else {
      if (selectList.length === 0) {
        //옵션을 선택하지 않은 경우
        alert('옵션을 선택하지 않았습니다. 옵션을 선택해주세요.');
      } else {
        //로그인 되어있고, 옵션이 선택된 경우
        let optionId = optionList[0].id;
        if (optionList[0].id === 0) optionId = null;
        let count = 1;
        const response = await postCart({
          productId: productId.toString(),
          optionId: optionId.toString(),
          count: count.toString(),
        });
        handleSelectList(optionList[0]);
        routeToCart();
      }
    }
  };

  //구매하기 데이터
  const handleOrder = () => {
    if (token == '') {
      //로그인 되어있지 않은 경우
      routeToLogin();
    } else {
      if (selectList.length === 0) {
        //옵션을 선택하지 않은 경우
        alert('옵션을 선택하지 않았습니다. 옵션을 선택해주세요.');
      } else {
        //로그인 되어있고, 옵션이 선택된 경우
        let optionId = selectList[0].id;
        if (optionId === 0) optionId = null;
        dispatch(
          setSelectedOrder([
            {
              productId,
              imgUrl: orderData[0].imgUrl,
              productName: orderData[0].productName,
              optionId,
              count: 1,
              productPrice: selectPrice,
            },
          ]),
        );
        router.push({
          pathname: '/order',
          query: 'fromDetail',
        });
      }
    }
  };

  return {handleResultPrice, handleSelectList, handleCartData, handleOrder};
}

export default useOptionBox;