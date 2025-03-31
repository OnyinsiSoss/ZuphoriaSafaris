  import cx from "clsx";

  type SectionTypes = {
    children: React.ReactNode;
    className: string;
  };
  export const Section = ({ children, className }: SectionTypes) => {
    return (
      <section className={cx("py-24 sm:px-12 sm:py-32 overflow-hidden", className)}>
        {children}
      </section>
    );
  };
