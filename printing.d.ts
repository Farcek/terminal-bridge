/// <reference path="./error.d.ts" />
declare namespace terminal {
    /**
     *  KIOSK машины Хэвлэх library / kkk
     */
    export module printing {
        export interface IPrintOptions {
            /**
             * Тухайн KIOSK машийнд суугдсан printer нэр
             */
            name: string

            /**
             * url-c хэвлэх.  template, payload paramter-d  hamaarahgui
             */
            url: string

            /**
             * загвар
             */
            template: string

            /**
             * тухайн хэвлэх загварын мэдээллийг json string хэлбэрээр илгээнэ
             */
            payload: string

            
            tray:string
        }
        /**
         * Printing result
         */
        export interface IPrintResult {
            /**
             * Хэвлэгдсэн материалын дугаар
             */
            documentId: string
        }

        /**
         * @param error null утгатай бол алдаагий гүйцэтгэл гэж үзнэ
         */
        export interface IPrintCallback {
            (error: IError | null, result: IPrintResult | null): void
        }

        /**
         * Хэвлэх үйлдэл
         * @param options хэвлэх тохируулга
         * @param callback node style callback
         */
        export function print(options: IPrintOptions, callback: IPrintCallback): void

        export interface IPreivewOptions {
            /**
             * Тухайн KIOSK машийнд суугдсан printer нэр
             */
            name: string

            /**
             * загвар
             */
            template: string

            /**
             * тухайн хэвлэх загварын мэдээллийг json string хэлбэрээр илгээнэ
             */
            payload: string
        }

        export interface IPreviewResult {

            /**
             * Зөвшөөрсөн эсэх
             */
            Confirm: boolean
        }

        export interface IPreviewCallback {
            (error: IError | null, result: IPreviewResult | null): void
        }
        
        /**
         * Уридчилан харах
         * 
         * @param options харах тохируулга
         * @param callback node style callback
         */
        export function preview(options: IPreivewOptions, callback: IPreviewCallback): void

        export interface IPaperOptions {
            /**
             * Тухайн KIOSK машийнд суугдсан printer нэр
             */
            name: string

            /**
             * загвар
             */
            template: string
        }
        export interface IPaperResult {
            /**
             * Хэвлэх боломжтой тоо хамжээ
             */
            Count: number
        }

        export interface IPaperCallback {
            (error: IError | null, result: IPaperResult | null): void
        }

        /**
         * Хэвлэх боломж бүхий цаасны тоо хэмжээг мэдэх
         * @param printerName 
         * @param options тохируулга
         * @param callback node style callback
         */
        export function paper(options: IPaperOptions, callback: IPaperCallback): void

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