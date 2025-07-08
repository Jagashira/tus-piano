// /pages/dashboard.tsx
import useAuth from "@/hooks/useAuth";
import exp from "constants";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useAuthRedirectを使って、認証されていなければ/authへリダイレクト
  useAuth("dashboard");

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};
export default Dashboard;
