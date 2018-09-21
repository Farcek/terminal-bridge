declare namespace terminal {
    /**
     *  KIOSK машины screen shot
     */
    export module screen {

        /**
         * @returns Base64 image string
         */
        export function windowScreenshot(): string

        /**
         * @returns Base64 image string
         */
        export function fullScreenshot(): string
    }
}