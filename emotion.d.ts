import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string;
      white: string;
      gray: string;
    };
  }
}
