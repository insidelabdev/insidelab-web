"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function Test({ src, isOpen, onOpenChange }: any) {

  const handleOnClik = () => {
    // Manejo del clic
  };

  return (
    <>
      {/* Usando Link sin <a> */}
      <Link href="/about" replace>
        Link 1
      </Link>
      
      {/* Elimina el <a> ya que no es necesario */}
      <Link href="/about" replace>
        Link 2
      </Link>
      
      {/* Si usas Button con as="a", no uses Link */}
      <Button as="a" href="/about">
        Button As Link
      </Button>
      
      {/* Evita el uso de <a> dentro de Link, usa button o similar */}
      <Link href="/about" replace prefetch={false}>
        <button onClick={handleOnClik}>About</button>
      </Link>
    </>
  );
}
