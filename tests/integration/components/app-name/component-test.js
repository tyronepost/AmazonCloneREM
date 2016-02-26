import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-name', 'Integration | Component | app name', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{app-name}}`);

  assert.equal(this.$().text().trim(), 'Webstore');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#app-name}}
      template block text
    {{/app-name}}
  `);

  assert.equal(this.$().text().trim(), 'Webstore');
});
