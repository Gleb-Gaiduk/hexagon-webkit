import { mount } from 'enzyme';
import Heading from './Heading';

describe('<Heading /> component', () => {
  it('should render an H1 Heading with the correct styles', () => {
    const expectedChildren = 'Heading 1';
    const component = mount(
      <Heading htmlTag={'h1'} styleType={'h1'}>
        {expectedChildren}
      </Heading>
    );

    expect(component.find('h1')).toHaveLength(1);
    expect(component.find('h1').hasClass('Heading--type--h1')).toEqual(true);
  });

  it('should render an H2 Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'h2'} styleType={'h2'}>
        Heading 2
      </Heading>
    );

    expect(component.find('h2')).toHaveLength(1);
    expect(component.find('h2').hasClass('Heading--type--h2')).toEqual(true);
  });

  it('should render an H3 Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'h3'} styleType={'h3'}>
        Heading 3
      </Heading>
    );

    expect(component.find('h3')).toHaveLength(1);
    expect(component.find('h3').hasClass('Heading--type--h3')).toEqual(true);
  });

  it('should render an H4 Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'h4'} styleType={'h4'}>
        Heading 4
      </Heading>
    );

    expect(component.find('h4')).toHaveLength(1);
    expect(component.find('h4').hasClass('Heading--type--h4')).toEqual(true);
  });

  it('should render an H5 Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'h5'} styleType={'h5'}>
        Heading 5
      </Heading>
    );

    expect(component.find('h5')).toHaveLength(1);
    expect(component.find('h5').hasClass('Heading--type--h5')).toEqual(true);
  });

  it('should render an H6 Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'h6'} styleType={'h6'}>
        Heading 6
      </Heading>
    );

    expect(component.find('h6')).toHaveLength(1);
    expect(component.find('h6').hasClass('Heading--type--h6')).toEqual(true);
  });

  it('should render an p Heading with the correct styles', () => {
    const component = mount(
      <Heading htmlTag={'p'} styleType={'h6'}>
        Heading 6
      </Heading>
    );

    expect(component.find('p')).toHaveLength(1);
    expect(component.find('p').hasClass('Heading--type--h6')).toEqual(true);
  });

  it('should render correct shildren', () => {
    const component = mount(
      <Heading htmlTag={'h1'} styleType={'h1'}>
        <span>Heading 1</span>
      </Heading>
    );

    expect(component.find('span').text()).toBe('Heading 1');
  });
});
