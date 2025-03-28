# (ARCHIVED React Guidebook)

This repository contains resources and tools for mentors covering Code The Dream's React Curriculum.

- Teaching notes for each of the lessons
- Consolidated list of references pertinent to the materials
- Example todo list app
- Mentor sandbox
- Rubrics for weekly code submissions
- Mentor feedback and suggestions for curriculum

## Onboarding

Check out our onboarding resources for new mentors on the [Getting Started](https://github.com/Code-the-Dream-School/node-express-guidebook/wiki/Getting-Started) page! 

## Details of contents

### Teaching notes

The teaching notes, consolidated in the `teaching_notes` directory, provide a handy template for conducting the weekly lessons. Each document is broken down into an overview, a sample mentor session, and common issues experienced by learners for that week's materials.

The teaching notes are identical across all branches. This is so that you are guaranteed to have identical teaching notes regardless of which branch you are on. This directory is version-controlled from [react-guidebook_teaching_notes](https://github.com/Code-the-Dream-School/react-guidebook_teaching_notes) repo. PRs for teaching materials can be opened here or on that repo. When accepted, a curriculum maintainer will sync the teaching_notes in this repo with the version-controlled teaching notes.

### Consolidated list of references pertinent to the materials

This is located in the [references markdown document](./references.md) at the base of the directory. Feel free to add to the list through a PR to `main`.

### Example todo list app

There is an example todo list app built using the course's materials found in the `example_app` directory. Each lesson has a corresponding branch which contains a code-complete example of what the students will be submitting for that lesson.

Note that dependencies are slowly added as lessons progress. Make sure that you run `Yarn` to update your local dependencies when moving between branches or when the app does not work. Do not open any PRs on `package.json` or `yarn.lock` files changes.

### Mentor sandbox

For the mentor's convenience, we have included a fresh install of Create-React-App (using yarn) inside of the `sandbox` directory. To use, navigate a terminal into that directory and use the `yarn` command to install all dependencies.

### Rubrics for weekly code submission

The `rubrics` directory, contains a consolidated list of rubrics for each of the week's code submissions. These are intended to be a guide to assist reviewers so they know the key items to focus on while performing code reviews. Please know that there will be variances between the example app's code and the student submissions. Some discretion is left to the student for function/variable naming, whether to use `<React.fragment>` vs `<>`, and some minor stylistic/semantic choices.

In addition to the details highlighted in the rubrics, pay attention to:

1. Does the code work as intended?
2. Do they have the correct files, by name, in the correct directories? (this excepts some minor styling choices before lesson 3.1, which covers CSS)
3. Their JavaScript and JSX is cleanly formatted and consistent. CTD does not have a style guide at this time.
4. Variable/function names, when they differ from the lesson materials, are short and descriptive of their use. Variable and callback names should not vary widely when passed down through props.
5. Excessive personal comments are removed.

### Mentor feedback and suggestions for curriculum

CTD staff welcome and encourage feedback on our materials through a variety of channels.

- For errors/improvement to this material, please submit a PR and include details as appropriate.
  - for teaching notes or rubrics, make the PR against `main`
  - for the example app, make the PR against the appropriate lesson
- For errors/improvement related student instruction, open an issue on the curriculum repo. We have included a "Curriculum Issues" and "Functional Issues" issue ticket template.
- Issues can also be brought to the attention of the cohort leader on [Slack](https://codethedream.slack.com/team/U03KDBGK5M5) or [email](mailto:cockatoo@codethedream.org).
