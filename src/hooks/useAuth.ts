// /hooks/useAuth.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useAuth = (redirectTo: string) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ローカルストレージに保存された認証トークン（または認証状態）をチェック
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      // 認証されていない場合、指定されたリンクへリダイレクト
      router.push(`/auth/${redirectTo}`);
    } else {
      setIsAuthenticated(true); // 認証済みならフック内での状態更新
    }
  }, [router, redirectTo]);

  return isAuthenticated;
};

export default useAuth;
