import React from "react";
import { useSelector } from "react-redux";

import { orderLoading, orderMessage } from "../redux/slices/cart/selectors";

import { Container, Text, Title, Wrapper } from "../styles/pages/Order.styles";

const Order = () => {
  const message = useSelector(orderMessage);
  const isLoading = useSelector(orderLoading);

  return (
    <Wrapper>
      <Container>
        <Title>Order Information</Title>
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <>
            {Object.keys(message).length > 0 ? (
              <>
                <Text>{message.message}</Text>
                <Text>Order: {message.order}</Text>
              </>
            ) : (
              <Text>No info</Text>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Order;
