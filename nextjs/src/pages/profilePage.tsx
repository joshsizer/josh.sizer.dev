import React from "react";
import { Bio } from "../components/BioBox";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log(req.headers.cookie);
  const requestOptions = {
    method: "GET",
    headers: { Cookie: "access-token=" },
  };
  const res = await fetch(
    `http://auth-server:3000/userinfo`,
    requestOptions
  );
  //const data = await res.json();

  if (res.ok) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
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
