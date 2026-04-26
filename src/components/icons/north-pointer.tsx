import { PointerBase } from "./pointer-base";

type Props = {
  className?: string;
  size?: number;
};

export function NorthPointerIcon(props: Props) {
  return <PointerBase {...props} idSuffix="north" rotation={180} />;
}
