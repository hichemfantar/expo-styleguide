import React, { HTMLAttributes } from 'react';

import { mergeClasses } from '../helpers/mergeClasses';

export function RouterLogo({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
  const _className = mergeClasses('icon-md text-icon-default', className);
  return (
    <svg viewBox="0 0 20 20" fill="none" role="img" className={_className} {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.51006 18.8434L9.53354 18.4134L9.56067 17.9149C9.70602 17.9228 9.85252 17.9268 10 17.9268C10.1475 17.9268 10.294 17.9228 10.4393 17.9149L10.4665 18.4134L10.4899 18.8434C12.5668 18.7302 14.4532 17.9014 15.9069 16.5994L15.6195 16.2786L15.2864 15.9067C15.5044 15.7115 15.7115 15.5044 15.9067 15.2864L16.2786 15.6195L16.5994 15.9069C17.9014 14.4532 18.7302 12.5668 18.8434 10.4899L18.4134 10.4665L17.9149 10.4393C17.9228 10.294 17.9268 10.1475 17.9268 10C17.9268 9.85252 17.9228 9.70602 17.9149 9.56067L18.4134 9.53354L18.8434 9.51006C18.7302 7.43323 17.9014 5.54683 16.5994 4.09314L16.2786 4.38046L15.9067 4.71354C15.7115 4.49559 15.5044 4.2885 15.2864 4.09328L15.6195 3.7214L15.9069 3.40062C14.4532 2.0986 12.5668 1.26984 10.4899 1.15662L10.4665 1.58662L10.4393 2.08511C10.294 2.07719 10.1475 2.07317 10 2.07317C9.85252 2.07317 9.70602 2.07719 9.56067 2.08511L9.53354 1.58662L9.51006 1.15662C7.43323 1.26984 5.54683 2.0986 4.09315 3.40062L4.38046 3.7214L4.71354 4.09328C4.49559 4.2885 4.2885 4.49559 4.09328 4.71354L3.7214 4.38046L3.40062 4.09315C2.0986 5.54683 1.26984 7.43323 1.15662 9.51006L1.58662 9.53354L2.08511 9.56067C2.07719 9.70602 2.07317 9.85252 2.07317 10C2.07317 10.1475 2.07719 10.294 2.08511 10.4393L1.58662 10.4665L1.15662 10.4899C1.26984 12.5668 2.0986 14.4532 3.40062 15.9069L3.7214 15.6195L4.09328 15.2864C4.2885 15.5044 4.49559 15.7115 4.71354 15.9067L4.38046 16.2786L4.09315 16.5994C5.54683 17.9014 7.43323 18.7302 9.51006 18.8434ZM20 10C20 15.5229 15.5229 20 10 20C4.47715 20 0 15.5229 0 10C0 4.47715 4.47715 0 10 0C15.5229 0 20 4.47715 20 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.14777 10.3622L4.25351 10.0373L4.36101 9.89014C4.4513 9.76651 4.61944 9.59563 4.73245 9.48084C4.8812 9.3297 5.07742 9.13496 5.30312 8.91362C5.75546 8.46994 6.33928 7.9063 6.92723 7.3437C8.07319 6.24703 9.31976 5.07196 9.57814 4.86363L9.57852 4.86336L9.57883 4.8631C9.58828 4.85547 9.59834 4.84736 9.60886 4.83883C9.77654 4.70296 10.0755 4.46077 10.4509 4.35111C10.9203 4.21397 11.3363 4.31708 11.6086 4.39604L11.6264 4.4012L12.0156 4.52791L12.0331 4.53422C12.3001 4.63079 12.697 4.79248 12.9957 5.17984C13.2343 5.48938 13.3333 5.86098 13.3888 6.06927C13.3923 6.0824 13.3956 6.09487 13.3988 6.10665L13.3989 6.10696C13.4868 6.43352 13.8146 8.18115 14.1008 9.77459C14.2475 10.5917 14.3889 11.4 14.4909 12.0152C14.5417 12.3218 14.5838 12.5867 14.6121 12.783C14.6259 12.8795 14.638 12.9701 14.6459 13.0447C14.6496 13.0803 14.6541 13.1276 14.6564 13.1766C14.6575 13.2001 14.6589 13.2404 14.6573 13.2883C14.6572 13.289 14.6572 13.2898 14.6572 13.2909C14.6564 13.3158 14.6525 13.4542 14.6004 13.6142C14.4473 14.0847 14.1704 14.4484 13.7328 14.785L13.7326 14.7851L13.7324 14.7852C13.4428 15.0078 13.0273 15.2071 12.5475 15.2013C11.9922 15.1946 11.4437 14.9025 11.157 14.3211L11.1566 14.3202C11.1032 14.2117 11.0698 14.0985 11.0594 14.0635C11.0589 14.0619 11.0585 14.0604 11.058 14.0591C11.0406 14.0002 11.0223 13.9329 11.0043 13.8638C10.9679 13.7241 10.9239 13.5431 10.8749 13.3377C10.8185 13.1007 10.7521 12.8164 10.6802 12.5083C10.6282 12.2853 10.5733 12.0498 10.517 11.8108C10.3651 11.1648 10.2034 10.4912 10.0513 9.90165C9.58127 10.2887 9.05413 10.7382 8.55108 11.1709C8.36495 11.3311 8.18195 11.4891 8.00855 11.6388C7.76915 11.8454 7.54816 12.0362 7.363 12.1946C7.20255 12.3318 7.06034 12.4523 6.94877 12.5437C6.89353 12.589 6.83913 12.6327 6.79033 12.67C6.78925 12.6709 6.78803 12.6718 6.78665 12.6728C6.75768 12.695 6.66397 12.7668 6.55695 12.8231L6.5561 12.8235C5.98215 13.1248 5.36684 13.0381 4.91395 12.7167C4.52261 12.4389 4.30403 12.0333 4.20092 11.6828L4.20078 11.6824C4.07271 11.2463 4.03529 10.8352 4.13703 10.4074L4.14777 10.3622ZM9.71351 8.70279C9.71358 8.70272 9.71366 8.70272 9.71366 8.70264C9.72136 8.69647 9.72905 8.69037 9.73668 8.68427C9.75207 8.67192 9.76747 8.65965 9.78271 8.64753C9.99986 8.47452 10.1986 8.32154 10.3689 8.19852C10.4041 8.172 10.4453 8.15432 10.4889 8.14708C10.5325 8.13984 10.5771 8.14327 10.6192 8.15691C10.6612 8.17063 10.6993 8.19418 10.7304 8.22566C10.7613 8.25721 10.7842 8.2957 10.797 8.33785C10.8623 8.53755 10.9329 8.77825 11.0067 9.04593C11.0119 9.06468 11.0171 9.08366 11.0223 9.10272C11.0249 9.11209 11.0275 9.12162 11.03 9.13107C11.03 9.13115 11.03 9.13122 11.03 9.1313C11.2833 10.0616 11.5694 11.2874 11.7947 12.2532C11.9891 13.0862 12.1384 13.7258 12.1825 13.8154C12.3486 14.1525 12.7422 14.1043 13.0357 13.8787C13.3243 13.6568 13.4435 13.4744 13.5132 13.2603C13.5607 13.1146 12.4379 6.93503 12.2949 6.40437C12.1574 5.89438 12.1035 5.77547 11.6442 5.60933L11.2901 5.49409C10.8211 5.35805 10.7076 5.42211 10.2957 5.75366C9.877 6.09129 5.51013 10.2552 5.28426 10.5645L5.24931 10.6718C5.20506 10.8579 5.20989 11.0611 5.29773 11.3601C5.40221 11.7152 5.69205 11.9859 6.02474 11.8112C6.11321 11.7647 6.61032 11.3355 7.25778 10.7765C8.00848 10.1284 8.96122 9.30577 9.71351 8.70279Z"
        fill="currentColor"
      />
    </svg>
  );
}
