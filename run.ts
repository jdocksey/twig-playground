import { debounce } from 'https://deno.land/std@0.177.0/async/debounce.ts';
import { emptyDirSync } from 'https://deno.land/std@0.129.0/fs/empty_dir.ts';
import { parse } from 'https://deno.land/std@0.177.0/flags/mod.ts';
import { copySync } from 'https://deno.land/std@0.129.0/fs/copy.ts';
import Twig from 'https://esm.sh/twig@1.16.0';

//#region configuration
const Config = {
    data: './input/data.json',
    twigTemplate: './input/template.twig',
    documentTemplate: './input/document-template.html',
    tailwindConfig: './input/tailwind.config.js',
    output: 'output',
} as const;
//#endregion

//#region top-level logic
const flags = parse(Deno.args, {
    boolean: ['watch'],
    default: { watch: true }
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
    const data = getData();
    const documentTemplate = readTextFile(Config.documentTemplate);
    const twigTemplate = readTextFile(Config.twigTemplate);
    const tailwindConfig = readTextFile(Config.tailwindConfig);

    const renderedTemplate = renderTemplate(twigTemplate, data);

    const output = documentTemplate
        .replace('{{ tailwindConfig }}', tailwindConfig)
        .replace('{{ contents }}', renderedTemplate);

    emptyDirSync(Config.output);
    copySync('./input/assets', Config.output + '/assets', { overwrite: true });
    Deno.writeTextFile(Config.output + '/output.html', output);

    console.log(`updated at ${new Date().toLocaleTimeString()}`);
}

// deno-lint-ignore no-explicit-any
function renderTemplate(template: string, data: any): string {
    const templateObject = Twig.twig({ data: template });
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
