import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  return (
    <div
      className="d-flex no-wrap flex-column spinner-border loader"
      style={{ width: "4rem", height: "4rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
