import { IMimeTypes } from '../interfaces';
declare const converter: (canvasPromises: Promise<HTMLCanvasElement>[], format?: IMimeTypes, showErrors?: boolean) => Promise<File[]>;
export { converter };
