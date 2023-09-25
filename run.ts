import { debounce } from 'deno/async/debounce.ts';
import { parse } from 'deno/flags/mod.ts';
import { emptyDirSync } from 'deno/fs/empty_dir.ts';
import { copySync } from 'deno/fs/copy.ts';
import Twig from 'twig';

//#region configuration
const Config = {
    data: './input/data.json',
    twigTemplate: './input/content.twig',
    documentTemplate: './input/document.html',
    tailwindConfig: './input/tailwind.config.js',
    output: './output',
} as const;
//#endregion

//#region top-level logic
const flags = parse(Deno.args, {
    boolean: ['watch'],
    default: { watch: true },
});

run(flags.watch);

function run(watch: boolean): void {
    render();

    if (watch) {
        executeWatch();
    }
}
//#endregion

//#region helper functions
async function executeWatch(): Promise<void> {
    const debouncedRender = debounce(() => {
        render();
    }, 200);

    const watcher = Deno.watchFs([
        Config.data,
        Config.twigTemplate,
        Config.documentTemplate,
        Config.tailwindConfig,
    ]);
    for await (const event of watcher) {
        if (event.kind === 'modify') {
            debouncedRender();
        }
    }
}

function render(): void {
    if (Config.output.includes('..')) {
        console.error(
            `Rendering failed, as writing to a parent directory is not allowed. Attempted to write to: ${Config.output}`,
        );
        return;
    }

    const data = getData();
    const documentTemplate = readTextFile(Config.documentTemplate);
    const twigTemplate = readTextFile(Config.twigTemplate);
    const tailwindConfig = readTextFile(Config.tailwindConfig);

    const renderedTemplate = renderTemplate(twigTemplate, data);

    const output = documentTemplate
        .replace('{{ tailwindConfig }}', tailwindConfig)
        .replace('{{ content }}', renderedTemplate);

    emptyDirSync(Config.output);
    Deno.writeTextFile(Config.output + '/index.html', output);

    console.log(`updated at ${new Date().toLocaleTimeString()}`);
}

// deno-lint-ignore no-explicit-any
function renderTemplate(template: string, data: any): string {
    const twigConfig = {
        data: template,
        namespaces: {
            macros: './input/macros',
            globalPartials: './input/partials/global',
            localPartials: './input/partials/local',
        },
    };

    const templateObject = Twig.twig(twigConfig);
    return templateObject.render(data);
}

// deno-lint-ignore no-explicit-any
function getData(): any {
    try {
        const fileText = Deno.readTextFileSync(Config.data);
        return JSON.parse(fileText);
    } catch (error) {
        printErrorMessage(`failed to parse ${Config.data}:`, error);
        return {};
    }
}

function readTextFile(filepath: string): string {
    try {
        return Deno.readTextFileSync(filepath);
    } catch (error) {
        printErrorMessage('failed to read ${filepath}:', error);
        return '';
    }
}

// deno-lint-ignore no-explicit-any
function printErrorMessage(message: string, error: any): void {
    console.log(`\nError: ${message}\n\n${error}`);
}
//#endregion
