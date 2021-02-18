export enum NamespaceEnum {
  COMMON = 'common',
  HOME_PAGE = 'homepage',
  AUTH_PAGE = 'auth-page',
}
export const ns: string | Array<string> = [
  NamespaceEnum.COMMON,
  NamespaceEnum.HOME_PAGE,
  NamespaceEnum.AUTH_PAGE,
];
export const defaultNS: string = NamespaceEnum.COMMON;
