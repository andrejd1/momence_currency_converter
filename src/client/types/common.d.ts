import { ReactNode } from "react";

export type TypographyProps = {
  tag: TagVariants;
  children: ReactNode;
};

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";
