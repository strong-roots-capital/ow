import test from 'ava';
import m from '..';

test('dataView', t => {
	t.notThrows(() => m(new DataView(new ArrayBuffer(1)), m.dataView));
	t.throws(() => m(new ArrayBuffer(1) as any, m.dataView), 'Expected argument to be of type `DataView` but received type `ArrayBuffer`');
	t.throws(() => m(new ArrayBuffer(1) as any, 'data', m.dataView), 'Expected `data` to be of type `DataView` but received type `ArrayBuffer`');
	t.throws(() => m(12 as any, m.dataView), 'Expected argument to be of type `DataView` but received type `number`');
});
