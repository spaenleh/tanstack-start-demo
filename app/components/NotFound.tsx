export function NotFound() {
  return (
    <div
      style={{
        fontFamily: "Nunito Variable",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <p style={{ fontSize: "4rem" }}>404</p>
      <p>Ooops could not find this page</p>
    </div>
  );
}
