import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface HelloWorldOptions {
  name: string,
  fileExtension: string,
}

export function helloWorld(_options: HelloWorldOptions): Rule {
  // LMA:: Original code
  // return (tree: Tree, _context: SchematicContext) => {
  //   return tree;
  // };

  return (tree: Tree, _context: SchematicContext) => {
    // return tree.create("foo.html", "<h1>Hello World ${_options.name}!</h1>");

    const logger = _context.logger;

    logger.debug("This is a debug message");

    return tree.create(
        `${_options.name}.${_options.fileExtension}`,
        `<p>Hi, ${_options.name}!<p>`
    );
  };
}
