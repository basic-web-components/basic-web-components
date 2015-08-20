This is the consolidated repository holding the source for all components in the Basic Web Components project. This repo is intended for component development, and for running component demos locally.

# Introduction

The Basic Web Components project seeks to provide a comprehensive set of solid, well-designed web components that implement very common user interface patterns. Each component can be used as is, or as the foundation for new components.

These components are not intended to be flashy or exciting. They are meant to serve as solid building blocks for your applications and user experiences. Careful factoring of user interface concerns attempts to give you components, helpers, base classes, mixins, etc., that you can readily combine (or recombine) to create solid custom components to meet your own needs.

These components try to measure up to the [Gold Standard for web components](https://github.com/webcomponents/gold-standard/wiki). That standard sets a very high bar for component quality, attempting to make web components as flexible and reliable as the standard build-in HTML elements.

# Repository organization

All the interesting work on Basic Web Components happens in this repository, known as the "consolidated" repository. This contains the source for all the basic- components in a single place, which makes it simple to clone and develop in. The source for each component is in a separate subfolder under the /src folder. E.g., the source for basic-autosize-textarea is found in /src/basic-autosize-textarea.

For registration and deployment via Bower, the individual components are copied into separate repositories. E.g., the source for basic-autosize-textarea will be copied from /src/basic-autosize-textarea in this repo to the individual component repo [basic-autosize-textarea](https://github.com/basic-web-components/basic-autosize-textarea). This is done via a deployment script. From there, the component source is registered with Bower. When someone wants to use basic-autosize-textarea in a project, Bower will pull the files from the individual component repo.

This compromise arrangement greatly simplifies component development (in this consolidated repo here) while still support Bower's need to have components live in their own individual repos.

# Using this repository to run demos

1. Clone this repository to your local machine.
2. Find the component you are interested in the /src folder.
3. Open the index.html page for that component to view its demo.

# Localization with Globalize.js

The culture-dependent components (e.g., basic-calendar-month) use [Globalize.js]
(https://github.com/jquery/globalize) for localization. For testing and
demonstration purposes, this repository currently pulls in a *huge* set of
culture data files under bower_components/cldr-data. This is obviously not
ideal — we hope to find a better way to organize things in the future.

# Installing these components via Bower

Each of these components is separately installable via [Bower](https://bower.io), so you can use just the components you want in your project. To install a component (e.g., basic-autosize-textarea) in your project, add a line to the `dependencies` key in your project's bower.json file:

```
{
  ...
  "dependencies": {
    "basic-autosize-textarea": "basic-web-components/basic-autosize-textarea#master"
  },
}
```

For more information on each component's purpose and API, see the formatted [documentation](http://basic-web-components.github.io/basic-web-components/docs).


# Components

The current version of Basic Web Components is designed for use with the latest
release of [Polymer](https://www.polymer-project.org), and includes the
following web components:

* [basic-autosize-textarea](http://component.kitchen/components/basic-web-components/basic-autosize-textarea). A text area that expands to contain its text.
* [basic-button](http://component.kitchen/components/basic-web-components/basic-button) A button with a simple generic style.
* [basic-calendar-day](http://component.kitchen/components/basic-web-components/basic-calendar-day). Shows a single day in a calendar.
* [basic-calendar-month-days](http://component.kitchen/components/basic-web-components/basic-calendar-month-days). Shows a single month's worth of days as a seven-column table. No headings.
* [basic-calendar-month](http://component.kitchen/components/basic-web-components/basic-calendar-month). Shows a single month from a calendar as a standard seven-column table, taking care to reflect a given culture’s preference for the first day of the week. Includes headings for month name, year, and days of week.
* [basic-calendar-week](http://component.kitchen/components/basic-web-components/basic-calendar-week). Shows a single week from a calendar as seven days in a row, taking care to reflect a given culture’s preference for the first day of the week.
* [basic-carousel](http://component.kitchen/components/basic-web-components/basic-carousel). Lets the user navigate laterally through a sequence of child elements.
* [basic-carousel-fit](http://component.kitchen/components/basic-web-components/basic-carousel-fit). Lets the user navigate through a sequence of child elements, without requiring that an explicit height and width be applied to the carousel.
* [basic-culture-selector](http://component.kitchen/components/basic-web-components/basic-culture-selector). Lets the user select a preferred language/culture from a list of supported languages/cultures. Can also be used behind the scenes to load language/culture settings.
* [basic-days-of-week](http://component.kitchen/components/basic-web-components/basic-days-of-week). Shows the names of the seven days of the week using a given culture’s day names in short/abbreviated/full format.
* [basic-fade-overflow](http://component.kitchen/components/basic-web-components/basic-fade-overflow). Fade out content that overflows so the user knows there's more.
* [basic-framed-content](http://component.kitchen/components/basic-web-components/basic-framed-content). Allows communication outside of a framed page.
* [basic-list-box](http://component.kitchen/components/basic-web-components/basic-list-box). A single-selection list box that supports selection highlighting (using the system highlight color) and keyboard navigation.
* [basic-month-and-year](http://component.kitchen/components/basic-web-components/basic-month-and-year). Shows the month and year of a given date in a format appropriate for a given culture.
* [basic-month-name](http://component.kitchen/components/basic-web-components/basic-month-name). Shows a given culture’s name for the month of a given date.
* [basic-seamless-iframe](http://component.kitchen/components/basic-web-components/basic-seamless-iframe). Allows communication with a framed page. Can automatically size to the framed content.
* [basic-text-extractor](https://github.com/basic-web-components/basic-text-extractor). Extracts the text of its content elements and exposes this as an attribute which can be bound to.

# Contributing

The Basic Web Components project is open source under the MIT license. The project is led by [Component Kitchen](http://component.kitchen) and sponsored by Google. The Basic Web Components project encourages you to join in and contribute general-purpose components to this effort! We'd love the help.

* We'd prefer to have issues filed against this consolidate repository, rather than the individual deployment repositories for individual components.
* Please submit PRs against this repository, not the invididual component repositories. Those individual component repos are for deployment only.
* Code should follow the [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
* To the extent possible, components should try to measure up to the [Gold Standard for web components](https://github.com/webcomponents/gold-standard/wiki).

# Desired components

If you're interested in creating a web component that others can use, why not take a shot at one of the general-purpose components below and help us complete the collection? If one of these interests you, feel free to run your plan/idea/questions by project member [Jan Miksovsky](https://github.com/JanMiksovsky).

* Accordion. A list that can have a single item or multiple items expanded to show more detail. Should be built upon polymer-selector.
* Alphabetic indices. Renders the characters in a culture’s alphabet in standard order (e.g., as a vertical or horizontal strip). If supplied with a set of strings (or array of objects with key pointing to the important data member?), the UI will disable those characters which are not found as the initial character of any string.
* Async operation button. A button whose caption changes to reflect an operation in progress (e.g., changing from “Sign In” to “Signing In...”) until the operation completes. The button is disabled during the operation to avoid confusion and to prevent unnecessary extra clicks.
* Auto-complete. A text input field that helps the user quickly enter strings from a known list. This is similar to a combo box, which is arguably better because it adds a button to dropdown and see the list of choices without having to first type. That said, nearly all web implementations of auto-complete have no button to show the choices.
* Auto-format. Applies a collection of heuristics for formatting text: adding smart quotes, converts double hyphens to endashes, etc.
* Backdrop. Shows a background region of non-interactive elements behind the region’s main contents.
* Breadcrumb bar. Indicates the user’s position in a navigational hierarchy.
* Browser-specific. Conditionally shows contents based on the browser being used and/or whether the current browser supports a given feature.
* Calendar month navigator. Lets the user select a date, typically in the near future, by navigating through calendar months.
* Calendar months. Shows multiple months from a calendar.
* Central column. A region whose main central column is fixed in width, and horizontally centered with respect to the viewport.
* Checked list box. A list box showing a check box next to each item; the user can create a multiple selection by checking the boxes.
* Close box. A platform-sensitive representation of a button that will close the current dialog or window.
* Closeable panel. Shows information (e.g., a warning, or the result of a completed operation) that can be dismissed to remove the panel from the visible page.
* Collapsible panel. A region that can be toggled between collapsed and expanded states.
* Color wheel. Lets the user select a color in a variety of color spaces.
* Combed text box. A text box sporting tick marks or vertical lines to visually indicate how many characters should be entered. (Combine with masked input?)
* Content with banner(s), such as toolbar (on top) or status bar (on the bottom).
* Content with sidebar(s) on the left and/or right side.
* Date combo box. Lets the user type a date or choose one from a dropdown calendar.
* Date range calendar. Lets the user select a date range, typically in the near future.
* Date text box. Lets the user type a date in several culture-specific formats.
* Delimited list. A list of items interspersed with a decorative element (bullet, vertical bar, etc.) for cleaner delineation.
* Device specific. Conditionally shows contents based on the type of device being used and/or device capabilities.
* Dialog. A popup window, typically modal.
* Editable in place. An element that supports its own in situ editing.
* Editable text. A piece of static text data which can be clicked to produce a text box that can then be used to edit the data.
* Expandable summary. A block of content with a “More” link at bottom; clicking this reveals the remainder of the content.
* File uploader. Allows the user to click or drag-and-drop to supply a single file for upload.
* Full screen expandable. A region supporting a mode in which the region will expand to fill the entire screen.
* Full screen. A region which fills the viewport, independent of the size of the page content.
* Infinite list. A list which asynchronously loads additional contents as the user scrolls.
* Labeled input. An HTML input control (generally a check box or radio button) with an associated clickable label.
* Link list. Uses a platform-sensitive presentation of a set of links (or items that behave like links).
* List box. A list that supports single selection, including keyboard navigation.
* List combo box. A combo box which presents its choices as a dropdown list.
* List with detail pane. A list box showing a set of items, paired with a means of showing properties of the selected item. These properties are either a pane (usually to the right) on desktop or tablet devices, or a separate page on mobile devices with smaller screens.
* Log. Displays a growing text log showing, for example, the output of an ongoing process.
* Masked text. A text box which only accepts specified input characters.
* Menu bar. A row of menus.
* Menu item. A command in a menu.
* Menu separator. A line separating commands in a menu.
* Menu. A popup menu, often in a menu bar.
* Mobile date/time picker. Platform-sensitive collection of elements which emulate the platform’s native date/time picker.
* Multi list box. A list that supports multiple selection, including keyboard navigation.
* Multiple file uploader. Allows the user to click or drag-and-drop to supply multiple files for upload.
* Number with units. Facilitates entry of a number with units (e.g., “10 in.”, “5 minutes”, “60 kg”). Accepts an array of allowable units.
* Overlay. A transparent or semi-transparent blanket over the entire page which absorbs interactions outside a modal element. May be able to use Polymer’s overlay component.
* Packed columns. Packs its children into a dynamic number of columns of roughly equal height (e.g., see the Pinterest home page).
* Page number navigator. Indicates the number of pages, e.g. of search results, and also allows navigation to a particular page of results.
* Palette window. A persistent set of tools adjacent to, or superimposed on, a work surface, providing tools for manipulating the information on the surface.
* Panel with overflow. A panel fixed in width or height which allows any items which don't fit to overflow into a dropdown menu.
* Persistent header. A scrolling list in which the header for the group of items currently at the top of the visible list remains visible until the user scrolls the next group to the top. At this point, the new group header pushes the previous group header out of sight.
* Persistent navigation bar. When user scrolls page, the navigation bar shrinks to a smaller, but persistent size
* Persistent panel. A panel whose contents will bump up against the top or bottom of a scrolling parent so as to remain always visible.
* Popout. An item that can expand (e.g., on hover) without affecting the visual position of surrounding items.
* Popup button. A button that produces a popup when clicked.
* Popup source. An element which invokes a popup.
* Popup. An element which temporarily pops up over other things. Can be modal or modeless.
* Process steps. Shows a numbered list of steps in a task, disabling steps which are not yet available.
* Progress bar. Indicates the fraction of an operation which has been completed.
* Progress indicator. Platform-sensitive representation of an ongoing operation whose expected duration is unknown.
* Pull to refresh. A region which the user can pull down to reveal a platform-sensitive “Pull to refresh” and “Loading” representation.
* Radio button list. A list box showing a radio button next to each item; an alternative way to represent selection in a single-selection list.
* Ribbon. A space-sensitive presentation of a set of commands.
* Rich text editor. Supports the basics: bold, italic, insert link, etc.
* Scroll-up bar. Appears only when user scrolls down, then up. See http://usabilitypost.com/2014/05/24/the-scroll-up-bar/. Combine with persistent navigation bar?
* Search box. A text box with standard decorations (magnifying class, customizable “Search” hint) to suggest a search field.
* Slider. Accepts a discrete number in a constrained range.
* Spin box. Accepts a discrete number, potentially in a constrained range.
* Splitter. A movable line sitting between two panels which can be dragged to change their relative sizes. (Will Polymer upgrade core-splitter to an iron- element?)
* Sprite. Shows a single image at a time from a strip or grid of images.
* Stacked navigation pages. As the user navigates deeper in an app, a small residual portion of the previous page remains visible (typically on the left); the user can swipe away the top page to navigate back to an earlier point.
* Star rating. Lets the user rate something (a restaurant, product, etc.) using the conventional star system. An attribute allows the glyph
* Tab strip. A set of tab buttons, typically used to navigate among tabbed pages presenting different content, but which can also be used, for example, to apply one of a set of filters to a results list.
* Tab. A tabbed page which can be hosted in a set of tabs.
* Tabs. A set of pages which can be navigated by a set of tab buttons across the top. Uses basic-modes to actually handle determining which child element is shown.
* Tag text box. Tokenizes text input into a set of tags, and provides auto-completion against a set of existing tags.
* Text box with button. A control with a content area (usually some form of text box) and an associated button (“Go”, “Submit”, etc.).
* Text condenser. Switches to a condensed font when necessary to squeeze in more text.
* Time ago. Shows the amount of time elapsed since a given reference date/time using culturally-relevant language.
* Time combo box. Lets the user type a time or choose one from a dropdown time picker.
* Timeline. Positions items on a horizontal time axis.
* Toggle button. A button the user can click to toggle its selected state.
* ToolTip. A popup that appears when hovering the mouse over another element, providing more detail about that element.
* Transient message. A message which briefly appears on a page before automatically disappearing. Typically used to display feedback after an operation has completed (e.g., “Message sent”) without requiring user acknowledgement.
* Tree view. Visually renders a hierarchy of items as a tree whose branches can be expanded and collapsed.
* Validating text input. Verifies that text input content meets some criteria.
* Vote up/down. A pair of buttons to vote something up or down; can reflect the current state of the user’s vote.
* Wizard. Steps the user through a task through a small set of pages.
