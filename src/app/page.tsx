import * as React from 'react';
import FormQuantitativo from './component/FormQuantitativo';

const label = { inputProps: { "aria-label": "Formulário Quantitativo" } };

export default function Home() {
  return(
    <FormQuantitativo></FormQuantitativo>
  );
}