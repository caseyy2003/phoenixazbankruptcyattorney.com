/* eslint-disable */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import makeStyles from "@mui/styles/makeStyles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(() => ({
  wrap: { padding: "56px 0" },
  h1: { fontSize: "2.25rem", margin: "0 0 12px" },
  p: { fontSize: "1.1rem", lineHeight: 1.6, margin: "0 0 16px" },
  cards: { marginTop: 24 },
  card: { padding: 18 },
  link: { color: "#0656d3", textDecoration: "underline" },
  ctaRow: { marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Phoenix Bankruptcy Attorney | Phoenix AZ Bankruptcy Attorney</title>
        <meta
          name="description"
          content="Phoenix bankruptcy resources to help you understand chapter 7 and chapter 13, timelines, costs, and what to expect in Arizona."
        />
        <link rel="canonical" href="https://www.phoenixazbankruptcyattorney.com/" />
      </Head>

      <main className={classes.wrap}>
        <Container maxWidth="md">
          <h1 className={classes.h1}>Phoenix Bankruptcy Attorney</h1>
          <p className={classes.p}>
            We’re rebuilding this site to load faster and be easier to use. Start here:
          </p>

          <div className={classes.ctaRow}>
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="contained">Contact</Button>
            </Link>
            <Link href="/chapter-7" passHref legacyBehavior>
              <Button variant="outlined">Chapter 7</Button>
            </Link>
            <Link href="/chapter-13" passHref legacyBehavior>
              <Button variant="outlined">Chapter 13</Button>
            </Link>
          </div>

          <Grid container spacing={2} className={classes.cards}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.card} elevation={1}>
                <strong>Chapter 7 Basics</strong>
                <p className={classes.p}>
                  Learn what chapter 7 can (and can’t) do, and the typical timeline.
                </p>
                <Link href="/chapter-7" className={classes.link}>
                  Read Chapter 7 →
                </Link>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.card} elevation={1}>
                <strong>Chapter 13 Basics</strong>
                <p className={classes.p}>
                  Understand repayment plans, who qualifies, and common outcomes.
                </p>
                <Link href="/chapter-13" className={classes.link}>
                  Read Chapter 13 →
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
