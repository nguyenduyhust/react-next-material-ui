// Add an empty 'export {}' statement to make this file a module
export { };

declare module 'next/types' {
  interface InitialProps {
    title: string;
    namespacesRequired: string[];
    initialReduxState: string;
  }
}