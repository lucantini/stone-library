import currencyMask from './currencyMask';

describe('Currency Mask', () => {
	it('should have return string without mask - 5', () => {
		expect(currencyMask.unmount('5')).to.eql('5');
	});
	it('should have return string without mask - 0,050', () => {
		expect(currencyMask.unmount('R$ 0,050')).to.eql('0,050');
	});
	it('should have return string without mask - 5.003.299,854', () => {
		expect(currencyMask.unmount('R$ 5.003.299,854')).to.eql('5.003.299,854');
	});
	it('should have return string with mask R$ 0,05', () => {
		expect(currencyMask.mount(0.05)).to.eql('R$ 0,05');
	});
	it('should have return string with mask R$ 5,00', () => {
		expect(currencyMask.mount(5.00)).to.eql('R$ 5,00');
	});
	it('should have return string with mask R$ 50.032.998,54', () => {
		expect(currencyMask.mount(50032998.54)).to.eql('R$ 50.032.998,54');
	});
	it('should not have a comparedValue on unmount', () => {
		expect(currencyMask.unmount('homem macaco')).to.eql('');
	});
});
