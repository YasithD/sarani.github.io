import React, { useState, useEffect } from "react";
import { setCDN } from "shiki";
import { Container, Row, Col } from "react-bootstrap";
import DOMPurify from "dompurify";
import {
  copyToClipboard,
  removeEscapes,
  shikiTokenizer,
} from "../../../utils/bbe";
import Link from "next/link";

setCDN("https://unpkg.com/shiki/");

const codeSnippetData = [
  `import ballerina/io;
import ballerinax/java.jdbc;
import ballerina/sql;

// Defines a record to load the query result.
type Customer record {|
    int customerId;
    string lastName;
    string firstName;
    int registrationId;
    float creditLimit;
    string country;
|};

public function main() returns error? {

    // Runs the prerequisite setup for the example.
    check initialize();

    // Initializes the JDBC client. The \`jdbcClient\` can be reused to access the database throughout the application execution.
    jdbc:Client jdbcClient = check new ("jdbc:h2:file:./target/bbes/java_jdbc",
        "rootUser", "rootPass");

    int customerId = 1;
    // Query table to return one result.
    Customer customer =
            check jdbcClient->queryRow(\`SELECT * FROM Customers
                                    WHERE customerId > \${customerId};\`);

    io:println(\`Customer (customerId = 1) : \${customer}\`);

    // Closes the JDBC client.
    check jdbcClient.close();

    // Performs the cleanup after the example.
    check cleanup();
}

// Initializes the database as a prerequisite to the example.
function initialize() returns sql:Error? {
    jdbc:Client jdbcClient = check new ("jdbc:h2:file:./target/bbes/java_jdbc",
        "rootUser", "rootPass");

    // Creates a table in the database.
    _ = check jdbcClient->execute(\`CREATE TABLE Customers
            (customerId INTEGER NOT NULL AUTO_INCREMENT, firstName
            VARCHAR(300), lastName  VARCHAR(300), registrationID INTEGER,
            creditLimit DOUBLE, country  VARCHAR(300),
            PRIMARY KEY (customerId))\`);

    // Adds the records to the newly-created table.
    _ = check jdbcClient->execute(\`INSERT INTO Customers
            (firstName, lastName, registrationID,creditLimit,country) VALUES
            ('Peter','Stuart', 1, 5000.75, 'USA')\`);
    _ = check jdbcClient->execute(\`INSERT INTO Customers
            (firstName, lastName, registrationID,creditLimit,country) VALUES
            ('Dan', 'Brown', 2, 10000, 'UK')\`);

    check jdbcClient.close();
}

// Cleans up the database after running the example.
function cleanup() returns sql:Error? {
    jdbc:Client jdbcClient = check new ("jdbc:h2:file:./target/bbes/java_jdbc",
        "rootUser", "rootPass");

    // Cleans the database.
    _ = check jdbcClient->execute(\`DROP TABLE Customers\`);

    check jdbcClient.close();
}
`,
];

