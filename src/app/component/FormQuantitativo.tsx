"use client";

import React, { useState } from "react";

// MUI components
import { FormControl } from "@mui/base/FormControl";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

// Custom components
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import { sendFormResponse } from "../actions/send-form-response";

export default function FormQuantitativo() {
  const [question8, setQuestion8] = React.useState(new Array());

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let checked = [...question8];
    if (checked.includes(event.target.name)) {
      checked = checked.filter(e => e !== event.target.name);
    } else {
      checked.push(event.target.name);
    }
    setQuestion8(checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    formData.set('question-8', question8.toString())
    sendFormResponse(formData);
    
  }

  return (
    <Container maxWidth="md" sx={{ mt: "2em" }}>
      <Typography variant="h2" component="h2">
        Questionário Tracking Semanal
      </Typography>
      <Typography variant="h5" component="h5">
        <div>
          BOM DIA/TARDE, SOU PESQUISADOR DO INSTITUTO DataM E ESTAMOS REALIZANDO
          UMA PESQUISA RÁPIDA (VAI DEMORAR NO MÁXIMO 2 MINUTOS) DE INTENÇÃO DE
          VOTOS, GOSTARÍA DE PARTICIPAR?
        </div>
        <div>
          INFORMAMOS QUE AS SUAS RESPOSTAS ESTARÃO PROTEGIDAS PELA LEI GERAL DE
          PROTEÇÃO DE DADOS (LGPD).
        </div>
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-1" className="question-label">
              1. Você é eleitor de Manaus?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-1"
              defaultValue=""
              name="question-1"
              
            >
              <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
              <FormControlLabel value="Não" control={<Radio />} label="Não" />
              <FormControlLabel
                value="Não respondeu"
                control={<Radio />}
                label="Não respondeu"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-2" className="question-label">
              2. Em que bairro de Manaus você mora?
            </Label>
            <TextField
              sx={{ width: "100%", mt: "1rem" }}
              name="question-2"
              label=""
              variant="standard"
            />
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-3" className="question-label">
              3. Qual a sua idade?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-3"
              defaultValue=""
              name="question-3"
            >
              <FormControlLabel
                value="16-19"
                control={<Radio />}
                label="16-19"
              />
              <FormControlLabel
                value="20-24"
                control={<Radio />}
                label="20-24"
              />
              <FormControlLabel
                value="25-34"
                control={<Radio />}
                label="25-34"
              />
              <FormControlLabel
                value="35-49"
                control={<Radio />}
                label="35-49"
              />
              <FormControlLabel
                value="50-59"
                control={<Radio />}
                label="50-59"
              />
              <FormControlLabel value="60+" control={<Radio />} label="60+" />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-4" className="question-label">
              4. Qual seu gênero?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-4"
              defaultValue=""
              name="question-4"
            >
              <FormControlLabel
                value="Masculino"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="Feminino"
                control={<Radio />}
                label="Feminino"
              />
              <FormControlLabel
                value="Prefiro não dizer"
                control={<Radio />}
                label="Prefiro não dizer"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-5" className="question-label">
              5. Qual sua religião?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-5"
              defaultValue=""
              name="question-5"
            >
              <FormControlLabel
                value="Católica"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="Evangélica"
                control={<Radio />}
                label="Feminino"
              />
              <FormControlLabel
                value="Sem religião"
                control={<Radio />}
                label="Prefiro não dizer"
              />
              <FormControlLabel
                value="Outras"
                control={<Radio />}
                label="Outras"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-6" className="question-label">
              6. Qual o seu nivel de escolaridade?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-7"
              defaultValue=""
              name="question-6"
            >
              <FormControlLabel
                value="Sem instrução"
                control={<Radio />}
                label="Sem Instrução"
              />
              <FormControlLabel
                value="Ensino Fundamental Incompleto"
                control={<Radio />}
                label="Ensino Fundamental Incompleto"
              />
              <FormControlLabel
                value="Ensino Fundamental Completo"
                control={<Radio />}
                label="Ensino Fundamental Completo"
              />
              <FormControlLabel
                value="Ensino Médio Incompleto"
                control={<Radio />}
                label="Ensino Médio Incompleto"
              />
              <FormControlLabel
                value="Ensino Médio Completo"
                control={<Radio />}
                label="Ensino Médio Completo"
              />
              <FormControlLabel
                value="Ensino Superior Incompleto"
                control={<Radio />}
                label="Ensino Superior Incompleto"
              />
              <FormControlLabel
                value="Ensino Superior Completo"
                control={<Radio />}
                label="Ensino Superior Completo"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-7" className="question-label">
              7. Qual a sua renda familiar mensal?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-7"
              defaultValue=""
              name="question-7"
            >
              <FormControlLabel
                value="Até 2 salários mínimos"
                control={<Radio />}
                label="Até 2 salários mínimos"
              />
              <FormControlLabel
                value="De 2 a 5 salários mínimos"
                control={<Radio />}
                label="De 2 a 5 salários mínimos"
              />
              <FormControlLabel
                value="De 5 a 10 salários mínimos"
                control={<Radio />}
                label="De 5 a 10 salários mínimos"
              />
              <FormControlLabel
                value="Mais de 10 salários mínimos"
                control={<Radio />}
                label="Mais de 10 salários mínimos"
              />
              <FormControlLabel
                value="Não respondeu"
                control={<Radio />}
                label="Não respondeu"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>

        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-8" className="question-label">
              8. (Estimulada) Se a eleição fosse hoje, em quem você votaria para
              o cargo de prefeito?
            </Label>
            <Label>Marque todas que se aplicam.</Label>
            <FormGroup >
              <FormControlLabel
                control={
                  <Checkbox name="Amom Mandel" checked={question8.includes("Amom Mandel")} onChange={handleCheck}/>
                }
                label="Amom Mandel"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Capitão Alberto Neto" checked={question8.includes("Capitão Alberto Neto")} onChange={handleCheck} />
                }
                label="Capitão Alberto Neto"
              />
              <FormControlLabel
                control={
                  <Checkbox name="David Almeida" checked={question8.includes("David Almeida")} onChange={handleCheck} />
                }
                label="David Almeida"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Marcelo Ramos" checked={question8.includes("Marcelo Ramos")} onChange={handleCheck} />
                }
                label="Marcelo Ramos"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Professora Maria do Carmo" checked={question8.includes("Professora Maria do Carmo")} onChange={handleCheck} />
                }
                label="Professora Maria do Carmo"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Roberto Cidade" checked={question8.includes("Roberto Cidade")} onChange={handleCheck} />
                }
                label="Roberto Cidade"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Wilker Barreto" checked={question8.includes("Wilker Barreto")} onChange={handleCheck} />
                }
                label="Wilker Barreto"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Nenhum deles" checked={question8.includes("Nenhum deles")} onChange={handleCheck} />
                }
                label="Nenhum deles"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Ainda não decidi" checked={question8.includes("Ainda não decidi")} onChange={handleCheck} />
                }
                label="Ainda não decidi"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Não respondeu" checked={question8.includes("Não respondeu")} onChange={handleCheck} />
                }
                label="Não respondeu"
              />
              
            </FormGroup>
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-9" className="question-label">
              9. (Espontâneo) Nas eleições de outubro deste ano, você já tem
              candidato a vereador?
            </Label>
            <RadioGroup
              aria-labelledby="label-question-9"
              defaultValue=""
              name="question-9"
            >
              <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
              <FormControlLabel
                value="Nenhum"
                control={<Radio />}
                label="Nenhum"
              />
              <FormControlLabel
                value="Não sabe/Não respondeu"
                control={<Radio />}
                label="Não sabe/Não respondeu"
              />
            </RadioGroup>
            <HelperText />
          </FormControl>
        </ListItem>

        <ListItem sx={{ my: "1em" }}>
          <FormControl defaultValue="">
            <Label id="label-question-10" className="question-label">
              10. (Para o pesquisador) Se sim. Anote aqui o nome citado pelo
              entrevistado.
            </Label>
            <TextField
              sx={{ width: "100%", mt: "1rem" }}
              name="question-10"
              label=""
              variant="standard"
            />
            <HelperText />
          </FormControl>
        </ListItem>
        <ListItem>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Enviar
          </Button>
        </ListItem>
      </form>
      <Typography variant="h5" component="h5" sx={{ my: "2em" }}>
        <div>Agradecimentos</div>
        <div>
          AGRADECEMOS PELA SUA PARTICIPAÇÃO. TENHA UM ÓTIMO DIA/TARDE/NOITE.
        </div>
      </Typography>
    </Container>
  );
}
