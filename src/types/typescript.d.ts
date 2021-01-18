type Overwrite<Base1, Base2> = {
  [Key in Exclude<keyof Base1, keyof Base2>]: Base1[Key];
} &
  Base2;

type PickWithType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Condition extends Extract<Base[Key], Condition> ? Key : never;
  }[keyof Base]
>;

type Optional<Base, OptionalKey extends keyof Base> = Pick<Base, Exclude<keyof Base, OptionalKey>> &
  {
    [Key in OptionalKey]?: Base[Key];
  };
