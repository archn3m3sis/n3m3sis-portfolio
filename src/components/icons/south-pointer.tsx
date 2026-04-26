import { PointerBase } from "./pointer-base";

type Props = {
  className?: string;
  size?: number;
};

export function SouthPointerIcon(props: Props) {
  return <PointerBase {...props} idSuffix="south" rotation={0} />;
}
