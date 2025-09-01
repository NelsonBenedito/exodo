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
import InputIcon from "./inputIcon";
export default function NewBusinessForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

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
        imageUrl = data;
      }

      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("businessImageUrl", imageUrl);

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
        <Button variant="default">Adicionar Evento</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Evento</DialogTitle>
          <DialogDescription>
            Coloque as informações do evento. Clique em salvar quando estiver
            tudo pronto.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <ScrollArea className="w-full h-96 rounded-md border ">
            <div className="grid gap-4 p-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Titulo</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Ex: Aniversário da igreja"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Ex: Evento voltado a celebração do aniversário da igreja."
                />
              </div>
              <div className="grid gap-3">
                <span className="flex flex-col gap-3">
                  <Label htmlFor="initial-time-picker" className="">
                    Início
                  </Label>
                  <span className="flex gap-1">
                    <DatePicker name="startDate" />
                    <Input
                      type="time"
                      id="initial-time-picker"
                      name="startTime"
                      step="1"
                      defaultValue="10:30:00"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </span>
                  <Label htmlFor="end-time-picker" className="">
                    Término
                  </Label>
                  <span className="flex gap-1">
                    <DatePicker name="endDate" />
                    <Input
                      type="time"
                      id="end-time-picker"
                      name="endTime"
                      step="2"
                      defaultValue="10:30:00"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </span>
                  <span className="flex flex-col gap-1">
                    <Label htmlFor="businessImage">
                      Insira a imagem do evento
                    </Label>
                    {/* <InputImage type="file" name="imageBusiness"/> */}
                    <Input
                      type="file"
                      name="businessImage"
                      id="businessImage"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </span>
                  <span className="grid gap-3">
                    <Label htmlFor="price">
                      Valor do ingresso
                    </Label>

                    <InputIcon icon="currency"/>
                  </span>
                  <span className="flex pt-3">
                    <Label
                      htmlFor="toggle"
                      className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-orange-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-orange-900 dark:has-[[aria-checked=true]]:bg-orange-950"
                    >
                      <Checkbox
                        id="toggle"
                        className="data-[state=checked]:border-orange-600 data-[state=checked]:bg-orange-600 data-[state=checked]:text-white dark:data-[state=checked]:border-orange-700 dark:data-[state=checked]:bg-orange-700"
                      />
                      <div className="grid gap-1.5 font-normal">
                        <p className="text-sm leading-none font-medium">
                          Apenas para membros
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Você pode alterar essa opção mesmo depois de ter
                          adicionado o evento.
                        </p>
                      </div>
                    </Label>
                  </span>
                </span>
              </div>
            </div>
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
