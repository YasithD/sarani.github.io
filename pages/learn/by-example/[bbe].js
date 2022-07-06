import fs from "fs";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Col } from "react-bootstrap";
import BBEs from "../../../swan-lake/by-example";
import Head from "next/head";

import Layout from "../../../layouts/LayoutDocs";
import LeftNav from "../../../components/common/left-nav/LeftNav";

export async function getStaticPaths() {
  const bbes = fs.readdirSync("swan-lake/by-example");
  const paths = [];

  bbes.forEach((bbeDir) => {
    const relDir = `swan-lake/by-example/${bbeDir}`;
    if (fs.statSync(relDir).isDirectory()) {
      paths.push({
        params: {
          bbe: bbeDir,
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { bbe } }) {
  const frontmatterString = fs.readFileSync(
    `swan-lake/by-example/${bbe}/liquid.json`
  );
  const frontmatter = JSON.parse(frontmatterString);
  const id = bbe;
  return {
    props: {
      frontmatter,
      id,
    },
  };
}

export default function BBEPage({ frontmatter, id }) {
  const router = useRouter();
  const { bbe } = router.query;

  const [bbeComponent, updateBBE] = useState(null);

  useEffect(() => {
    if (bbe != undefined) {
      // update component
      const splitUrl = bbe
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1));
      const bbeComponentName = splitUrl.join("");
      const BBE = BBEs[bbeComponentName];
      updateBBE(<BBE />);
    }
  }, [bbe]);

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.keywords} />

        <title>{frontmatter.title}</title>

        {/* <!--FB--> */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Ballerina - ${frontmatter.title}`}
        />

        {/* <!--LINKED IN  --> */}
        <meta property="og:description" content={frontmatter.description} />

        {/* <!--TWITTER--> */}
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta
          property="twitter:text:description"
          content={frontmatter.description}
        />
      </Head>

      <Layout>
        <Col sm={3} xxl={2} className="leftNav d-none d-sm-block">
          <LeftNav launcher="learn" id={id} />
        </Col>
        <Col xs={12} className="d-block d-sm-none">
          Mobile Left Nav
        </Col>
        <Col xs={12} sm={7} xxl={8} className="mdContent">
          <Container className="h-100">
            {bbeComponent != null && bbeComponent}
          </Container>
        </Col>
      </Layout>
    </>
  );
}
