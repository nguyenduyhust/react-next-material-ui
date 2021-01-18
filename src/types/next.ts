// Add an empty 'export {}' statement to make this file a module
import { Namespace } from 'react-i18next';
export {};

declare module 'next/types' {
  interface InitialProps {
    title: string;
    namespacesRequired: Namespace;
    initialReduxState: string;
  }
}
