import React from "react";
import "../loading.css";

function Loading({ isLoading }) {
  return (
    <div className="loading">
      {isLoading ? (
        <div className="loadingio-spinner-double-ring">
          <div className="ldio">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Loading;
