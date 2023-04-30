import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

// //https://nextjs.org/docs/basic-features/data-fetching#provided-req-middleware-in-getserversideprops
// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const redirect = await redirectIfUnauthenticated(req);
//   if (redirect !== null) {
//     return {
//       redirect,
//     };
//   }
//   return {
//     props: { hello: "hello" }, // will be passed to the page component as props
//   };
// };

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>josh.sizer.dev</title>
          <meta name="description" content="Joshua Sizer portfolio." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>josh.sizer.dev</h1>

          <p className={styles.description}>
            Play around. Stay a while.
          </p>

          <div className={styles.grid}>
            <a href="/brain-tumor-detection" className={styles.card} target="_blank"
            rel="noopener noreferrer">
              <h2>Brain Tumor Detection &rarr;</h2>
              <p>Detect brain tumors using a convolutional neural network. 
                Can classify as having no tumor, glioma, meningioma, or pituitary.</p>
            </a>

            <a href="https://github.com/joshsizer/MNIST-Digit-Classifier" className={styles.card} target="_blank"
            rel="noopener noreferrer">
              <h2>MNIST Digit Classifier &rarr;</h2>
              <p>Keras, Pytorch, and Numpy only machine learning implementations for
                 the classic challenge of classifying handwritten digits.</p>
            </a>

            <a
              href="https://github.com/joshsizer/My-Malloc"
              className={styles.card} target="_blank"
              rel="noopener noreferrer"
            >
              <h2>My Malloc &rarr;</h2>
              <p>Linked-list implementation of the standard C 
                library function “malloc.” Uses a first-fit 
                algorithm with support for coalescing.</p>
            </a>

            <a
              href="https://github.com/joshsizer/Full-Stack-Template"
              className={styles.card} target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Full Stack Template &rarr;</h2>
              <p>
              Containerized starter code for rapid application development. 
              Includes prod/dev environments and basic JWT authentication.
              </p>
            </a>
          </div>
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </div>
    );
  }
}

export default HomePage;
