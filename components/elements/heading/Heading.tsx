import cx from "clsx";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ as = "h2", children, className }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);

  return <Heading className={cx(className)}>{children}<span className="text-emerald-950 md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none"></span></Heading>;
};

export { Heading };
