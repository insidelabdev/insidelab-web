"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
export default function Test({ src, isOpen, onOpenChange }: any) {
    
    const handleOnClik=()=>{

    }
  return (
    <>
      <Link replace href="/about" passHref>
        Link 1
      </Link>
      <Link replace href="/about" passHref legacyBehavior>
        <a>Link 2</a>
      </Link>
      <Button as="a" href="/about">
        Button As Link
      </Button>
      <Link 
      onClick={handleOnClik}
      replace href="/about" prefetch={false}>
        <a>About</a>
      </Link>
    </>
  );
}
