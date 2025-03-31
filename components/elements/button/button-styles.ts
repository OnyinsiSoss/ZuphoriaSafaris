import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonStyles = cva("", {
  variants: {
    variant: {
      primary:
        "bg-slate-800 border py-2 px-2 rounded-md text-slate-300  hover:bg-transparent duration-300 hover:text-emerald-950",
      secondary: 
        "bg-transparent text-white border hover:bg-white hover:text-green-950 text-1xl rounded-md px-2 py-2 duration-300",
      tetriary:
        "border-2 border-green-950 border-solid rounded-full py-4 px-6 hover:bg-green-950 duration-300 hover:text-white",

      "tetriary-reversed":
        "border py-3 px-5 rounded-md text-white hover:bg-primary-300 duration-300 hover:text-black",
    },
    size: {
      sm: "",
      md: "",
    },
  },
});

export type ButtonStylesProps = VariantProps<typeof buttonStyles>;
