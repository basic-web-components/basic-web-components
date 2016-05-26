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

* [basic-animation-stage](packages/basic-animation-stage).
  A panel that shows animated transitions between selection states.
* [basic-autosize-textarea](packages/basic-autosize-textarea).
  A text area that expands to contain its text.
* [basic-carousel](packages/basic-carousel).
  Lets the user navigate laterally through a sequence of child elements.
* [basic-collapsible-panel](packages/basic-collapsible-panel).
  A panel which can be expanded/collapsed with an animated transition.
* [basic-current-anchor](packages/basic-current-anchor).
  An anchor (link) that highlights itself when its destination matches the
  current location.
* [basic-list-box](packages/basic-list-box).
  A single-selection list box that supports selection highlighting (using the
  system highlight color) and keyboard navigation.
* [basic-sliding-carousel](packages/basic-sliding-carousel).
  A simpler version of basic-carousel (above) with lower requirements.
* [basic-slideshow](packages/basic-slideshow).
  Slideshow with animated transitions.
* [basic-tabs](packages/basic-tabs).
  A set of pages with a tab strip governing which page is shown.

## Helper components

These aren't usually instantiated on their own, but are used in conjunction with
other components.

* [basic-arrow-selection](packages/basic-arrow-selection).
  Adds arrow buttons to the side of a carousel.
* [basic-element-base](packages/basic-element-base).
  A simple base class for a component that includes the most common mixins.
* [basic-fade-overflow](old/basic-fade-overflow).
  Fades out content that overflows so the user knows there's more.
* [basic-page-dots](packages/basic-page-dots).
  Adds a row of small dots to the bottom of a carousel.
* [basic-play-controls](packages/basic-play-controls).
  Buttons for navigating a slideshow or other playable sequence.
* [basic-sliding-viewport](packages/basic-sliding-viewport).
  Presents list items in a viewport such that only a single item is visible at a
  time.
* [basic-slideshow-timer](packages/basic-slideshow-timer).
  Advances the selection on a timer.
* [basic-spread-items](packages/basic-spread-items).
  Spreads out a set of items horizontally so they take equal space.
* [basic-tab-strip](packages/basic-tab-strip).
  A strip of tabs for selecting one of the component's children.
* [basic-wrapped-standard-element](packages/basic-wrapped-standard-element).
  Wraps a standard HTML element so that the standard behavior can then be
  extended.

## Mixins

Mixins are a core part of the Basic Web Components approach to creating
functionally sophisticated components. The [basic-component-mixins](packages/basic-component-mixins)
library includes a variety of mixins you can use in your own components.

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
* [basic-stack](old/basic-stack).
  Stacks its child elements on top of each other, taking on the maximum height
  and width of the child elements.
* [basic-text-extractor](old/basic-text-extractor).
  Extracts the text of its content elements and exposes this as an attribute
  which can be bound to.

## Desired components

Our vision is to eventually provide a solid implementation of all common user
interface patterns in web applications. If you're interested in creating a web
component that others can use, why not take a shot at one of the general-purpose
components in our list of [Desired
Components](https://github.com/basic-web-components/basic-web-components/wiki/Desired-Components)
and help us complete the collection?


# Contributing

The Basic Web Components project is open source under the MIT license. The
project is led by [Component Kitchen](http://component.kitchen) and sponsored in
part by Google. The Basic Web Components project encourages you to join in and
contribute general-purpose components to this effort! We'd love the help.

* Code should follow the [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
* To the extent possible, components should try to measure up to the [Gold Standard for web components](https://github.com/webcomponents/gold-standard/wiki).


## Interoperability

Thanks to use of the web component standards, these web components interoperate
cleanly with other web components. For example, these Basic Web Components may
used in combination with components created by frameworks such as Polymer,
and Polymer features such as a data binding can be used on Basic Web Components.
For a simple example, see
[carousel-with-tabs](https://github.com/basic-web-components/carousel-with-tabs).
