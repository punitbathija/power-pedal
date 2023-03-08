import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineitems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise(process.env.PUBLIC_API_KEY);
    }
    return stripePromise;
  };
}
