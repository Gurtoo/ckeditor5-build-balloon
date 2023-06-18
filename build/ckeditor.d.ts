/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { AutoImage } from '@ckeditor/ckeditor5-image';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Bold } from '@ckeditor/ckeditor5-basic-styles';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { FontColor } from '@ckeditor/ckeditor5-font';
import { FontFamily } from '@ckeditor/ckeditor5-font';
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image } from '@ckeditor/ckeditor5-image';
import { ImageCaption } from '@ckeditor/ckeditor5-image';
import { ImageResize } from '@ckeditor/ckeditor5-image';
import { ImageStyle } from '@ckeditor/ckeditor5-image';
import { ImageToolbar } from '@ckeditor/ckeditor5-image';
import { ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Table } from '@ckeditor/ckeditor5-table';
import { TableCellProperties } from '@ckeditor/ckeditor5-table';
import { TableProperties } from '@ckeditor/ckeditor5-table';
import { TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Underline } from '@ckeditor/ckeditor5-basic-styles';
export default class BalloonEditor extends BalloonEditorBase {
    static builtinPlugins: (typeof Alignment | typeof TextTransformation | typeof Autoformat | typeof SimpleUploadAdapter | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof BlockQuote | typeof Bold | typeof Italic | typeof Underline | typeof CloudServices | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Paragraph | typeof Heading | typeof Indent | typeof IndentBlock | typeof Link | typeof LinkImage | typeof List | typeof MediaEmbed | typeof Table | typeof TableCellProperties | typeof TableProperties | typeof TableToolbar)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
