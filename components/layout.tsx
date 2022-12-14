import Head from "next/head";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { TopLoading } from "./top-loading";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Epam Nextjs Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-56 w-full items-center bg-gray-200 pl-12">
        <Link href="/">
          <a>
            <h1 className="text-6xl text-cyan-500">
              <strong>NEXTJS</strong>
              <span className="ml-3 border-l-4 border-l-gray-400 pl-3 font-thin">
                THE EVERYTHING FRAMEWORK
              </span>
            </h1>
          </a>
        </Link>
      </div>
      <TopLoading />
      <main className="min-h-[calc(100vh_-_24rem)] p-12">{children}</main>
      <footer className="h-40 w-full bg-gray-200"></footer>
    </>
  );
};
