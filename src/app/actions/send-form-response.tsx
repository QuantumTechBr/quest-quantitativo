"use server";

import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation'

export const sendFormResponse = async (formData: FormData) => {

  const newResposta = {
    'r1': formData.get('question-1') as string,
    'r2': formData.get('question-2') as string,
    'r3': formData.get('question-3') as string,
    'r4': formData.get('question-4') as string,
    'r5': formData.get('question-5') as string,
    'r6': formData.get('question-6') as string,
    'r7': formData.get('question-7') as string,
    'r8': formData.get('question-8') as string,
    'r9': formData.get('question-9') as string,
    'r10': formData.get('question-10') as string
  }

  const resposta = await prisma.respostas.create({data: newResposta});

  redirect('/sucess');

};
