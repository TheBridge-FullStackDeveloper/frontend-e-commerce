import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
      notification.success({
        message: "Logout successful",
      });
    }
  }, [token]);
  return (
    <div>
      Header
      {token ? (
        <>
          <Link to="/profile">
            <Avatar icon={<UserOutlined />} />
            Profile
          </Link>
          <span onClick={() => logout()}>Logout</span>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
