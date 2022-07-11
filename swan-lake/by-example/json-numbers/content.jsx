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

const codeSnippetData = [`import ballerina/io;

public function main() returns error? {
    int a = 1;
    float b = 2.1;
    decimal c = 3.24;

    // The \`json\` type allows \`int|float|decimal\`.
    json[] d = [a, b, c];

    // \`toJsonString()\` will convert \`int|float|decimal\` into JSON
    // numeric syntax.
    string e = d.toJsonString();

    io:println(e);

    // \`fromJsonString()\` converts JSON numeric syntax into \`int\`,
    // if possible, and otherwise \`decimal\`.
    json f = check e.fromJsonString();

    io:println(f);

    json[] g = <json[]> f;

    io:println(typeof g[0]);
    io:println(typeof g[1]);
    io:println(typeof g[2]);

    // \`cloneWithType()\` or \`ensureType()\` will convert from \`int\` or \`decimal\` into the user's
    // chosen numeric type.
    float h = check g[2].ensureType();

    io:println(h);

    // \`-0\` is an edge case: represented as \`float\`.
    string i = "-0";

    io:println(typeof check i.fromJsonString());
    return;
}
`]

export default function JsonNumbers() {
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
      <h1>JSON numbers</h1>


<p>Ballerina has three numeric types; but JSON has one.</p>

<p>The <code>json</code> type allows <code>int|float|decimal</code>.</p>

<p><code>toJsonString()</code> will convert <code>int|float|decimal</code> into JSON numeric syntax.</p>

<p><code>fromJsonString()</code> converts JSON numeric syntax into <code>int</code>, if possible, and</p>

<p>otherwise <code>decimal</code>.</p>

<p><code>cloneWithType()</code> or <code>ensureType()</code> will convert from <code>int</code> or <code>decimal</code> into user's</p>

<p>chosen numeric type.</p>

<p>Net result is that you can use <code>json</code> to exchange full range of all three Ballerina</p>

<p>numeric types.</p>

<p><code>-0</code> is an edge case: represented as <code>float</code>.</p>


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
            "https://play.ballerina.io/?gist=59ff3504d1323272f7c82a117fdab1a6&file=json_numbers.bal",
            "_blank"
          );
        }}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </button>
    <button
      className="btn rounded"
      onClick={() => {
        window.open("https://github.com/ballerina-platform/ballerina-distribution/tree/v2201.0.3/json-numbers", "_blank");
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
    <code className="d-flex flex-column"><span>{`bal run json_numbers.bal`}</span>
<span>{`[1, 2.1, 3.24]`}</span>
<span>{`[1,2.1,3.24]`}</span>
<span>{`typedesc 1`}</span>
<span>{`typedesc 2.1`}</span>
<span>{`typedesc 3.24`}</span>
<span>{`3.24`}</span>
<span>{`typedesc -0.0`}</span>
</code></pre></Row>

      <br />

      <Row className="mt-auto mb-5">
        <Col sm={6}>
      <Link
        title="Resource method typing"
        href="/learn/by-example/resource-method-typing"
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
              Resource method typing
            </span>
          </div>
        </div>
      </Link>
    </Col>
        <Col sm={6}>
      <Link
        title="Table syntax"
        href="/learn/by-example/table-syntax"
      >
        <div className="btnContainer d-flex align-items-center ms-auto">
          <div className="d-flex flex-column me-4">
            <span className="btnNext">Next</span>
            <span
              className={btnHover[1] ? "btnTitleHover" : "btnTitle"}
              onMouseEnter={() => updateBtnHover([false, true])}
              onMouseOut={() => updateBtnHover([false, false])}
            >
              Table syntax
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
  )
}