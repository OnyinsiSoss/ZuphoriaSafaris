import cx from "clsx";

type SubTitle = {
  subTitle: string;
  className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
  return (
    <div className="text-5xl text-emerald-950 border-b border-neutral-900 mb-4 pb-4">
      <span className={cx(className)}>{subTitle}</span>
    </div>
  );
};
