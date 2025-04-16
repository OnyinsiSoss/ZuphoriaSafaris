  import cx from "clsx";

  type SectionTypes = {
    children: React.ReactNode;
    className: string;
  };
  export const Section = ({ children, className }: SectionTypes) => {
    return (
      <section className={cx("py-12 sm:py-24 overflow-hidden", className)}>
        {children}
      </section>
    );
  };
