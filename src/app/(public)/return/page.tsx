import { redirect } from "next/navigation";

import { stripe } from "../../../lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

export default async function Return({ searchParams }: any) {
  // const { session_id } = await searchParams;
  // if (!session_id)
  //   throw new Error("Please provide a valid session_id (`cs_test_...`)");

  // const session = await stripe.checkout.sessions.retrieve(session_id, {
  //   expand: ["line_items", "payment_intent"],
  // });

  // const status = session.status;
  // const customerEmail = session.customer_details?.email ?? "your email";

  // if (status === "open") {
  //   return redirect("/");
  // }

  // if (status === "complete") {
    return (
      <section className="flex w-full flex-col justify-start h-screen pt-[5rem] px-15" id="success">
       <DynamicIcon  size={"100px"} color="green" name={"check-circle"}/>
        <p>
          Agradecemos sua inscrição! Um email de confirmação será enviado para{" "}
          {/* {customerEmail}. Se tiver qualquer duvida entre em contato! */}
        </p>
        <Link href={"/"} className="w-full cursor-pointer"><Button className="w-full cursor-pointer">Voltar</Button></Link>
      </section>
    );
  // }
}
