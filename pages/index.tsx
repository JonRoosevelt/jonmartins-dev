import React, { ReactElement } from "react";
import ProfileCard from "../src/components/layouts/IndexPage/ProfileCard";
import Sup from "../src/components/layouts/IndexPage/Sup";
import History from "../src/components/layouts/IndexPage/History";
const Page = (): ReactElement => {
  return (
    <>
      <ProfileCard />
      <Sup />
      <History />
    </>
  );
};

export default Page;
