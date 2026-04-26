// Shared stop pair for top-bar mark icons.
//
// Each mark icon's gradient is filled by a pair of <stop> elements.
// Grey baseline (matches the original artwork): #262626 transparent → opaque.
// Colored accent (active / hovered): cyan #00fffa → magenta #cc5de8.
//
// Toggling `colored` flips every gradient on the icon at once, so the
// switch reads as a single coordinated transition rather than the icon
// strobing piecewise.
type Props = {
  colored?: boolean;
};

export function MarkStops({ colored }: Props) {
  if (colored) {
    return (
      <>
        <stop offset="0" stopColor="#00fffa" stopOpacity="0.1098" />
        <stop offset="1" stopColor="#cc5de8" />
      </>
    );
  }
  return (
    <>
      <stop offset="0" stopColor="#262626" stopOpacity="0" />
      <stop offset="1" stopColor="#262626" stopOpacity=".8" />
    </>
  );
}
