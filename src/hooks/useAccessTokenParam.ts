import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store';
import { actionLogin } from '@/store/slice/auth';

const useAccessTokenParam = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useLayoutEffect(() => {
    const accessToken = router.query?.login_token || null;
    if (accessToken) {
      dispatch(
        actionLogin({
          isAuth: true,
          userInfo: {},
          token: accessToken,
          refreshToken: null,
          rememberMe: true,
        }),
      );

      const routerUpdate = router.query;
      delete routerUpdate.login_token;

      router.push({ query: routerUpdate });
    }
  }, [dispatch, router]);
};

export default useAccessTokenParam;
