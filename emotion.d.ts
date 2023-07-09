import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [key: string]: string;
    };
    size: {
      [key: string]: string;
    };
  }
}
