/// <reference path="./error.d.ts" />

declare namespace terminal {

    /**
     * KIOSK машины Camera manager /Зураг авах/ library
     */
    export module camera {
        export interface ICaptureResult {
            /**
             * Captured image Base64 format
             */
            Image: string
        }

        export interface ICaptureCallback {
            (error: IError | null, res: ICaptureResult): void
        }
        /**
         * Camera -р зураг авах
         * 
         * @param camera Ажилуулах camer name
         * @param callback node style callback
         */
        export function capture(camera: string, callback: ICaptureCallback): void


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
