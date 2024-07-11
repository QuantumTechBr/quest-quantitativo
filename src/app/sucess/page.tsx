"use client";

import React, { useState } from "react";

// MUI components
import { ThemeProvider } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Custom components
import { Label } from "@/app/component/Label";
import theme from "../theme/theme";

export default function FormQuantitativo() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{
                height: '100vh'

            }}>
                <Box sx={{
                    width: 500,
                    height: 500,
                    border: '2px solid black',
                    borderRadius: '25px',
                    overflow: "hidden",
                    margin: 'auto'
                }}>
                    <Grid container direction="column" height='100%'>
                        <Grid item xs={6} display="flex" justifyContent="center" alignItems="center" className="topo-sucesso">
                            <p>Resposta enviada com sucesso!</p>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="space-around" alignItems="center" className="conteudo-sucesso" direction="column">
                            <p className="texto-sucesso">Você já pode fechar essa página ou voltar para o início!</p>
                            <Button variant="contained" color="success" startIcon={<KeyboardBackspaceIcon />} href="/">VOLTAR</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Container>

        </ThemeProvider>
    );
}