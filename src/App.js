import React from "react";
import faker from "faker";
import './App.css';
import CommentDetails from "./components/CommentDetails"
import ApprovalCard from "./components/ApprovalCard"


function App() {
    return (
        <div className="App">
            <div className="ui comments">
                <ApprovalCard >
                    <CommentDetails authorName="Anil" time="Yesterday 10:02 PM" comment="Cool Post" avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails authorName="Aashish" time="Today 10:30 AM" comment="Nice " avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails authorName="Sharad" time="Today 11:16 AM" comment="Good job" avatar={faker.image.avatar()} />
                </ApprovalCard>
            </div>
        </div>
    );
}
export default App;
