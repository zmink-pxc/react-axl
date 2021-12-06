# React Axioline

Component library to render axio bus components

(x)H indicates the axioline housing type.

## Adding a new component

To add/create a new component, start by using bit add command.  First, provide it the path to the new source file, then give it an appropriate id, following the same structure as the existing components.  This generally consists of the IO type, the io direction, and a lower/snake case version of the component name

```bash
bit add src/components/Modules/Digital/Combo/AxlDI83DO832H/AxlDI83DO832H.jsx --id digital/combo/axl-di83-do83-2h
```

tag it when it is ready to be utilized

```bash
bit tag digital/combo/axl-di83-do83-2h
```

then export it to bit using the export command.  This will make the component available on npm and the bit npm registry.  Exporting is required for full integration into the build system

```bash
bit export zmink.axioline digital/combo/axl-di83-do83-2h
```


## Viewing/Testing

Storybook has been integrated for viewing, documenting and testing components.  When developing 
a new component, it must be built and tagged using bit before it can be used.  This has to do with requirements of bit.dev.

To start interacting with the component library locally, run 

```bash
npm run storybook
```