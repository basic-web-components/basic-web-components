This folder is meant for developer use to preview the appearance of
documentation for the components in this project. For now, the general strategy
for documenting Basic Web Components is to rely on the automatically-generated
component detail pages shown on [Component Kitchen](http://component.kitchen).
Those component pages are automatically updated whenever changes are pushed to
the individual repos for the various components.

If you'd like to preview the appearance of the documentation, however, you can
use the index.html in this folder. You'll need to do a separate `bower install`
in this folder to pick up the required core-doc-viewer component used to
render the documentation. That core-doc-viewer has been superseded by a
component called iron-doc-viewer. However, at the moment (7 May 2015),
iron-doc-viewer doesn't accommodate some of the jsDoc comments used in the
source files for Basic Web Components. So, for now, this folder relies on the
older core-doc-viewer component.
