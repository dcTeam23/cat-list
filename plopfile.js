module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Digite o nome do componente'    
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/Component.js.hbs',
        },
        {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/stories.js.hbs',
          },
      ],
    });
  };