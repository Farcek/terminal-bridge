/// <reference path="./error.d.ts" />

declare namespace terminal {
    /**
     * KIOSK машины ID card reader /иргэний үнэмлэх/ library
     */
    export module idCard {
        export interface IReadOption {
            /**
             * Ажиллах горимыг тодорхойлох
             * avilable values : 'read' | 'verify' 
             */
            Command: 'read' | 'verify'
        }
        export interface IReadResult {
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

            /**
             * хурууний хээг шалганад бэлэн эсэх
             */
            FingerReady: number

            Verified: boolean
        }

        export interface IReadCallback {
            (error: IError | null, res: IReadResult): void
        }

        export interface IOnLogoutCallback {
            (error: IError | null, { Flag: boolean }): void
        }
        /**
         * Иргэний үнэмлэх унших
         * 
         * @param option Read options
         * @param callback node style callback
         */
        export function read(option: IReadOption, callback: IReadCallback): void

        /**
         * Иргэний үнэмлэх унших
         * 
         * @param option Read options
         * @param callback node style callback
         */
        export function onLogout(callback: IOnLogoutCallback): void

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