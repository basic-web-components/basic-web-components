<a name="composeTemplates"></a>
## composeTemplates
Given two templates, this "folds" one inside the other

For now, the folding process just entails putting the first inside the
location of the first <content> node in the second template.

Example: if the first (sub) template is

  <template>
    Hello, <slot></slot>.
  </template>

and the second (base) template is

  <template>
    <b>
      <slot></slot>
    </b>
  </template>

Then the returned folded template is

  <template>
    <b>
      Hello, <slot></slot>.
    </b>
  </template>

**Kind**: global class  
