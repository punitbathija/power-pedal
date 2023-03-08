import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineitems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineitems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
