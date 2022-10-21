import Link from "next/link";
import { FunctionComponent } from "react";

export type BreadCrumbsProps = {
  crumbs: {
    href?: string;
    name: string;
  }[];
};

export const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = ({
  crumbs,
}) => {
  return (
    <div className="flex">
      {crumbs.map(({ href, name }, index) => {
        if (index === 0) {
          return (
            <Link key={name} href="/">
              <a className="text-lg text-gray-400 transition-colors hover:text-gray-700">
                Home
              </a>
            </Link>
          );
        } else if (index === crumbs.length - 1) {
          return (
            <p key={name} className="text-lg text-gray-700">
              <span className="mx-2 text-cyan-500">/</span>
              {name}
            </p>
          );
        }
        return (
          <Link key={name} href={href || "/"}>
            <a className="text-lg text-gray-400 transition-colors hover:text-gray-700">
              <span className="mx-2 text-cyan-500">/</span>
              {name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
