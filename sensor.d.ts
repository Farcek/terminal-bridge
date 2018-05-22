/// <reference path="./error.d.ts" />

declare namespace terminal {

    /**
     * KIOSK sensor /Мидрэгч/ library
     */
    export module sensor {
        export interface ISensorResult {
            /**
             * Юуны мэдрэгч болох
             */
            Name: string
            /**
             * Мэдээлэл
             */
            Message: string
        }

        export interface ISensorCallback {
            (error: IError | null, res: ISensorResult): void
        }
        /**
         * Бүртгүүлэх 
         * 
         * @param callback node style callback
         */
        export function register(callback: ISensorCallback): void
    }
}
