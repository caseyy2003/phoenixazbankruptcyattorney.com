/* eslint-disable */
import React from "react";
import Head from "next/head";
import makeStyles from "@mui/styles/makeStyles";
import Container from "@mui/material/Container";

const useStyles = makeStyles(() => ({
  wrap: { padding: "56px 0" },
  h1: { fontSize: "2rem", margin: "0 0 12px" },
  p: { fontSize: "1.1rem", lineHeight: 1.6, margin: "0 0 16px" },
}));

export default function Chapter13() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Chapter 13 Bankruptcy in Phoenix | Phoenix AZ Bankruptcy Attorney</title>
        <meta
          name="description"
          content="Learn how chapter 13 works in Phoenix, Arizona, including repayment plans and what to expect."
        />
        <link
          rel="canonical"
          href="https://www.phoenixazbankruptcyattorney.com/chapter-13"
        />
      </Head>

      <main className={classes.wrap}>
        <Container maxWidth="md">
          <h1 className={classes.h1}>Chapter 13 Bankruptcy in Phoenix</h1>
          <p className={classes.p}>
            Placeholder page. Next step: add the real chapter 13 overview content.
          </p>
        </Container>
      </main>
    </>
  );
}
