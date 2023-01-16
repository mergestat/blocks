import { Icon } from '../components/Icon';
import { IconProps } from '../utils/types';

function SvgSingleMetric(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.86058 0.0898656C2.98021 0.153914 3.08022 0.249218 3.14996 0.365622C3.2197 0.482027 3.25655 0.61517 3.25658 0.750866V5.52087H3.96758C4.1665 5.52087 4.35726 5.59988 4.49791 5.74054C4.63857 5.88119 4.71758 6.07195 4.71758 6.27087C4.71758 6.46978 4.63857 6.66054 4.49791 6.8012C4.35726 6.94185 4.1665 7.02087 3.96758 7.02087H1.01558C0.816671 7.02087 0.625905 6.94185 0.485253 6.8012C0.3446 6.66054 0.265583 6.46978 0.265583 6.27087C0.265583 6.07195 0.3446 5.88119 0.485253 5.74054C0.625905 5.59988 0.816671 5.52087 1.01558 5.52087H1.75658V2.15087L1.42258 2.37387C1.25707 2.4816 1.05575 2.5197 0.862316 2.47991C0.668883 2.44011 0.498951 2.32563 0.389406 2.16132C0.279862 1.997 0.239546 1.79611 0.277211 1.60225C0.314876 1.40839 0.427481 1.23721 0.590583 1.12587L2.09058 0.125866C2.20356 0.0505837 2.33486 0.00738073 2.47047 0.000864534C2.60607 -0.00565166 2.74091 0.0247634 2.86058 0.0888656V0.0898656ZM6.25658 4.75087C6.25658 4.55195 6.3356 4.36119 6.47625 4.22054C6.61691 4.07988 6.80767 4.00087 7.00658 4.00087H11.0066C11.1548 4.001 11.2997 4.04505 11.4229 4.12747C11.5461 4.20989 11.6422 4.32698 11.6989 4.46394C11.7556 4.60091 11.7704 4.7516 11.7415 4.897C11.7127 5.0424 11.6413 5.17598 11.5366 5.28087L9.64658 7.17287C9.95858 7.24887 10.2506 7.35287 10.5136 7.49187C11.2556 7.88287 11.7576 8.55487 11.7576 9.49687C11.7576 10.1499 11.5266 10.7049 11.1286 11.1239C10.7426 11.5319 10.2346 11.7769 9.72058 11.9009C8.71058 12.1439 7.49558 11.9639 6.59658 11.3739C6.43639 11.2623 6.32603 11.0926 6.28897 10.9009C6.2519 10.7092 6.29104 10.5106 6.39807 10.3473C6.50511 10.184 6.6716 10.0689 6.86216 10.0265C7.05272 9.98398 7.25234 10.0175 7.41858 10.1199C7.95258 10.4699 8.73858 10.5939 9.36958 10.4419C9.67558 10.3689 9.89958 10.2409 10.0396 10.0929C10.1686 9.95687 10.2576 9.77287 10.2576 9.49687C10.2576 9.18887 10.1346 8.98787 9.81358 8.81887C9.44058 8.62187 8.83358 8.50087 8.00758 8.50087C7.85934 8.50074 7.71447 8.45668 7.59125 8.37426C7.46803 8.29184 7.37201 8.17475 7.3153 8.03779C7.25858 7.90083 7.24373 7.75013 7.27262 7.60473C7.3015 7.45933 7.37283 7.32575 7.47758 7.22087L9.19758 5.50087H7.00658C6.80767 5.50087 6.61691 5.42185 6.47625 5.2812C6.3356 5.14054 6.25658 4.94978 6.25658 4.75087ZM2.66958 10.5139C2.31958 10.4639 1.89958 10.6269 1.68658 11.0859C1.64642 11.1772 1.58842 11.2597 1.51599 11.3283C1.44355 11.397 1.35814 11.4505 1.26476 11.4857C1.17138 11.521 1.07191 11.5372 0.972174 11.5335C0.872437 11.5298 0.774442 11.5062 0.683931 11.4642C0.593421 11.4221 0.512216 11.3624 0.445075 11.2886C0.377934 11.2147 0.326207 11.1282 0.292926 11.0341C0.259645 10.94 0.245479 10.8402 0.251259 10.7406C0.257038 10.641 0.282646 10.5435 0.326583 10.4539C0.834583 9.35987 1.91558 8.88887 2.88458 9.02887C3.88458 9.17387 4.75658 9.97387 4.75658 11.2509C4.75658 12.6839 3.66858 13.4429 2.96658 13.9319C2.65858 14.1479 2.39558 14.3289 2.19458 14.5049H4.25658C4.45549 14.5049 4.64626 14.5839 4.78691 14.7245C4.92757 14.8652 5.00658 15.056 5.00658 15.2549C5.00658 15.4538 4.92757 15.6445 4.78691 15.7852C4.64626 15.9258 4.45549 16.0049 4.25658 16.0049H1.00658C0.80767 16.0049 0.616905 15.9258 0.476253 15.7852C0.3356 15.6445 0.256583 15.4538 0.256583 15.2549C0.256583 14.5649 0.556583 14.0439 0.926583 13.6449C1.27458 13.2729 1.72658 12.9689 2.07658 12.7249C2.87658 12.1649 3.25658 11.8209 3.25658 11.2509C3.25658 10.7779 2.98958 10.5609 2.66958 10.5139Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SvgSingleMetric;