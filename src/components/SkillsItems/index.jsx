export default function SkillsItems({
  linkHref, textLength, textXPosition, name, width, shapeRenderingWidth,
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="28" role="img" aria-label={name} className="rounded-sm">
      <title>{name}</title>
      <g shapeRendering="crispEdges">
        <rect width="32" height="28" className="fill-blue-400" />
        <rect x="32" width={shapeRenderingWidth} height="28" className="fill-blue-400" />
      </g>
      <g fill="#fff" textAnchor="middle" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" textRendering="geometricPrecision" fontSize="100">
        <image x="9" y="7" width="14" height="14" xlinkHref={linkHref} />
        <text transform="scale(.1)" x={textXPosition} y="175" textLength={textLength} className="fill-gray-900 dark:fill-gray-200 duration-700" fontWeight="bold">{name}</text>
      </g>
    </svg>
  );
}
