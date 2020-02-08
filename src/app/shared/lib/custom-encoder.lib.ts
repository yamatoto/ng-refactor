import { HttpParameterCodec } from '@angular/common/http';

export class CustomEncoder implements HttpParameterCodec {
    /**
     * @param key キー
     * @returns URIエンコードしたキー
     */
    encodeKey(key: string): string {
        return encodeURIComponent(key);
    }

    /**
     * @param value 値
     * @returns URIエンコードした値
     */
    encodeValue(value: string): string {
        return encodeURIComponent(value);
    }

    /**
     * @param key キー
     * @returns URIデコードしたキー
     */
    decodeKey(key: string): string {
        return decodeURIComponent(key);
    }

    /**
     * @param value 値
     * @returns URIデコードした値
     */
    decodeValue(value: string): string {
        return decodeURIComponent(value);
    }
}
