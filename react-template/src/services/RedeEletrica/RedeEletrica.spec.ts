import RedeEletrica from '.';

/** 
  * Service RedeEletrica tests
  * @module RedeEletrica
  */
describe('RedeEletrica tests', () => {
  // verifica se o componente é renderizado
  it('should run RedeEletrica example', () => {
    const exampleServiceCall = new RedeEletrica();
    const example = exampleServiceCall.example();
    expect(example).toBe('example');
  });
})