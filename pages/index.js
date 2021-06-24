import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { fetchAll } from "../src/ApiStore";

//const [country, setCountry] = useState();

export default function Index({ articles }) {
  // console.log(articles)
  return (
    <Card>
      {articles.map((article) => (
        <CardContent key={article.title}>{article.description}</CardContent>
      ))}
    </Card>
  );
}

// API SEARCH PART //

export async function getServerSideProps(context) {
  const data = await fetchAll();
  if (!data) {
    return window.alert("News not found");
  }
  return {
    props: { articles: data.articles },
  };
}
