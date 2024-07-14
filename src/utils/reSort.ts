import { ReSort } from "../components/Board/types";
import { BoxType } from "../components/Box/types";

const reSort = ({ index, indexVoid, value, list, cb }: ReSort) => {
  const newList: BoxType[] = list.map((e, i) => {
    if (i === index) {
      return { id: 0, value: 0 };
    }
    if (i === indexVoid) {
      return { id: value, value: value };
    }
    return e;
  });
  cb && cb();
  return newList;
};

export { reSort };
