import React from "react";

function article() {
  return (
    <div>
      <div className="jumbotron p-4 m-4 bg-art">
        <h1 className="display-4">บทความ</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component
        </p>

        <p>
          <a className="btn btn-bg2" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" >
            See more
          </a>
        </p>
        <div className="collapse" id="collapseExample1">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <br />
      {/* ------------------------------- */}
      <div className="jumbotron p-4 m-4 bg-art">
        <h1 className="display-4">บทความ</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component
        </p>

        <p>
          <a className="btn btn-bg2" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" >
            See more
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <br />
      {/* ------------------------------- */}
      <div className="jumbotron p-4 m-4 bg-art">
        <h1 className="display-4">บทความ</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component
        </p>

        <p>
          <a className="btn btn-bg2" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" >
            See more
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default article;
