"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import addBusiness from "@/app/actions/addBusiness";
import { DatePicker } from "./datePicker";
import { Checkbox } from "./ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import ProgressBar from "./progressBar";
import { ComboBox } from "./comboBox";
import Checkout from "./checkoutStripeEmbed";
import createPixPayment from "@/app/actions/createPixPay";
export default function NewJoinForm(params: any) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const { data } = params;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // const pixPayment = await createPixPayment();


    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/files", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          console.error("não foi possivel enviar imagem");
        }
        const data = await res.json();
      }

      const formData = new FormData(e.target as HTMLFormElement);

      const result = await addBusiness(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Evento adicionado com sucesso!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao criar evento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-5 cursor-pointer">Inscreva-se</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Inscrição para o evento {/* {busines.title} */}
          </DialogTitle>
          <DialogDescription>
            Coloque suas informações para cadastro. Clique em inscrever-se
            quando estiver tudo pronto.
          </DialogDescription>
          <ProgressBar />
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <ScrollArea className="w-full h-96 rounded-md border ">
            <div className="grid gap-4 p-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Nome completo</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Ex: João da Silva"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Documento de identificação</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Ex: CPF, RG, CNH"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="joaodasilva@email.com"
                />
              </div>
              <Label>Dados adicionais</Label>
              <ComboBox />
            </div>
            {/* <Checkout /> */}
          </ScrollArea>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button disabled={loading} type="submit">
              {loading ? "Enviando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
