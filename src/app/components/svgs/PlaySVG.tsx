import { forwardRef } from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}
const PlaySVG = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={`${className} fill-current`} width="16" height="18" viewBox="0 0 16 18">
    <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"></path>
  </svg>
));

PlaySVG.displayName = "PlaySVG";
export default PlaySVG;
