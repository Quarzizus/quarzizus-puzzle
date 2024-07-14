import { BoxType } from "../Box/types";

interface ReSort {
  index: number;
  indexVoid: number;
  value: number;
  list: BoxType[];
  cb?: () => void;
}

export type { ReSort };
