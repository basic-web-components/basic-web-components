# API Documentation
<a name="KeyboardPrefixSelection"></a>
## KeyboardPrefixSelection
Mixin that handles list box-style prefix typing, in which the user can type
a string to select the first item that begins with that string.

Example: suppose a component using this mixin has the following items:

    <sample-list-component>
      <div>Apple</div>
      <div>Apricot</div>
      <div>Banana</div>
      <div>Blackberry</div>
      <div>Blueberry</div>
      <div>Cantaloupe</div>
      <div>Cherry</div>
      <div>Lemon</div>
      <div>Lime</div>
    </sample-list-component>

If this component receives the focus, and the user presses the "b" or "B"
key, the "Banana" item will be selected, because it's the first item that
matches the prefix "b". (Matching is case-insensitive.) If the user now
presses the "l" or "L" key quickly, the prefix to match becomes "bl", so
"Blackberry" will be selected.

The prefix typing feature has a one second timeout — the prefix to match
will be reset after a second has passed since the user last typed a key.
If, in the above example, the user waits a second between typing "b" and
"l", the prefix will become "l", so "Lemon" would be selected.

This mixin expects the component to invoke a `keydown` method when a key is
pressed. You can use the [Keyboard](Keyboard.md) mixin for that purpose, or
wire up your own keyboard handling and call `keydown` yourself.

This mixin also expects the component to provide an `items` property. The
`textContent` of those items will be used for purposes of prefix matching.

  **Kind**: global class
<a name="KeyboardPrefixSelection+selectItemWithTextPrefix"></a>
### keyboardPrefixSelection.selectItemWithTextPrefix(prefix)
Select the first item whose text content begins with the given prefix.

  **Kind**: instance method of <code>[KeyboardPrefixSelection](#KeyboardPrefixSelection)</code>

| Param | Description |
| --- | --- |
| prefix | [String] The prefix string to search for |

