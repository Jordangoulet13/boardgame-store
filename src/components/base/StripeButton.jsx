import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/img-logo.png";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="RainCity Games"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
