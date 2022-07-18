/* eslint-disable　react-hooks/exhaustive-deps */

import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "warning" });
        }
      })
      .catch((err) => {
        showMessage({ title: "ログインできませんでした", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
