import { PointerBase } from "./pointer-base";

type Props = {
  className?: string;
  size?: number;
};

export function EastPointerIcon(props: Props) {
  return <PointerBase {...props} idSuffix="east" rotation={-90} />;
}
