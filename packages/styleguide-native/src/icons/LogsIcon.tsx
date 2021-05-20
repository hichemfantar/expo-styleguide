import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../../types";
export default function LogsIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M13.103 9.45c0 .25-.067.473-.2.667a1.3 1.3 0 01-.572.453 2.233 2.233 0 01-.878.157c-.67 0-1.205-.194-1.602-.581l.485-.534c.308.27.673.406 1.094.406.203 0 .364-.042.485-.127a.425.425 0 00.188-.366.408.408 0 00-.159-.343c-.1-.085-.292-.17-.573-.255-.475-.143-.813-.312-1.012-.505a1 1 0 01-.298-.75c0-.24.066-.448.199-.626.136-.178.32-.314.55-.407.234-.093.493-.139.778-.139.596 0 1.08.174 1.45.523l-.45.516a1.406 1.406 0 00-.445-.25 1.38 1.38 0 00-.485-.087.82.82 0 00-.445.105.321.321 0 00-.157.29.33.33 0 00.07.215c.05.058.132.112.245.163.113.05.283.11.51.18.412.123.719.284.918.482.202.193.304.464.304.812zm-7.114.481h-.755V6.605h-.819l-1.31.79.392.632.837-.523v2.427h-.977v.697h2.632V9.93zm1.577-.308a.626.626 0 00-.187.453c0 .178.062.331.187.459a.633.633 0 00.462.192c.18 0 .331-.064.456-.192a.623.623 0 00.193-.459.617.617 0 00-.193-.453.614.614 0 00-.456-.191.633.633 0 00-.462.191zm8.541-3.013a2.131 2.131 0 00-.725-.11c-.36 0-.683.083-.971.25a1.729 1.729 0 00-.679.725c-.164.318-.246.695-.246 1.132 0 .45.08.835.24 1.156.16.317.38.557.661.72.285.162.612.244.983.244.55 0 1.004-.182 1.363-.546l-.433-.552a2.315 2.315 0 01-.416.267 1.057 1.057 0 01-.462.093.814.814 0 01-.69-.336c-.167-.229-.251-.577-.251-1.046 0-.468.084-.818.251-1.05a.799.799 0 01.673-.349c.292 0 .561.099.807.296l.468-.563a1.95 1.95 0 00-.573-.33zM5.14 13.43a1.695 1.695 0 00-.76-.157 1.7 1.7 0 00-.807.18c-.222.12-.413.29-.573.511l.562.424c.109-.143.22-.246.333-.308a.777.777 0 01.398-.098c.175 0 .31.046.403.139.094.093.14.223.14.389a.997.997 0 01-.163.51 4.215 4.215 0 01-.515.657c-.238.255-.596.614-1.076 1.074v.65h2.69l.1-.702H4.14c.425-.376.752-.69.982-.94.234-.256.402-.486.503-.692.102-.205.152-.418.152-.638 0-.21-.054-.4-.163-.575a1.1 1.1 0 00-.474-.424zm2.239 3.42c0-.174.062-.325.187-.453a.633.633 0 01.462-.192c.18 0 .331.064.456.192a.617.617 0 01.193.453c0 .178-.064.33-.193.458a.614.614 0 01-.456.192.633.633 0 01-.462-.192.633.633 0 01-.187-.458z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.851 16.763a.516.516 0 01-.047-.25v-1.208c0-.727-.452-1.091-1.357-1.091-.175 0-.372.021-.59.064a3.65 3.65 0 00-.62.168l.21.61c.148-.05.3-.09.456-.116.16-.031.293-.047.398-.047.41 0 .614.159.614.476v.11H11.5c-.48 0-.852.094-1.117.28a.882.882 0 00-.398.771c0 .287.096.521.287.703.19.178.446.267.766.267.203 0 .394-.035.573-.105a1.14 1.14 0 00.445-.313.7.7 0 00.292.284c.125.062.28.103.468.122l.193-.603a.286.286 0 01-.158-.122zm-1.181-.006a.65.65 0 01-.316.087.45.45 0 01-.31-.099.363.363 0 01-.106-.278c0-.31.25-.465.75-.465h.227v.505a.608.608 0 01-.245.25zm2.828-.627c.059.468.308.702.749.702.265 0 .53-.085.796-.255l.368.5a1.738 1.738 0 01-.544.313 2.1 2.1 0 01-.696.11c-.347 0-.641-.068-.883-.203a1.375 1.375 0 01-.55-.575 1.936 1.936 0 01-.181-.86c0-.309.058-.588.175-.835.12-.252.295-.45.52-.592.23-.148.504-.221.82-.221.296 0 .553.064.772.191.218.124.386.306.503.546.12.236.18.519.18.848 0 .128-.005.238-.017.33h-2.012zm.574-1.3a.496.496 0 00-.404.185c-.101.12-.162.306-.181.557h1.14c-.008-.495-.193-.743-.556-.743z"
        fill={color || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v16zM1 5h18v3.149h-.942V6.605h-.96v4.023h.96V8.933H19v4.434a1.879 1.879 0 00-.614-.094c-.546 0-1.008.182-1.387.546l.474.488c.246-.232.515-.348.807-.348.176 0 .318.044.427.133.11.085.164.203.164.354a.48.48 0 01-.17.395c-.109.089-.257.134-.444.134H18l-.106.627h.369c.456 0 .684.2.684.603a.538.538 0 01-.187.436.751.751 0 01-.497.157c-.34 0-.62-.128-.842-.384l-.521.482c.172.194.378.343.62.447.242.105.51.157.807.157.249 0 .473-.034.673-.1v.6a1 1 0 01-1 1H2a1 1 0 01-1-1V5zm18 10.28v-.03a1.876 1.876 0 01-.064.02l.064.01z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
