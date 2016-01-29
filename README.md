# basic-web-components

The Basic Web Components project seeks to provide a comprehensive set of solid,
well-designed web components that implement very common user interface patterns.
Each component can be used as is, or as the foundation for new components.


# Introduction

Design goals for the overall project:

* **Usability excellence.**
  All components are designed, first and foremost, with the end user in mind.
  Each component tries to provide the best implementation possible of a very
  common user interface pattern. Using these in your application should improve
  the overall usability of your application.
* **Work in a wide variety of situations.**
  By their nature, general-purpose components should work predictably and
  reliably in a wide variety of contexts. In that regard, these components are
  measured against [Gold Standard for web
  components](https://github.com/webcomponents/gold-standard/wiki). That
  standard uses the built-in HTML elements as the quality bar to which these
  components aspire.
* **Completeness.**
  In order to meet the above standard of quality, these components try to
  support a complete range of input modalities (touch, mouse, keyboard,
  trackpad, etc.) and responsive output. If the underlying user interface
  pattern has accessibility implications, the component tries to address those
  to the maximum extent possible. Because applications often have specific
  needs, however, the components are also designed to be extensible, as
  addressed by the next point.
* **Provide good building blocks.**
  The project's components are designed to be used as-is, without requiring
  customization or further coding. But since no design can meet every situation,
  you can readily recombine their constituent parts to create solid custom
  components of your own. Composition is generally preferred over class
  inheritance as a means of aggregating behavior; see the
  [basic-component-mixins](packages/basic-component-mixins) package for details.
* **Leverage the browser platform as much as possible.**
  These components are generally written as "close to the metal" as is possible
  while allowing for sharing code across components. These components are not
  built upon a monolithic framework, nor is any shared runtime required to use
  these components. At the same time, by virtue of being web components, these
  user interface elements can interoperate with any front-end framework.
* **Write in plain JavaScript ES6.** An ES5 version of each component is
  provided in its /dist folder, so you can use these in ES5 projects. If you are
  already using ES6, you can use the ES6 source directly.
* **Provide a minimalist appearance.**
  These components are meant to fit unobtrusively into your application, not
  present heavily styled or branded appearances of their own.
* **Work on all mainstream browsers.**
  This includes the latest versions of Apple Safari and Mobile Safari, Google
  Chrome and Chrome for Android, Microsoft Edge and Internet Explorer (version
  11), and Mozilla Firefox.


# Repository organization

All work on Basic Web Components happens in this monorepo, keeping all sources
in a single place. This makes it easy to clone, develop in, and track issues and
pull requests.

The /packages folder contains the components and other cohesive units are
registered with npm as separately installable packages. E.g., the source for the
basic-autosize-textarea component is found in /packages/basic-autosize-textarea.


# Installing components via npm

You can install the specific components you want via npm. To add a component
like basic-autosize-textarea, add a line to the `dependencies` key in your
project's package.json file. Until native Shadow DOM support is available on all
browsers you want to support, you'll want to include the [webcomponents.js
polyfill](https://github.com/webcomponents/webcomponentsjs) as well:

    {
      ...
      "dependencies": {
        "basic-autosize-textarea": "^0.7",
        "webcomponents.js": "^0.7.2"
      },
    }

Then issue an `npm install` as usual.

Once the component's package is installed, you can use the component in HTML and
JavaScript. In HTML, you can load the script defining the component from the
package's /dist folder:

    <html>
    <head>
      <script src="node_modules/webcomponents.js/webcomponents.js"></script>
      <script src="node_modules/basic-autosize-textarea/dist/basic-autosize-textarea.js"></script>
    </head>
    <body>
      <basic-autosize-textarea>Type all you want here!</basic-autosize-textarea>
    </body>
    </html>  

If you're working in ES6, you can load a component with an `import` statement
that references the component's ES6 .js file in the package's /src folder:

    import AutosizeTextarea from 'basic-autosize-textarea/src/basic-autosize-textarea';

For more information on each component's purpose and API, see the component's
README file at the top level of its package folder.

A [sample-component](https://github.com/basic-web-components/sample-component)
project demonstrates the use of npm to depend on a Basic Web Components package.

Early versions of this library were distributed via the Bower package manager,
but those packages were deprecated in the transition to using npm.


# Using this repository to run demos

1. Clone this repository to your local machine.
2. Find the component you are interested in the /packages folder.
3. Open the index.html page for that component to view its demo.


# Project contents

The current release of Basic Web Components includes the following:

## Top-level components

* [basic-autosize-textarea](packages/basic-autosize-textarea).
  A text area that expands to contain its text.
* [basic-carousel](packages/basic-carousel).
  Lets the user navigate laterally through a sequence of child elements.
* [basic-list-box](packages/basic-list-box).
  A single-selection list box that supports selection highlighting (using the
  system highlight color) and keyboard navigation.

## Helper components

These aren't usually instantiated on their own, but are used in conjunction with
other components.

* [basic-arrow-selection](packages/basic-arrow-selection).
  Adds arrow buttons to the side of a carousel.
* [basic-element-base](packages/basic-element-base).
  A simple base class for a component that includes the most common mixins.
* [basic-page-dots](packages/basic-page-dots).
  Adds a row of small dots to the bottom of a carousel.
* [basic-sliding-viewport](packages/basic-sliding-viewport).
  Presents list items in a viewport such that only a single item is visible at a
  time.
* [basic-spread-items](packages/basic-spread-items).
  Spreads out a set of items horizontally so they take equal space.

## Mixins

Mixins are a core part of the Basic Web Components approach to creating
functionally sophisticated components. The [basic-component-mixins](packages/basic-component-mixins)
package includes a variety of mixins you can use in your own components.

## Older components

The earlier 0.6 release of Basic Web Components included more components which
have not yet been rewritten in ES6. These components are still present in this
repository for reference, and it is our intent to upgrade these when we can:

* [basic-button](old/basic-button)
  A button with a simple generic style.
* [basic-calendar-day](old/basic-calendar-day).
  Shows a single day in a calendar.
* [basic-calendar-month-days](old/basic-calendar-month-days).
  Shows a single month's worth of days as a seven-column table. No headings.
* [basic-calendar-month](old/basic-calendar-month).
  Shows a single month from a calendar as a standard seven-column table, taking
  care to reflect a given culture’s preference for the first day of the week.
  Includes headings for month name, year, and days of week.
* [basic-calendar-week](old/basic-calendar-week).
  Shows a single week from a calendar as seven days in a row, taking care to
  reflect a given culture’s preference for the first day of the week.
* [basic-carousel-fit](old/basic-carousel-fit).
  Lets the user navigate through a sequence of child elements, without requiring
  that an explicit height and width be applied to the carousel.
* [basic-culture-selector](old/basic-culture-selector).
  Lets the user select a preferred language/culture from a list of supported
  languages/cultures. Can also be used behind the scenes to load
  language/culture settings.
* [basic-days-of-week](old/basic-days-of-week).
  Shows the names of the seven days of the week using a given culture’s day
  names in short/abbreviated/full format.
* [basic-fade-overflow](old/basic-fade-overflow).
  Fade out content that overflows so the user knows there's more.
* [basic-framed-content](old/basic-framed-content).
  Allows communication outside of a framed page.
* [basic-month-and-year](old/basic-month-and-year).
  Shows the month and year of a given date in a format appropriate for a given
  culture.
* [basic-month-name](old/basic-month-name).
  Shows a given culture’s name for the month of a given date.
* [basic-seamless-iframe](old/basic-seamless-iframe).
  Allows communication with a framed page. Can automatically size to the framed
  content.
* [basic-spread](old/basic-spread).
  Spreads out a set of items horizontally so they take equal space.
* [basic-stack](old/basic-stack).
  Stacks its child elements on top of each other, taking on the maximum height
  and width of the child elements.
* [basic-text-extractor](old/basic-text-extractor).
  Extracts the text of its content elements and exposes this as an attribute
  which can be bound to.


# Contributing

The Basic Web Components project is open source under the MIT license. The
project is led by [Component Kitchen](http://component.kitchen) and sponsored in
part by Google. The Basic Web Components project encourages you to join in and
contribute general-purpose components to this effort! We'd love the help.

* Code should follow the [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
* To the extent possible, components should try to measure up to the [Gold Standard for web components](https://github.com/webcomponents/gold-standard/wiki).


## Desired components

If you're interested in creating a web component that others can use, why not
take a shot at one of the general-purpose components below and help us complete
the collection? If one of these interests you, feel free to run your
plan/idea/questions by project member
[Jan Miksovsky](https://github.com/JanMiksovsky).

* Accordion.
  A list that can have a single item or multiple items expanded to show more
  detail.
* Alphabetic indices.
  Renders the characters in a culture’s alphabet in standard order (e.g., as a
  vertical or horizontal strip). If supplied with a set of strings (or array of
  objects with key pointing to the important data member?), the UI will disable
  those characters which are not found as the initial character of any string.
* Async operation button.
  A button whose caption changes to reflect an operation in progress (e.g.,
  changing from “Sign In” to “Signing In...”) until the operation completes. The
  button is disabled during the operation to avoid confusion and to prevent
  unnecessary extra clicks.
* Auto-complete.
  A text input field that helps the user quickly enter strings from a known
  list. This is similar to a combo box, which is arguably better because it adds
  a button to dropdown and see the list of choices without having to first type.
  That said, nearly all web implementations of auto-complete have no button to
  show the choices.
* Auto-format.
  Applies a collection of heuristics for formatting text: adding smart quotes,
  converts double hyphens to endashes, etc.
* Backdrop.
  Shows a background region of non-interactive elements behind the region’s main
  contents.
* Breadcrumb bar.
  Indicates the user’s position in a navigational hierarchy.
* Calendar month navigator.
  Lets the user select a date, typically in the near future, by navigating
  through calendar months.
* Calendar months.
  Shows multiple months from a calendar.
* Central column.
  A region whose main central column is fixed in width, and horizontally
  centered with respect to the viewport.
* Checked list box.
  A list box showing a check box next to each item; the user can create a
  multiple selection by checking the boxes.
* Close box.
  A platform-sensitive representation of a button that will close the current
  dialog or window.
* Closeable panel.
  Shows information (e.g., a warning, or the result of a completed operation)
  that can be dismissed to remove the panel from the visible page.
* Collapsible panel.
  A region that can be toggled between collapsed and expanded states.
* Color wheel.
  Lets the user select a color in a variety of color spaces.
* Combed text box.
  A text box sporting tick marks or vertical lines to visually indicate how many
  characters should be entered. (Combine with masked input?)
* Content with banner(s).
  Such as toolbar (on top) or status bar (on the bottom).
* Content with sidebar(s) on the left and/or right side.
* Date combo box.
  Lets the user type a date or choose one from a dropdown calendar.
* Date range calendar.
  Lets the user select a date range, typically in the near future.
* Date text box.
  Lets the user type a date in several culture-specific formats.
* Delimited list.
  A list of items interspersed with a decorative element (bullet, vertical bar,
  etc.) for cleaner delineation.
* Device specific.
  Conditionally shows contents based on the type of device being used and/or
  device capabilities.
* Dialog.
  A popup window, typically modal.
* Editable in place.
  An element that supports its own in situ editing.
* Editable text.
  A piece of static text data which can be clicked to produce a text box that
  can then be used to edit the data.
* Expandable summary.
  A block of content with a “More” link at bottom; clicking this reveals the
  remainder of the content.
* File uploader.
  Allows the user to click or drag-and-drop to supply a single file for upload.
* Full screen expandable.
  A region supporting a mode in which the region will expand to fill the entire
  screen.
* Full screen.
  A region which fills the viewport, independent of the size of the page
  content.
* Infinite list.
  A list which asynchronously loads additional contents as the user scrolls.
* Labeled input.
  An HTML input control (generally a check box or radio button) with an
  associated clickable label.
* Link list.
  Uses a platform-sensitive presentation of a set of links (or items that behave
  like links).
* List combo box.
  A combo box which presents its choices as a dropdown list.
* List with detail pane.
  A list box showing a set of items, paired with a means of showing properties
  of the selected item. These properties are either a pane (usually to the
  right) on desktop or tablet devices, or a separate page on mobile devices with
  smaller screens.
* Log.
  Displays a growing text log showing, for example, the output of an ongoing
  process.
* Masked text.
  A text box which only accepts specified input characters.
* Menu bar.
  A row of menus.
* Menu item.
  A command in a menu.
* Menu separator.
  A line separating commands in a menu.
* Menu.
  A popup menu, often in a menu bar.
* Mobile date/time picker.
  Platform-sensitive collection of elements which emulate the platform’s native
  date/time picker.
* Multi list box.
  A list that supports multiple selection, including keyboard navigation.
* Multiple file uploader.
  Allows the user to click or drag-and-drop to supply multiple files for upload.
* Number with units.
  Facilitates entry of a number with units (e.g., “10 in.”, “5 minutes”, “60
  kg”). Accepts an array of allowable units.
* Overlay.
  A transparent or semi-transparent blanket over the entire page which absorbs
  interactions outside a modal element. May be able to use Polymer’s overlay
  component.
* Packed columns.
  Packs its children into a dynamic number of columns of roughly equal height
  (e.g., see the Pinterest home page).
* Page number navigator.
  Indicates the number of pages, e.g. of search results, and also allows
  navigation to a particular page of results.
* Palette window.
  A persistent set of tools adjacent to, or superimposed on, a work surface,
  providing tools for manipulating the information on the surface.
* Panel with overflow.
  A panel fixed in width or height which allows any items which don't fit to
  overflow into a dropdown menu.
* Persistent header.
  A scrolling list in which the header for the group of items currently at the
  top of the visible list remains visible until the user scrolls the next group
  to the top. At this point, the new group header pushes the previous group
  header out of sight.
* Persistent navigation bar.
  When user scrolls page, the navigation bar shrinks to a smaller, but
  persistent size.
* Persistent panel.
  A panel whose contents will bump up against the top or bottom of a scrolling
  parent so as to remain always visible.
* Popout.
  An item that can expand (e.g., on hover) without affecting the visual position
  of surrounding items.
* Popup button.
  A button that produces a popup when clicked.
* Popup source.
  An element which invokes a popup.
* Popup.
  An element which temporarily pops up over other things. Can be modal or
  modeless.
* Process steps.
  Shows a numbered list of steps in a task, disabling steps which are not yet
  available.
* Progress bar.
  Indicates the fraction of an operation which has been completed.
* Progress indicator.
  Platform-sensitive representation of an ongoing operation whose expected
  duration is unknown.
* Pull to refresh.
  A region which the user can pull down to reveal a platform-sensitive “Pull to
  refresh” and “Loading” representation.
* Radio button list.
  A list box showing a radio button next to each item; an alternative way to
  represent selection in a single-selection list.
* Ribbon.
  A space-sensitive presentation of a set of commands.
* Rich text editor.
  Supports the basics: bold, italic, insert link, etc.
* Scroll-up bar.
  Appears only when user scrolls down, then up. See
  http://usabilitypost.com/2014/05/24/the-scroll-up-bar/. Combine with
  persistent navigation bar?
* Search box.
  A text box with standard decorations (magnifying class, customizable “Search”
  hint) to suggest a search field.
* Slider.
  Accepts a discrete number in a constrained range.
* Spin box.
  Accepts a discrete number, potentially in a constrained range.
* Splitter.
  A movable line sitting between two panels which can be dragged to change their
  relative sizes.
* Stacked navigation pages.
  As the user navigates deeper in an app, a small residual portion of the
  previous page remains visible (typically on the left); the user can swipe away
  the top page to navigate back to an earlier point.
* Star rating.
  Lets the user rate something (a restaurant, product, etc.) using the
  conventional star system.
* Tab strip.
  A set of tab buttons, typically used to navigate among tabbed pages presenting
  different content, but which can also be used, for example, to apply one of a
  set of filters to a results list.
* Tab.
  A tabbed page which can be hosted in a set of tabs.
* Tabs.
  A set of pages which can be navigated by a set of tab buttons across the top.
  Uses basic-modes to actually handle determining which child element is shown.
* Tag text box.
  Tokenizes text input into a set of tags, and provides auto-completion against
  a set of existing tags.
* Text box with button.
  A control with a content area (usually some form of text box) and an
  associated button (“Go”, “Submit”, etc.).
* Text condenser.
  Switches to a condensed font when necessary to squeeze in more text.
* Time ago.
  Shows the amount of time elapsed since a given reference date/time using
  culturally-relevant language.
* Time combo box.
  Lets the user type a time or choose one from a dropdown time picker.
* Timeline.
  Positions items on a horizontal time axis.
* Toggle button.
  A button the user can click to toggle its selected state.
* ToolTip.
  A popup that appears when hovering the mouse over another element, providing
  more detail about that element.
* Transient message.
  A message which briefly appears on a page before automatically disappearing.
  Typically used to display feedback after an operation has completed (e.g.,
  “Message sent”) without requiring user acknowledgement.
* Tree view.
  Visually renders a hierarchy of items as a tree whose branches can be expanded
  and collapsed.
* Validating text input.
  Verifies that text input content meets some criteria.
* Vote up/down.
  A pair of buttons to vote something up or down; can reflect the current state
  of the user’s vote.
* Wizard.
  Steps the user through a task through a small set of pages.


## Interoperability

Thanks to use of the web component standards, these web components interoperate
cleanly with other web components. For example, these Basic Web Components may
used in combination with components created by frameworks such as Polymer,
and Polymer features such as a data binding can be used on Basic Web Components.
For a simple example, see
[carousel-with-tabs](https://github.com/basic-web-components/carousel-with-tabs).
