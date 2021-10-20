import React from "react";
import { Bio } from "../components/BioBox";
import { GetServerSideProps } from "next";
import { redirectIfUnauthenticated } from "../util/util";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const redirect = await redirectIfUnauthenticated(req);
  if (redirect !== null) {
    return {
      redirect,
    };
  }
  return {
    props: { hello: "hello" }, // will be passed to the page component as props
  };
};

export default function profilePage() {
  return (
    <>
      <a>Profile Image</a>
      <Bio />
      <a>Email</a>
      <a>Password</a>
    </>
  );
}
