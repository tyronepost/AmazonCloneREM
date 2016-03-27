import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index/deals', 'Unit | Route | index/deals', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);

  var deals = route.model();
  assert.ok(deals);

  var xbox = deals[0];
  var ps4 = deals[1];
  var wiiu = deals[2];

  assert.ok(xbox.name === 'Xbox One');
  assert.ok(ps4.name === 'Playstation 4');
  assert.ok(wiiu.name === 'Wii U');
});
