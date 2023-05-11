import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin, Collapse } from "antd";
const Profile = () => {
  const { Panel } = Collapse;
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div>
      <Card
        title="Profile"
        extra={<a href="#">{user.role}</a>}
        style={{
          width: 300,
        }}
      >
        <img
          style={{
            width: 30,
          }}
          src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360"
          alt=""
        />
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </Card>
      <h2>Orders</h2>
      {user.orderIds.map((order) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header={order.createdAt} key="1">
              {order.productIds.map((product) => (
                <p>{product.name} {product.price} €</p>
              ))}
            </Panel>
          </Collapse>
        );
      })}

    </div>
  );
};

export default Profile;
