import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Component
      {...pageProps}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
}
