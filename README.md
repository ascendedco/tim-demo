# Architecture Sample

Template Application to be used with [@ascendedco/schematics](https://www.npmjs.com/package/@ascendedco/schematics) and [@ascendedco/architecture](https://www.npmjs.com/package/@ascendedco/architecture) utility libraries.

## Overview

### Objective

The goal of the Architecture project and its respective libraries, is to provide developers with the basis for a scalable and reliable building experience.

Primarily, by using this repository as a basis for Angular app development, you will reduce your learning curve and increase build quality.

Using the schematics will allow you to generate entire features that are well structured, make use of architecture best practices, and use modern front end techniques like uni-directional data flow (using NgRx).

Use of this project does not restrict developers from going beyond, or changing templates, but allows them to be more creative and balanced in their designs.

### Project Outline

Projects that make use of the Architecture project and its respective libraries, will have a folder structure that looks as follows:

- database (contains database gateway implementations)
- domain (contains network / database gateway abstractions)
- entity (contains entity representations)
- framework (contains platform-specific code)
- network (contains network gateway implementations)
- presentation (contains state / presentation logic, typically using the redux pattern)

## Usage

## CLI Commands

The following table contains the CLI commands that can be used to generate application architecture and user interfaces.

| Description | Command |
|---|---|
| Generate a **feature** (entity, domain, network, presentation) | ng g @ascendedco/schematics:feature |
| Generate a **component** (create, read, update, delete) | ng g @ascendedco/schematics:component |
