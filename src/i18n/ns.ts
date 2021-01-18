export enum NamespaceEnum {
  COMMON = 'common',
  HOME_PAGE = 'homepage',
}
export const ns: string | Array<string> = [NamespaceEnum.COMMON, NamespaceEnum.HOME_PAGE];
export const defaultNS: string = NamespaceEnum.COMMON;
