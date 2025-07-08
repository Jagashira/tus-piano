import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useAuth = (redirectUrl: string) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // ローカルストレージに保存された認証トークンをチェック
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      // 認証されていない場合、/authページへリダイレクト
      router.push("/auth");
    } else {
      // 認証トークンがある場合、指定されたページにリダイレクト
      setIsAuthenticated(true);
      router.push(redirectUrl);
    }
  }, [redirectUrl, router]);

  return isAuthenticated;
};

export default useAuth;
