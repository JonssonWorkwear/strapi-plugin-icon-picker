import * as React from 'react';
function SvgFlameretardant(props, svgRef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1rem"
      height="1rem"
      ref={svgRef}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 2.817L12 3.25l-.25-.433a.5.5 0 01.5 0zM12 3.837l-.03.02a18.241 18.241 0 00-3.11 2.571C7.151 8.204 5.5 10.71 5.5 13.75a6.5 6.5 0 1013 0c0-3.04-1.651-5.546-3.36-7.322a18.242 18.242 0 00-3.11-2.571l-.03-.02zm-.25-1.02l.25.433.25-.433.003.002.005.003.017.01a6.664 6.664 0 01.297.184 19.243 19.243 0 013.289 2.718C17.65 7.597 19.5 10.34 19.5 13.75a7.5 7.5 0 01-15 0c0-3.41 1.849-6.154 3.64-8.015a19.242 19.242 0 013.288-2.719 11.169 11.169 0 01.297-.184l.017-.01.005-.003.003-.002z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.25 9.567L12 10l-.25-.433a.5.5 0 01.5 0zM12 10.593a8.9 8.9 0 00-1.39 1.17c-.834.87-1.61 2.064-1.61 3.488a3 3 0 106 0c0-1.427-.776-2.62-1.61-3.488a8.87 8.87 0 00-1.39-1.17zm2.11.476c.916.952 1.89 2.383 1.89 4.181a4 4 0 01-8 0c0-1.796.974-3.227 1.89-4.18a9.9 9.9 0 011.688-1.397l.122-.076.034-.02.01-.007.003-.001.002-.002L12 10l.25-.433.002.001.003.002.01.006.034.02.122.077a9.873 9.873 0 011.69 1.396z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFlameretardant);
export default ForwardRef;
