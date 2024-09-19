"use client";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";
import { TextArea } from "./textarea";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full  rounded-none md:rounded-2xl bg-white ">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl leading-[3.3rem] font-medium text-slate-600">Contacte-nos</h2>
        <p className="leading-7 text-lg">Etapas para a execução dos nossos projectos</p>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Insira seu nome" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Insira seu email" type="email" />
        </LabelInputContainer>
        <Label htmlFor="message">Message</Label>

        <LabelInputContainer className="mb-4">

          <TextArea id="message"
            placeholder="Write your message here" className="w-full h-[4.375rem]" />
        </LabelInputContainer>


        <LabelInputContainer className="mb-4">

          <Button content="Submeter" type="submit" className="w-full text-center" />
        </LabelInputContainer>

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
