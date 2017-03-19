
declare namespace globby {
    export function sync(patterns: string[]): string[];
}

declare function globby(patterns : string[]) : Promise<string[]>;

export = globby;
