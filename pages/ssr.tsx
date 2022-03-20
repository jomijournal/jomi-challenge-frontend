import { GetServerSideProps, NextPage } from "next";
import { sleep } from "utils/sleep";
import Link from "next/link";
import { Box } from "@mui/material";
import { MuiLink } from "components/common/Alias";

const SsrPage: NextPage = () => {
  return (
    <div>
      SSR Page
      <Box>
        <Link href={"/another-page"} passHref>
          <MuiLink>To another page</MuiLink>
        </Link>
      </Box>
    </div>
  );
};

export default SsrPage;

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("inside ssr");
  await sleep(6000);

  console.log("returning ssr");
  return {
    props: {},
  };
};
