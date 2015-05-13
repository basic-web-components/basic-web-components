This is the consolidated repository holding the source for all components in the Basic Web Components project. This repo is intended for component development, and for running component demos locally.

# Repository organization

All the interesting work on Basic Web Components happens in this repository, known as the "consolidated" repository. This contains the source for all the basic- components in a single place, which makes it simple to clone and develop in. The source for each component is in a separate subfolder under the /src folder. E.g., the source for basic-autosize-textarea is found in /src/basic-autosize-textarea.

For registration and deployment via Bower, the individual components are copied into separate repositories. E.g., the source for basic-autosize-textarea will be copied from /src/basic-autosize-textarea in this repo to the individual component repo [basic-autosize-textarea](https://github.com/basic-web-components/basic-autosize-textarea). This is done via a deployment script. From there, the component source is registered with Bower. When someone wants to use basic-autosize-textarea in a project, Bower will pull the files from the individual component repo.

This compromise arrangement greatly simplifies component development (in this consolidated repo here) while still support Bower's need to have components live in their own individual repos.

# Using this repository to run demos

1. Clone this repository to your local machine.
2. Find the component you are interested in the /src folder.
3. Open the index.html page for that component to view its demo.

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

# Contributing

The Basic Web Components project is open source under the MIT license. The project is led by [Component Kitchen](http://component.kitchen) and sponsored by Google. The Basic Web Components project encourages you to join in and contribute general-purpose components to this effort! We'd love the help.

* We'd prefer to have issues filed against this consolidate repository, rather than the individual deployment repositories for individual components.
* Please submit PRs against this repository, not the invididual component repositories. Those individual component repos are for deployment only.
* Code should follow the [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
* To the extent possible, components should try to measure up to the [Gold Standard for web components](https://github.com/webcomponents/gold-standard/wiki). This sets a very high bar for component quality, attempting to make web components as flexible and reliable as the standard build-in HTML elements.
