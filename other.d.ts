/// <reference path="./error.d.ts" />
declare namespace terminal {
    export const version = 10101;


    export function sendKeys(keys: string);


    /**
     * KIOSK машины Barcode reader library
     */
    export module barcode {

        export interface IOptions {
            type: string
        }
        export interface IError {
            /**
            * range 5000 - 5999
            */
            code: number
            key: string
            message: string
        }
        export interface IResult {
            barcode: string
        }
        export interface ICallback {
            (error: IError | null, res: IResult): void
        }

        /**
         * 
         * @param options Унших тохируулга
         * @param callback node style callback
         */
        export function read(options: IOptions, callback: ICallback): void
    }

    /**
     * KIOSK машины хураамж(төлбөр). 
     */
    export module payment {

        export interface IOptions {
            type: string
            /**
             * Хэрэглэгчээс нэхэмжлэх төлбрийн ний дүн
             */
            amount: number

        }
        export interface IError {
            /**
            * range 6000 - 6999
            */
            code: number
            key: string
            message: string
        }
        export interface IResult {
            /**
             * Мерчантын нэхэмжлэлийн дугаар
             */
            MERCHANT_INVOICE_NUMBER: string

            /**
             * Мерчантын харилцагчийн код
             */
            MERCHANT_CUSTOMER_CODE: string

            /**
             * Төлбөрийн гүйлгээ хийсэн банкны код
             */
            BANK_CODE: string

            /**
             * Төлбөрийн гүйлгээ хийсэн банкны нэр
             */
            BANK_NAME: string

            /**
             * Төлбөрийн гүйлгээ хийсэн банкны журналын дугаар
             */
            BANK_TRANSACTION_NO: string

            /**
             * Төлбөрийн гүйлгээ хийсэн банкны огноо
             */
            BANK_TRANSACTION_DATE: string

            /**
             * Төлбөрийн гүйлгээний утга
             */
            BANK_TRANSACTION_DESCRITION: string

            /**
             * Төлбөрийн гүйлгээний дүн
             */
            BANK_TRANSACTION_AMOUNT: string

            /**
             * Төлбөрийн гүйлгээний мөнгөн тэмдэгт
             */
            BANK_TRANSACTION_CURR_CODE: string

            /**
             * Төлбөрийн гүйлгээний вальютын ханш
             */
            BANK_TRANSACTION_EXCH_RATE: string


            /**
             * Төлбөр хүлээн авсан банкны нэр
             */
            BENEFICIARY_BANK_NAME: string

            /**
             * Төлбөр хүлээн авсан банкны код
             */
            BENEFICIARY_BANK_CODE: string

            /**
             * Төлбөр хүлээн авсан дансны дугаар
             */
            BENEFICIARY_ACC_NUMBER: string

            /**
             * Төлбөр хүлээн авсан дансны нэр
             */
            BENEFICIARY_ACC_NAME: string

            /**
             * Төлбөр хүлээн авсан дансны мөнгөн тэмдэгт
             */
            BENEFICIARY_ACC_CURR_CODE: string

        }
        export interface ICallback {
            (error: IError | null, res: IResult): void
        }

        /**
         * 
         * @param options Гүйлгээ хийх тохируулга
         * @param callback node style callback
         */
        export function fee(options: IOptions, callback: ICallback): void
    }



}
