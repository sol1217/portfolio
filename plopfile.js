module.exports = function (plop) {
  plop.setHelper('ifIncludes', (arg1, arg2, options) => {
    return arg1.includes(arg2) ? options.fn(this) : options.inverse(this)
  })

  plop.setHelper('moveFileUpper', (path) => {
    const fullPath = `${path}/..`.split('/')

    return fullPath
      .slice(fullPath.indexOf('src') + 2)
      .join('/')
      .replace(/\w+/g, '..')
  })

  plop.setPrompt('directory', require('inquirer-fuzzy-path'), { rootPath: 'src' })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: 'Search a target directory for your component: ',
        itemType: 'directory',
        rootPath: 'src',
        excludePath: (nodePath) => nodePath.includes('node_modules'),
        excludeFilter: (nodePath) => nodePath.includes('coverage') || nodePath.startsWith('.'),
        transformer: (path) => path.split('/').slice(0, 5).join('/'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
      {
        type: 'confirm',
        name: 'types',
        message: 'Do you want to create .types file?',
      },
      {
        type: 'confirm',
        name: 'constants',
        message: 'Do you want to create .constants file?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/component/Component.types.ts.hbs',
        skipIfExists: true,
        skip: (ctx) => ctx.types || '',
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.constants.ts',
        templateFile: 'plop-templates/component/Component.constants.ts.hbs',
        skipIfExists: true,
        skip: (ctx) => ctx.constants || '',
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.elements.ts',
        templateFile: 'plop-templates/component/Component.elements.ts.hbs',
        skipIfExists: true,
      },
    ],
  })
}
