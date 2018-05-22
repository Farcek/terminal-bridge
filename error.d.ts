
declare namespace terminal {

    /**
    * Алдааний мэдээлэл
    */
    export interface IError {
        /**
         * Алдааг танийх түлхүүр
         * Error code - той ижил үүрэг хүлээнэ
         */
        key: string
        /**
         * Тухайн алдааны default мэдээлэл
         */
        message: string

        /**
         * Алдааны нэмэлт талбарууд
         */
        properties?: { [key: string]: any }
    }
}
