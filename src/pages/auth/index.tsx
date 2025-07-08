// /pages/auth/index.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

const AuthPage = () => {
  const isAuthenticated = useAuth("/auth/create"); // 認証されていなければ/authにリダイレクト
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 認証APIにパスワードを送信して認証を行う
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // 認証成功後、トークンを保存
      localStorage.setItem("authToken", "your-token"); // 例として'example-token'を使用
      router.push("/auth/dashboard"); // ダッシュボードに遷移
    } else {
      const { message } = await res.json();
      setError(message); // エラーメッセージを表示
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthPage;
