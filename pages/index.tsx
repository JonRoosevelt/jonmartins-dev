import React, { ReactElement } from "react";
import ProfileCard from "../src/components/layouts/IndexPage/ProfileCard";
import Sup from "../src/components/layouts/IndexPage/Sup";
import History from "../src/components/layouts/IndexPage/History";
import Stack from "../src/components/layouts/IndexPage/Stack";

const Page = (): ReactElement => {
  return (
    <>
      <ProfileCard />
      <Sup />
      <History />
      <Stack />
    </>
  );
};

export default Page;
