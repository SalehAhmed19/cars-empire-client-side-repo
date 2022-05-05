import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-success fw-bold">Blogs</h2>
      <div className="bg-light p-3 border rounded-3 m-3">
        <h4 className="fw-bold text-center text-success">
          Difference between JavaScript vs NodeJs
        </h4>
        <div>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>JavaScript and NodeJs</th>
                <th>JavaScript</th>
                <th>NodeJs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Type</th>
                <td>
                  JavaScript is the name of the programming language. It works
                  in any browser that has a browser engine that is compatible
                  with it.
                </td>
                <td>
                  It's a JavaScript interpreter and environment that includes
                  several fundamental libraries that JavaScript programmers can
                  use on their own.
                </td>
              </tr>
              <tr>
                <th>Utility</th>
                <td>
                  Generally used for any client-side activity in a web
                  application, such as possible attribute validation or
                  refreshing the page at a set interval, or providing some
                  dynamic changes in web pages without refreshing the page.
                </td>
                <td>
                  It is primarily used for accessing or performing any
                  non-blocking operating system operation, such as writing or
                  executing a shell script, getting hardware-specific
                  information, or running any backend job.
                </td>
              </tr>
              <tr>
                <th>Running Engine</th>
                <td>
                  JavaScript can be run on any JavaScript engine, including
                  Spider Monkey, JavaScript Core, and V8.
                </td>
                <td>
                  Only the V8 engine, which is mostly used by Google Chrome, can
                  run Node JS. And any javascript programs developed with Node
                  JS will always run in the V8 Engine.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
