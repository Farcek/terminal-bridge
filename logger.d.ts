declare namespace terminal {

    export module logger {
        export function write(logname: string, message:string, attr:object): void;
    }
}