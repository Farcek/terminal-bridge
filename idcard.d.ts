/// <reference path="./error.d.ts" />

declare namespace terminal {
    /**
     * KIOSK машины ID card reader /иргэний үнэмлэх/ library
     */
    export module idCard {
        export interface IReadOption {
            /**
             * state id
             */
            ID: string
        }
        export interface IReadResult {
            StateID: string
            Status: string
            FamilyName: string
            Suname: string
            GivenName: string
            Sex: string
            Birthday: string
            RdNumber: string
            IssueDate: string
            ExpiryDate: string
            /**
             * Зураг Base64Image format-р унгшина
             */
            PhotoData: string
            /**
             * хурууний хээний чанар
             */
            FingerQuality: number
            Blocked: number

            /**
             * хурууний хээг шалганад бэлэн эсэх
             */


            VerifiedLimit: number
        }

        export interface IReadCallback {
            (error: IError | null, res: IReadResult): void
        }



        /**
         * Иргэний үнэмлэх унших
         * 
         * @param option Read options
         * @param callback node style callback
         */
        export function read(option: IReadOption, callback: IReadCallback): void


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
    }
}