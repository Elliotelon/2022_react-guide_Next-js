//our-domain/news/something-important
import { useRouter } from "next/router";
import React from "react";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  //the fetch the news item with newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
