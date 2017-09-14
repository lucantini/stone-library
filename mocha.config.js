let chai = require('chai'),
	chaiEnzyme = require('chai-enzyme'),
	hook = require('css-modules-require-hook'),
	path = require('path'),
	sass = require('node-sass'),
	sinonChai = require("sinon-chai"),
	jsdom = require('jsdom').jsdom;

require.extensions['.png'] = function () {
	return null;
};
require.extensions['.svg'] = function () {
	return null;
};
require.extensions['.jpg'] = function () {
	return null;
};
require.extensions['.gif'] = function () {
	return null;
};


hook({
	extensions: ['.scss'],
	generateScopedName: '[local]',
	preprocessCss: function (css, filepath) {
		var result = sass.renderSync({
			data: css,
			includePaths: [path.resolve(filepath, '..')]
		});

		return result.css;
	},
});

global.should = chai.should();
global.assert = chai.assert;
global.expect = chai.expect;

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>', {
	url: 'http://localhost',
});
global.window = document.defaultView;
// MatchMedia polyfill
window.matchMedia = window.matchMedia || function() {
	return {
		matches : false,
		addListener : function() {},
		removeListener: function() {}
	};
};

Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		global[property] = document.defaultView[property];
	}
});

global.navigator = global.window.navigator;

global.json = {
	"form": {
		"form_id": "quoter",
		"title": "Cotador",
		"areas": [
			{
				"area_id": "default",
				"title": "Titulo mock",
				"custom": {
					"type": "accordion",
				},
				"fields": [
					{
						"id": "name",
						"type": "text",
						"label": "Nome",
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								"type": "min",
								"value": 3,
								"message": "Field is required"
							}
						]
					},
					{
						"id": "birthday",
						"type": "text",
						"label": {
							"after": null,
							"before": "data de nascimento"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								"type": "date_format",
								"message": "Field must be a valid date format"
							}
						]
					},
					{
						"id": "gender",
						"type": "select",
						"label": {
							"after": null,
							"before": "gênero"
						},
						"default_value": "1",
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							}
						],
						"options": [
							{
								"label": "Sim",
								"value": 1
							},
							{
								"label": "Não",
								"value": 0
							}
						]
					},
					{
						"id": "state_id",
						"type": "input_suggestion",
						"label": {
							"after": null,
							"before": "estado"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								type: 'exists',
								message: 'Estado inválido.',
								form_id: 'quoter_form'
							}
						],
						"endpoint": "/abacate"
					},
					{
						"id": "has_job",
						"type": "select",
						"label": {
							"after": null,
							"before": "trabalhando"
						},
						"default_value": "1",
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							}
						],
						"options": [
							{
								"label": "está",
								"value": 1
							},
							{
								"label": "não está",
								"value": 0
							}
						]
					},
					{
						"id": "works_as",
						"type": "input_suggestion",
						"label": {
							"after": null,
							"before": "trabalha como"
						},
						"default_value": null,
						"dependencies": {
							"behavior": "hide",
							"rules": [
								{
									"type": "required_if",
									"field_id": "has_job",
									"value": "1"
								}
							]
						},
						"validations": [
							{
								"type": "required_if",
								"message": "Field is required",
								"field_id": "has_job",
								"value": "1"
							}
						],
						"endpoint": "/abacate"
					},
					{
						"id": "occupation",
						"type": "select",
						"label": {
							"after": null,
							"before": "ocupação"
						},
						"default_value": null,
						"dependencies": {
							"behavior": "hide",
							"rules": [
								{
									"type": "required_if",
									"field_id": "has_job",
									"value": "0"
								}
							]
						},
						"validations": [
							{
								"type": "required_if",
								"message": "Field is required",
								"field_id": "has_job",
								"value": "0"
							}
						],
						"endpoint": "/abacate"
					},
					{
						"id": "income_value",
						"type": "text",
						"label": {
							"after": null,
							"before": "salário"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								"type": "number",
								"message": "Field must be a number"
							}
						]
					},
					{
						"id": "document",
						"type": "text",
						"label": {
							"after": null,
							"before": "documento"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								"type": "cpf",
								"message": "Field must be a valid cpf"
							}
						]
					},
					{
						"id": "cellphone",
						"type": "text",
						"label": {
							"after": null,
							"before": "celular"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							}
						]
					},
					{
						"id": "email",
						"type": "text",
						"label": {
							"after": null,
							"before": "email"
						},
						"default_value": null,
						"dependencies": null,
						"validations": [
							{
								"type": "required",
								"message": "Field is required"
							},
							{
								"type": "email",
								"message": "Field must be a valid email"
							}
						]
					}
				]
			}
		]
	}
};
