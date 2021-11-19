import React, { ReactElement } from "react";
import ProfileCard from "../src/components/layouts/IndexPage/ProfileCard";
import Sup from "../src/components/layouts/IndexPage/Sup";

const Page = (): ReactElement => {
  return (
    <>
      <ProfileCard />
      <Sup />
    </>
  );
};

export default Page;
