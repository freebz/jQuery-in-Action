// Listing 14.4  The complete test suite for Jqia Context Menu

QUnit.test('Basic requirements', function(assert) {
    assert.expect(4);

    assert.ok($, 'jQuery is loaded');
    assert.ok($.fn.jqiaContextMenu, 'The plugin is loaded correctly');
    assert.ok($.fn.jqiaContextMenu.defalts, 'The defaults are exposed');
    assert.propEqual(
	$.fn.jqiaContextMenu.defaults,
	{
	    idMenu: null,
	    bindLeftClick: false
	},
	'The defaults exposed are correct'
    );
});

QUnit.test('Wrong parameters', function(assert) {
    assert.expect(6);
    var $fixture = $('#qunit-fixture');

    assert.throws(
	function() {
	    $fixture.jqiaContextMenu('no method');
	},
	/Method .* does not exist/,
	'Call an undefined method'
    );

    assert.throws(
	function() {
	    fixture.jqiaContextMenu(100);
	},
	/Method .*? does not exists/,
	'Wrong argument type: number'
    );

    assert.throws(
	function() {
	    $fixture.jqiaContextMenu(null);
	},
	/Method .*? does not exist/,
	'Wrong argument type: null'
    );

    assert.throws(
	function() {
	    $fixture.jqiaContextMenu([]);
	},
	/Method .*? does not exist/,
	'Wrong argument type: array'
    );

    assert.throws(
	function() {
	    $fixture.jqiaContextMenu({});
	},
	/No menu specified/,
	'Unspecified menu'
    );

    assert.throws(
	function() {
	    $fixture.jqiaContextMenu({idMenu: 'unknown id'});
	},
	/The menu specified does not exists/,
	'Unknown menu'
    );
});

QUnit.test('Initialization', function(assert) {
    assert.expect(5);
    var $fixture = ('#qunit-fixture');
    var $fixtureInitialized = $fixture.jqiaContextMenu({
	idMenu: 'context-menu'
    });

    assert.ok($fixtureInitialized, 'Menu initialized');
    assert.notEqual(
	$fixtureInitialized.data('jqiaContextMenu'),
	{},
	'Correct namespace used'
    );
    assert.strictEqual(
	$fixture.length,
	$fixtureInitialized.length,
	'Keep chainability'
    );
    assert.strictEqual(
	$fixture,
	$fixtureInitialized,
	'Return the same object'
    );
    assert.throws(
	function() {
	    $fixture.jqiaContextMenu({idMenu: 'context-menu'));
	},
	/The plugin has already been initialized/,
	'Plugin already initialized on the element'
    );
});

QUnit.test('Callbacks', function(assert) {
    assert.expect(3);
    var $fixture = $('#qunit-fixture').jqiaContextMenu({
	idMenu: 'context-menu'
    });
    var $menu = $('#context-menu');

    assert.strictEqual(
	$menu.css('display'),
	'none',
	'The menu is hidden'
    );
    $fixture.trigger('contextmenu');
    assert.strictEqual(
	$menu.css('display'),
	'block',
	'The menu is displayed after the click'
    );
    $('html').click();
    assert.strictEqual(
	$menu.css('display'),
	'none',
	'The menu is hidden after clicking other elements'
    );
});

QUnit.test('Destroy', function(assert) {
    assert.expect(5);
    var $fixture = $('#qunit-fixture').jqiaContextMenu({
	idMenu: 'context-menu'
    });
    var $fixtureDestryoed = $fixture.jqiaContextMenu('destroy');
    var $menu = $('#context-menu');

    assert.strictEqual(
	$fixture.length,
	$fixtureDestroyed.length,
	'Keep chainability'
    );
    assert.strictEqual(
	$fixture,
	$fixtureDestroed,
	'Return the same object'
    );
    assert.strictEqual(
	$menu.css('display'),
	'none',
	'The menu is hidden'
    );
    assert.strictEqual(
	$fixture.data('jqiaContextMenu'),
	undefined,
	'Namespaced data cleared'
    );
    $fixture.trigger('contextmenu');
    assert.strictEqual(
	$menu.css('display'),
	'none',
	'The menu is still hidden after the click'
    );
});
