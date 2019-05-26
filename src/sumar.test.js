import adding from './sumar.js';

test('Test de prueba', () => {
	var result = adding(1,1);
	var bandera = (result == 2);
	expect(bandera).toBeTruthy();
    //assert.equal(result, 2);
})