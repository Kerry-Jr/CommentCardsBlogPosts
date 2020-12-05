import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today @ 4:45pm"
          avatar={faker.image.people()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today @ 5:15pm"
          avatar={faker.image.image()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday @ 5:22pm"
          avatar={faker.image.cats()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// <img alt="avatar" src={faker.image.image()} />

// <img alt="avatar" src='https://source.unsplash.com/random' />
