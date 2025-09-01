import AbacatePay from "abacatepay-nodejs-sdk";

const abacate = AbacatePay(process.env.ABACATE_SECRET_KEY!);
type Data = {
  frequency: "ONE_TIME";
  methods: "PIX";
  products: {
    externalid: string;
    name: string;
    quantity: number;
    price: number;
  };
  customer: {
    email: string;
  };
};

export default async function createPixPayment({
  frequency,
  methods,
  products,
  customer,
}: Data) {
  const billing = await abacate.billing.create({
    frequency: frequency,
    methods: [methods],
    products: [
      {
        externalId: products.externalid,
        name: products.name,
        quantity: products.quantity,
        price: products.price, // Amount in cents
      },
    ],
    returnUrl: "http://localhost:3000/",
    completionUrl: "http://localhost:3000/return",
    customer: {
      email: customer.email,
    },
  });

  return billing;
}
