# API Documentation
<a name="module_symbols"></a>

## symbols
A collection of Symbol objects for standard component properties and methods.

These Symbol objects are used to allow mixins and a component to internally
communicate, without exposing these properties and methods in the component's
public API.

To use these Symbol objects in your own component, include this module and
then create a property or method whose key is the desired Symbol.

    import 'SingleSelectionMixin' from 'basic-component-mixins/src/SingleSelectionMixin';
    import 'symbols' from 'basic-component-mixins/src/symbols';

    class MyElement extends SingleSelectionMixin(HTMLElement) {
      [symbols.itemSelected](item, selected) {
        // This will be invoked whenever an item is selected/deselected.
      }
    }


* [symbols](#module_symbols)
    * [~defaults](#module_symbols..defaults) : <code>object</code>
    * [~goDown()](#module_symbols..goDown)
    * [~goEnd()](#module_symbols..goEnd)
    * [~goLeft()](#module_symbols..goLeft)
    * [~goRight()](#module_symbols..goRight)
    * [~goStart()](#module_symbols..goStart)
    * [~goUp()](#module_symbols..goUp)
    * [~itemAdded(item)](#module_symbols..itemAdded)
    * [~itemSelected(item, selected)](#module_symbols..itemSelected)
    * [~keydown(event)](#module_symbols..keydown)

<a name="module_symbols..defaults"></a>

### symbols~defaults : <code>object</code>
Symbol for the `defaults` property.

This property can be used to set or override defaults that will be applied
to a new component instance. When implementing this property, take care to
first acquire any defaults defined by the superclass. The standard idiom is
as follows:

    get [symbols.defaults]() {
      const defaults = super[symbols.defaults] || {};
      // Set or override default values here
      defaults.customProperty = false;
      return defaults;
    }

  **Kind**: inner property of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goDown"></a>

### symbols~goDown()
Symbol for the `goDown` method.

This method is invoked when the user wants to go/navigate down.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goEnd"></a>

### symbols~goEnd()
Symbol for the `goEnd` method.

This method is invoked when the user wants to go/navigate to the end (e.g.,
of a list).

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goLeft"></a>

### symbols~goLeft()
Symbol for the `goLeft` method.

This method is invoked when the user wants to go/navigate left.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goRight"></a>

### symbols~goRight()
Symbol for the `goRight` method.

This method is invoked when the user wants to go/navigate right.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goStart"></a>

### symbols~goStart()
Symbol for the `goStart` method.

This method is invoked when the user wants to go/navigate to the start
(e.g., of a list).

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..goUp"></a>

### symbols~goUp()
Symbol for the `goUp` method.

This method is invoked when the user wants to go/navigate up.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>
<a name="module_symbols..itemAdded"></a>

### symbols~itemAdded(item)
Symbol for the `itemAdded` method.

This method is invoked when a new item is added to a list.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |

<a name="module_symbols..itemSelected"></a>

### symbols~itemSelected(item, selected)
Symbol for the `itemSelected` method.

This method is invoked when an item becomes selected or deselected.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>

| Param | Type | Description |
| --- | --- | --- |
| item | <code>HTMLElement</code> | the item being selected/deselected |
| selected | <code>boolean</code> | true if the item is selected, false if not |

<a name="module_symbols..keydown"></a>

### symbols~keydown(event)
Symbol for the `keydown` method.

This method is invoked when an element receives a `keydown` event.

  **Kind**: inner method of <code>[symbols](#module_symbols)</code>

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | the event being processed |

