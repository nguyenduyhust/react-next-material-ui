export enum NamespaceEnum {
  COMMON = 'common',
  HOME_PAGE = 'homepage',
  SIGN_IN = 'sign-in',
}
export const ns: string | Array<string> = [
  NamespaceEnum.COMMON,
  NamespaceEnum.HOME_PAGE,
  NamespaceEnum.SIGN_IN,
];
export const defaultNS: string = NamespaceEnum.COMMON;
