import { Box } from "@mui/material";
import { MuiLink } from "components/common/Alias";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { sleep } from "utils/sleep";

const AnotherPage: NextPage = () => {
  return (
    <div>
      Another Page
      <Box>
        <Link href={"/ssr"} passHref>
          <MuiLink>Back</MuiLink>
        </Link>
      </Box>
    </div>
  );
};

export default AnotherPage;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("inside ssr");
  await sleep(1500);

  console.log("returning ssr");
  return {
    props: {},
  };
};
