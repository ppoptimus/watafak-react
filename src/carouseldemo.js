import "./carouseldemo.css";
export default function Carouseldemo() {
  return (
    <div className="body">
      <h1 className="jt --debug">
        <span className="jt__row">
          <span className="jt__text">Welcome</span>
          <span className="jt__text">To</span>
          <span className="jt__text">WATAFAK</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Welcome</span>
          <span className="jt__text">To</span>
          <span className="jt__text">WATAFAK</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Welcome</span>
          <span className="jt__text">To</span>
          <span className="jt__text">WATAFAK</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">Welcome</span>
          <span className="jt__text">To</span>
          <span className="jt__text">WATAFAK</span>
        </span>
      </h1>
    </div>
  );
}
