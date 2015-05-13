This is the consolidated repository holding the source for all components in the Basic Web Components project.

# Repository organization

All the interesting work on Basic Web Components happens in this repository, known as the "consolidated" repository. This contains the source for all the basic- components in a single place, which makes it simple to clone and develop in. The source for each component is in a separate subfolder under the /src folder. E.g., the source for basic-autosize-textarea is found in /src/basic-autosize-textarea.

For registration and deployment via Bower, the individual components are copied into separate repositories. E.g., the source for basic-autosize-textarea will be copied from /src/basic-autosize-textarea in this repo to the individual component repo [basic-autosize-textarea](https://github.com/basic-web-components/basic-autosize-textarea). This is done via a deployment script. From there, the component source is registered with Bower. When someone wants to use basic-autosize-textarea in a project, Bower will pull the files from the individual component repo.

This compromise arrangement greatly simplifies component development (in this consolidated repo here) while still support Bower's need to have components live in their own individual repos.

# Contributing

If you'd like to contribute to Basic Web Components, we'd love the help! As a result of the repository organization described above:

* We'd prefer to have issues filed against this consolidate repository, rather than the individual deployment repositories for individual components.
* Please submit PRs against this repository, not the invididual component repositories. Those individual component repos are for deployment only.
