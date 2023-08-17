import * as React from 'react';
function SvgSettings(props, svgRef) {
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
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipPath="url(#Settings_svg__Settings_svg__clip0_4790_120687)"
        clipRule="evenodd"
      >
        <path d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM7.75 12a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z" />
        <path d="M9.454 2.456a.5.5 0 01.44.093l1.82 1.456c.192-.007.384-.007.575 0L14.11 2.55a.5.5 0 01.44-.092 9.844 9.844 0 012.401.992.5.5 0 01.246.377l.26 2.317c.14.13.276.266.406.406l2.316.26a.5.5 0 01.377.246 9.83 9.83 0 01.995 2.4.5.5 0 01-.093.44l-1.455 1.822c.006.19.006.382 0 .574l1.454 1.821a.5.5 0 01.093.44 9.82 9.82 0 01-.988 2.4.5.5 0 01-.377.247l-2.317.26a8.04 8.04 0 01-.406.406l-.26 2.316a.5.5 0 01-.246.377 9.795 9.795 0 01-2.4.994.5.5 0 01-.44-.092l-1.822-1.456a8.084 8.084 0 01-.574 0L9.9 21.46a.5.5 0 01-.44.093 9.82 9.82 0 01-2.4-.988.5.5 0 01-.247-.377l-.26-2.317a8.112 8.112 0 01-.407-.407l-2.32-.271a.5.5 0 01-.373-.246 9.792 9.792 0 01-.995-2.4.5.5 0 01.092-.44l1.456-1.822a8.155 8.155 0 010-.574L2.55 9.889a.5.5 0 01-.092-.44c.223-.84.557-1.648.992-2.4a.5.5 0 01.377-.247l2.317-.26c.13-.14.266-.275.406-.405l.26-2.316a.5.5 0 01.247-.378 9.794 9.794 0 012.397-.987zM7.775 4.188l-.253 2.247a.5.5 0 01-.165.319c-.21.186-.41.386-.596.596a.5.5 0 01-.318.165l-2.25.253a8.822 8.822 0 00-.701 1.698l1.412 1.768a.5.5 0 01.108.342 7.149 7.149 0 000 .844.5.5 0 01-.108.342L3.49 14.53c.175.59.41 1.159.704 1.699l2.252.264a.5.5 0 01.316.164c.187.21.386.41.596.597a.5.5 0 01.165.318l.253 2.248c.54.292 1.109.526 1.698.699l1.769-1.413a.5.5 0 01.341-.108c.281.017.563.017.845 0a.5.5 0 01.341.108l1.769 1.413a8.796 8.796 0 001.697-.703l.253-2.249a.5.5 0 01.165-.318c.21-.187.41-.386.596-.596a.5.5 0 01.318-.165l2.249-.253a8.88 8.88 0 00.698-1.698l-1.412-1.769a.5.5 0 01-.109-.341 7.17 7.17 0 000-.845.5.5 0 01.109-.341l1.413-1.769a8.796 8.796 0 00-.704-1.697l-2.249-.253a.5.5 0 01-.318-.165 7.089 7.089 0 00-.596-.596.5.5 0 01-.165-.318l-.253-2.25a8.82 8.82 0 00-1.698-.701l-1.768 1.412a.5.5 0 01-.342.108 7.149 7.149 0 00-.845 0 .5.5 0 01-.341-.108L9.469 3.49a8.794 8.794 0 00-1.694.698z" />
      </g>
      <defs>
        <clipPath id="Settings_svg__Settings_svg__clip0_4790_120687">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSettings);
export default ForwardRef;
