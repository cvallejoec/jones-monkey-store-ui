import Link from 'next/link';

import { parseContent } from '~/utils';

export default function ALink({
  children,
  className,
  content,
  style,
  ...props
}) {
  const preventDefault = (e) => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? (
    <Link {...props} href={props.href} legacyBehavior>
      <a
        className={className}
        style={style}
        onClick={preventDefault}
        dangerouslySetInnerHTML={parseContent(content)}
        {...props}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link {...props} href={props.href} legacyBehavior>
      <a
        className={className}
        style={style}
        onClick={preventDefault}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
