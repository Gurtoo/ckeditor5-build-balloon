/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
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
// eslint-disable-next-line no-duplicate-imports
import { FontColor } from '@ckeditor/ckeditor5-font';
// eslint-disable-next-line no-duplicate-imports
import { FontFamily } from '@ckeditor/ckeditor5-font';
// eslint-disable-next-line no-duplicate-imports
import { FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
// eslint-disable-next-line no-duplicate-imports
import { Image } from '@ckeditor/ckeditor5-image';
// eslint-disable-next-line no-duplicate-imports
import { ImageCaption } from '@ckeditor/ckeditor5-image';
// eslint-disable-next-line no-duplicate-imports
import { ImageResize } from '@ckeditor/ckeditor5-image';
// eslint-disable-next-line no-duplicate-imports
import { ImageStyle } from '@ckeditor/ckeditor5-image';
// eslint-disable-next-line no-duplicate-imports
import { ImageToolbar } from '@ckeditor/ckeditor5-image';
// eslint-disable-next-line no-duplicate-imports
import { ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
// eslint-disable-next-line no-duplicate-imports
import { IndentBlock } from '@ckeditor/ckeditor5-indent';
// eslint-disable-next-line no-duplicate-imports
import { Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
// eslint-disable-next-line no-duplicate-imports
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
// eslint-disable-next-line no-duplicate-imports
import { ListStyle } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Table } from '@ckeditor/ckeditor5-table';
// eslint-disable-next-line no-duplicate-imports
import { TableCellProperties } from '@ckeditor/ckeditor5-table';
// eslint-disable-next-line no-duplicate-imports
import { TableProperties } from '@ckeditor/ckeditor5-table';
// eslint-disable-next-line no-duplicate-imports
import { TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
// eslint-disable-next-line no-duplicate-imports
import { Underline } from '@ckeditor/ckeditor5-basic-styles';

export default class BalloonEditor extends BalloonEditorBase {
	public static override builtinPlugins = [
		Alignment,
		Autoformat,
		AutoImage,
		SimpleUploadAdapter,
		BlockQuote,
		Bold,
		CloudServices,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		// ListStyle,
		MediaEmbed,
		Paragraph,
		Table,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TableCellProperties,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'heading',
				'|', 'bold', 'italic',
				'|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			]
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'ru'
	};
}
