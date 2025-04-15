import cx from "clsx";

type SubTitle = {
  subTitle: string;
  className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
  return (
    <div className="text-5xl text-emerald-950 items-center justify-center text-center gap-2 border-b border-neutral-900 mb-12 sm:mb-14 pb-4">
      <span className={cx(className)}>{subTitle}</span>
    </div>
  );
};
