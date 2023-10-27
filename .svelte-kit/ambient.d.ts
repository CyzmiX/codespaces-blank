
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_supabaseUrl: string;
	export const VITE_supabaseKey: string;
	export const GITHUB_TOKEN: string;
	export const DOCKER_BUILDKIT: string;
	export const LESSOPEN: string;
	export const ENABLE_DYNAMIC_INSTALL: string;
	export const GITHUB_CODESPACE_TOKEN: string;
	export const PYTHONIOENCODING: string;
	export const USER: string;
	export const npm_package_dependencies_autoprefixer: string;
	export const npm_config_user_agent: string;
	export const NVS_ROOT: string;
	export const GIT_EDITOR: string;
	export const RVM_PATH: string;
	export const HOSTNAME: string;
	export const PIPX_HOME: string;
	export const CONDA_SCRIPT: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
	export const SHLVL: string;
	export const BROWSER: string;
	export const npm_package_dependencies__supabase_supabase_js: string;
	export const HUGO_ROOT: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ORYX_ENV_TYPE: string;
	export const NVM_BIN: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const NVM_INC: string;
	export const CODESPACES: string;
	export const PIPX_BIN_DIR: string;
	export const DYNAMIC_INSTALL_ROOT_DIR: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const GRADLE_HOME: string;
	export const ORYX_DIR: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const MAVEN_HOME: string;
	export const JUPYTERLAB_PATH: string;
	export const npm_package_scripts_check: string;
	export const GOROOT: string;
	export const NODE_ROOT: string;
	export const npm_package_dependencies_dotenv: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const GITHUB_USER: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const npm_package_devDependencies_typescript: string;
	export const PYTHON_PATH: string;
	export const NVM_DIR: string;
	export const DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
	export const npm_package_scripts_dev: string;
	export const ContainerVersion: string;
	export const GITHUB_API_URL: string;
	export const NVS_HOME: string;
	export const npm_package_type: string;
	export const rvm_bin_path: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const CLOUDENV_ENVIRONMENT_ID: string;
	export const RUBY_VERSION: string;
	export const PROMPT_DIRTRIM: string;
	export const IRBRC: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const DOTNET_ROOT: string;
	export const NVS_DIR: string;
	export const npm_package_dependencies_mongodb: string;
	export const PHP_ROOT: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const JAVA_ROOT: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const npm_package_name: string;
	export const npm_package_dependencies_postcss: string;
	export const NODE: string;
	export const NPM_GLOBAL: string;
	export const HUGO_DIR: string;
	export const SHELL_LOGGED_IN: string;
	export const npm_config_frozen_lockfile: string;
	export const MY_RUBY_HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const SDKMAN_DIR: string;
	export const GITHUB_REPOSITORY: string;
	export const RUBY_ROOT: string;
	export const SDKMAN_PLATFORM: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_dependencies__sveltejs_adapter_vercel: string;
	export const SHELL: string;
	export const GOPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const rvm_prefix: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const GEM_HOME: string;
	export const LESSCLOSE: string;
	export const ORYX_PREFER_USER_INSTALLED_SDKS: string;
	export const ORYX_SDK_STORAGE_BASE_URL: string;
	export const rvm_version: string;
	export const CONDA_DIR: string;
	export const npm_package_dependencies_mongoose: string;
	export const DEBIAN_FLAVOR: string;
	export const JAVA_HOME: string;
	export const NVS_USE_XZ: string;
	export const PWD: string;
	export const INTERNAL_VSCS_TARGET_URL: string;
	export const GEM_PATH: string;
	export const npm_execpath: string;
	export const GITHUB_SERVER_URL: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const CODESPACE_NAME: string;
	export const PYTHON_ROOT: string;
	export const NVS_OS: string;
	export const PHP_PATH: string;
	export const RAILS_DEVELOPMENT_HOSTS: string;
	export const CODESPACE_VSCODE_FOLDER: string;
	export const npm_package_scripts_preview: string;
	export const MAVEN_ROOT: string;
	export const RUBY_HOME: string;
	export const rvm_path: string;
	export const npm_package_dependencies_tailwindcss: string;
	export const NUGET_XMLDOC_MODE: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_supabaseUrl: string;
		VITE_supabaseKey: string;
		GITHUB_TOKEN: string;
		DOCKER_BUILDKIT: string;
		LESSOPEN: string;
		ENABLE_DYNAMIC_INSTALL: string;
		GITHUB_CODESPACE_TOKEN: string;
		PYTHONIOENCODING: string;
		USER: string;
		npm_package_dependencies_autoprefixer: string;
		npm_config_user_agent: string;
		NVS_ROOT: string;
		GIT_EDITOR: string;
		RVM_PATH: string;
		HOSTNAME: string;
		PIPX_HOME: string;
		CONDA_SCRIPT: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
		SHLVL: string;
		BROWSER: string;
		npm_package_dependencies__supabase_supabase_js: string;
		HUGO_ROOT: string;
		HOME: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		ORYX_ENV_TYPE: string;
		NVM_BIN: string;
		VSCODE_IPC_HOOK_CLI: string;
		NVM_INC: string;
		CODESPACES: string;
		PIPX_BIN_DIR: string;
		DYNAMIC_INSTALL_ROOT_DIR: string;
		NVM_SYMLINK_CURRENT: string;
		GRADLE_HOME: string;
		ORYX_DIR: string;
		npm_package_devDependencies_svelte_check: string;
		MAVEN_HOME: string;
		JUPYTERLAB_PATH: string;
		npm_package_scripts_check: string;
		GOROOT: string;
		NODE_ROOT: string;
		npm_package_dependencies_dotenv: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		GITHUB_USER: string;
		GITHUB_GRAPHQL_URL: string;
		npm_package_devDependencies_typescript: string;
		PYTHON_PATH: string;
		NVM_DIR: string;
		DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
		npm_package_scripts_dev: string;
		ContainerVersion: string;
		GITHUB_API_URL: string;
		NVS_HOME: string;
		npm_package_type: string;
		rvm_bin_path: string;
		SDKMAN_CANDIDATES_API: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		CLOUDENV_ENVIRONMENT_ID: string;
		RUBY_VERSION: string;
		PROMPT_DIRTRIM: string;
		IRBRC: string;
		npm_config_registry: string;
		TERM: string;
		DOTNET_ROOT: string;
		NVS_DIR: string;
		npm_package_dependencies_mongodb: string;
		PHP_ROOT: string;
		npm_config_node_gyp: string;
		PATH: string;
		JAVA_ROOT: string;
		SDKMAN_CANDIDATES_DIR: string;
		npm_package_name: string;
		npm_package_dependencies_postcss: string;
		NODE: string;
		NPM_GLOBAL: string;
		HUGO_DIR: string;
		SHELL_LOGGED_IN: string;
		npm_config_frozen_lockfile: string;
		MY_RUBY_HOME: string;
		LANG: string;
		LS_COLORS: string;
		SDKMAN_DIR: string;
		GITHUB_REPOSITORY: string;
		RUBY_ROOT: string;
		SDKMAN_PLATFORM: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_dependencies__sveltejs_adapter_vercel: string;
		SHELL: string;
		GOPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		rvm_prefix: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		GEM_HOME: string;
		LESSCLOSE: string;
		ORYX_PREFER_USER_INSTALLED_SDKS: string;
		ORYX_SDK_STORAGE_BASE_URL: string;
		rvm_version: string;
		CONDA_DIR: string;
		npm_package_dependencies_mongoose: string;
		DEBIAN_FLAVOR: string;
		JAVA_HOME: string;
		NVS_USE_XZ: string;
		PWD: string;
		INTERNAL_VSCS_TARGET_URL: string;
		GEM_PATH: string;
		npm_execpath: string;
		GITHUB_SERVER_URL: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		CODESPACE_NAME: string;
		PYTHON_ROOT: string;
		NVS_OS: string;
		PHP_PATH: string;
		RAILS_DEVELOPMENT_HOSTS: string;
		CODESPACE_VSCODE_FOLDER: string;
		npm_package_scripts_preview: string;
		MAVEN_ROOT: string;
		RUBY_HOME: string;
		rvm_path: string;
		npm_package_dependencies_tailwindcss: string;
		NUGET_XMLDOC_MODE: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
