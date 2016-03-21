# API Documentation
<a name="composeTemplates"></a>
## composeTemplates(baseTemplate, subTemplate)
Given two templates, this "folds" one inside the other. This is
is useful for defining a component that wants to fill in slots in the
template of its base class.

For now, the folding process just entails putting the first inside the
location of the first <slot> node in the second template.

Example: if the first (base) template is

    <template>
      <b>
        <slot></slot>
      </b>
    </template>

and the second (subclass) template is

    <template>
      Hello, <slot></slot>.
    </template>

Then the result of calling `composeTemplates(first, second)` is

    <template>
      <b>
        Hello, <slot></slot>.
      </b>
    </template>

Note that this function is not a mixin, but a helper for creating web
components.

  **Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| baseTemplate | <code>HTMLTemplate</code> &#124; <code>string</code> | The base class template. |
| subTemplate | <code>HTMLTemplate</code> &#124; <code>string</code> | The subclass template. |

