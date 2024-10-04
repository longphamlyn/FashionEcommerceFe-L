// eslint-disable-next-line no-unused-vars
import React from "react";
import Headers from "../../components/headers/Headers";
import Banner from "../../components/banner/Banner";
import Products from "../../components/Products";
import BlogCards from "../../components/blogcards/BlogCards";
import Footers from "../../components/footers/Footers";

const PageHome = () => {
  return (
    <div>
      <Headers />
      <Banner />
      <Products />
      <BlogCards />
      <Footers />
    </div>
  );
};

export default PageHome;
