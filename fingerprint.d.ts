/// <reference path="./error.d.ts" />

declare namespace terminal {

    /**
     * KIOSK Хурууны хээ унших library
     */
    export module fingerprint {
        export interface IScanResult {
            FingerData: string
        }

        export interface IScanCallback {
            (error: IError | null, res: IScanResult): void
        }
        /**
         * Хурууны хээ унших
         * 
         * @param callback node style callback
         */
        export function scan(callback: IScanCallback): void

        export interface IStatusResult {
            Status: string
        }

        export interface IStatusCallback {
            (error: IError | null, res: IStatusResult): void
        }

        export function status(callback: IStatusCallback): void

        export interface IVersionResult {
            Version: string
        }

        export interface IVersionCallback {
            (error: IError | null, res: IVersionResult): void
        }
        export function version(callback: IVersionCallback): void
    }
}