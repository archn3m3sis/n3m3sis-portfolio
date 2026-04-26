import { PointerBase } from "./pointer-base";

type Props = {
  className?: string;
  size?: number;
};

export function WestPointerIcon(props: Props) {
  return <PointerBase {...props} idSuffix="west" rotation={90} />;
}