export default function JdbcQueryRowOperation() {
  const [click1, updateClick1] = useState(false);
  const [codeSnippets, updateSnippets] = useState([]);
  const [btnHover, updateBtnHover] = useState([false, false]);

  useEffect(() => {
    async function loadCode() {
      for (let snippet of codeSnippetData) {
        const output = await shikiTokenizer(snippet, "ballerina");
        updateSnippets((prevSnippets) => [...prevSnippets, output]);
      }
    }
    loadCode();
  }, []);

  return (
    <Container className="d-flex flex-column h-100">
      <h1>Query with one result</h1>

      <p>
        This BBE demonstrates how to use the JDBC client select query row
        operations.
      </p>

      <p>Note that the relevant database driver JAR</p>

      <p>
        should be defined in the <code>Ballerina.toml</code> file as a
        dependency.
      </p>

      <p>
        This sample is based on an H2 database and the H2 database driver JAR
        needs to be added to the <code>Ballerina.toml</code> file.
      </p>

      <p>
        For a sample configuration and more information on the underlying
        module, see the{" "}
        <a href="https://docs.central.ballerina.io/ballerinax/java.jdbc/latest/">
          JDBC module
        </a>{" "}
        .&lt;br&gt;&lt;br&gt;
      </p>

      <p>
        This sample is written using H2 2.0.6 and it is recommended to use an H2
        JAR file of a version higher than 2.0.2.
      </p>

      <Row className="bbeCode px-2 py-0 rounded">
        <Col sm={10}>
          {codeSnippets[0] != undefined && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(codeSnippets[0]),
              }}
            />
          )}
        </Col>
        <Col className="d-flex align-items-start pt-2" sm={2}>
          <button
            className="btn rounded ms-auto"
            onClick={() => {
              window.open(
                "https://github.com/ballerina-platform/ballerina-distribution/tree/v2201.0.3/jdbc-query-row-operation",
                "_blank"
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </button>
          {click1 ? (
            <button className="btn rounded" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#45FF00"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </button>
          ) : (
            <button
              className="btn rounded"
              onClick={() => {
                copyToClipboard(codeSnippetData[0]);
                updateClick1(true);
                setTimeout(() => {
                  updateClick1(false);
                }, 3000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000"
                className="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </button>
          )}
        </Col>
      </Row>

      <br />

      <Row className="bbeOutput p-2 rounded">
        <pre className="m-0">
          <code className="d-flex flex-column">
            <span>{`# Create a Ballerina project.`}</span>
            <span>
              {`# Copy the example to the project and add the relevant database driver JAR details to the `}
              <code>{`Ballerina.toml`}</code>
              {` file.`}
            </span>
            <span>{`# Execute the command below to build and run the project.`}</span>
            <span>{`bal run`}</span>
            <span>{``}</span>
            <span>{`Customer (customerId = 1) : {"customerId":2,"firstName":"Dan","lastName":"Brown","registrationId":2,"creditLimit":10000.0,"country":"UK"}`}</span>
          </code>
        </pre>
      </Row>

      <br />

      <Row className="mt-auto mb-5">
        <Col sm={6}>
          <Link
            title="Simple query"
            href="/learn/by-example/jdbc-query-operation"
          >
            <div className="btnContainer d-flex align-items-center me-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#3ad1ca"
                className={`${
                  btnHover[0] ? "btnArrowHover" : "btnArrow"
                } bi bi-arrow-right`}
                viewBox="0 0 16 16"
                onMouseEnter={() => updateBtnHover([true, false])}
                onMouseOut={() => updateBtnHover([false, false])}
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <div className="d-flex flex-column ms-4">
                <span className="btnPrev">Previous</span>
                <span
                  className={btnHover[0] ? "btnTitleHover" : "btnTitle"}
                  onMouseEnter={() => updateBtnHover([true, false])}
                  onMouseOut={() => updateBtnHover([false, false])}
                >
                  Simple query
                </span>
              </div>
            </div>
          </Link>
        </Col>
        <Col sm={6}>
          <Link
            title="Query with advanced mapping"
            href="/learn/by-example/jdbc-query-column-mapping"
          >
            <div className="btnContainer d-flex align-items-center ms-auto">
              <div className="d-flex flex-column me-4">
                <span className="btnNext">Next</span>
                <span
                  className={btnHover[1] ? "btnTitleHover" : "btnTitle"}
                  onMouseEnter={() => updateBtnHover([false, true])}
                  onMouseOut={() => updateBtnHover([false, false])}
                >
                  Query with advanced mapping
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#3ad1ca"
                className={`${
                  btnHover[1] ? "btnArrowHover" : "btnArrow"
                } bi bi-arrow-right`}
                viewBox="0 0 16 16"
                onMouseEnter={() => updateBtnHover([false, true])}
                onMouseOut={() => updateBtnHover([false, false])}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
