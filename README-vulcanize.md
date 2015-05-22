# Building the vulcanized basic-web-components.html file

The Basic Web Components project can be vulcanized into a single import file, basic-web-components.html. This is
useful for situations where a page author does not want to use Bower to install individual components, but to have
access to all Basic Web Components with a single import.

To build basic-web-components.html, run the default grunt task:

````grunt````

or specifically,

````grunt build:release````

You can find the resulting basic-web-components.html file under the "dist" folder.