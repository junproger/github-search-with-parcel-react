// declare module '*.module.css';

declare module '*.module.css' {
  type StylesType = Record<string, string>;
  const styles: StylesType;
  export = styles;
}

// declare module '*.module.scss';

declare module '*.module.scss' {
  type StylesType = Record<string, string>;
  const styles: StylesType;
  export = styles;
}
