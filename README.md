# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Using Virtual Environment for Python

- A virtual environment is like a little sandbox where you can set up specific packages and dependencies for a particular project, without messing up other projects or the system-wide Python installation. Here's how to create and use one:

1. Open Terminal or Command Prompt:

2. On Windows, you can use Command Prompt or PowerShell.
On macOS and Linux, the built-in terminal is your friend.
Navigate to Your Project Directory:
Use the cd command to move to the directory where you're setting up your project.

3. Create a Virtual Environment:
Run the following command to create a virtual environment named "venv" (you can name it whatever you like):
```python -m venv venv
```
4. Activate the Virtual Environment:
   ```
source venv/bin/activate
```
When the virtual environment is activated, you'll see its name in your terminal prompt.

6. Install Dependencies
Now, you can use pip to install packages specifically for this project. For example:

```pip install Flask```

6. To Deactivate the Virtual Environment
```deactivate
```
once the virtual environment is deactivated, any packages you install or changes you make won't affect your system-wide Python installation or other projects.

# Database Connection

- Usage of Boto3 to work with AWS services in Python
