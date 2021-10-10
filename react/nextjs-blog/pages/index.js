import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, resumeProjects, headerLinks } from "./../lib/resume";

export default function Home({ allPostsData }) {
  return (
    <Head>
      <title>Hello World!</title>
      <FontAwesomeIcon icon={["fab", "github"]} />
    </Head>
  );
}
