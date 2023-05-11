import React, { useContext, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, notification, Badge } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Header = () => {
  const { token, logout,logoutMessage } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (logoutMessage) {
      navigate("/login");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="header-container">
      <h2>Header</h2>

      {token ? (
        <div>
          <Link to="/products">Products</Link>
          <Link to="/profile">
            <Avatar icon={<UserOutlined />} />
          </Link>
          <Link to="/cart">
            <Badge count={cart.length}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          <span onClick={() => logout()}>Logout</span>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
