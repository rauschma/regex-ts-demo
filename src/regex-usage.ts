import { partial, regex } from 'regex';

regex('m')`
  # Only the inner regex is case insensitive (flag i)
  # Also, the outer regex's flag m is not applied to it
  ${/^a.b$/i}
  |
  # Strings are contextually escaped and repeated as complete units
  ^ ${'a.b'}+ $
  |
  # This string is contextually sandboxed but not escaped
  ${partial('^ a.b $')}
`;

regex.bind(RegExp)`abc`;

regex`abc`;