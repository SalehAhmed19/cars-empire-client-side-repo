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
      <div className="bg-light p-3 border rounded-3 m-3">
        <h4 className="fw-bold text-center text-success">
          Difference between SQL and NoSQL
        </h4>
        <div>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
                <td>A distributed or non-relational database system.</td>
              </tr>
              <tr>
                <td>These databases have a predefined or fixed schema.</td>
                <td>They have a flexible schema.</td>
              </tr>
              <tr>
                <td>
                  These databases are not designed to store hierarchical data.
                </td>
                <td>
                  These databases are great for storing hierarchical data.
                </td>
              </tr>
              <tr>
                <td>Complex queries are best served by these databases.</td>
                <td>Complex queries are not well served by these databases.</td>
              </tr>
              <tr>
                <td>Scalable vertically.</td>
                <td>Scalable horizontally.</td>
              </tr>
              <tr>
                <td>ACID property is followed.</td>
                <td>
                  CAP is followed (consistency, availability, partition
                  tolerance)
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="bg-light p-3 border rounded-3 m-3">
        <h4 className="fw-bold text-center text-success">
          When should you use NodeJs and when should you use MongoDB?
        </h4>
        <div>
          <p>
            <strong>Node Js</strong> is used to develop backends. Is is
            primarily used because of its single-threaded nature, Node. js is
            best suited to non-blocking, event-driven servers. It was created
            with real-time, push-based architectures in mind, and is utilized
            for standard web pages and back-end API applications.
          </p>
          <p>
            <strong>MongoDB</strong> is a multi-purpose database that is used in
            a variety of industries to support applications. Because it tackles
            long-standing issues in data management and software development,
            MongoDB has found a home in a variety of enterprises and functions.
            MongoDB has a wide range of applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
