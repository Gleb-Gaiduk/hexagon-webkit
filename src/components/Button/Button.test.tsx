import { mount, shallow } from 'enzyme';
import Button, { ButtonContext, ButtonProps } from './Button';
import Loader from '../Loader/Loader';

const basicMockedProps: ButtonProps = {
  textLabel: 'Test label',
  dataTest: 'primary-test-btn',
  onClick: jest.fn(() => console.log('Click'))
};

describe('<Button /> component', () => {
  describe('Initial state', () => {
    let component: any;
    const props = { ...basicMockedProps };

    beforeEach(() => {
      component = shallow(<Button {...props} />);
    });

    it('should have a primary context by default', () => {
      expect(
        component.find('[data-test="primary-test-btn"]').hasClass('Button--context--primary')
      ).toEqual(true);
    });

    it('should not be disabled', () => {
      expect(component.find('[data-test="primary-test-btn"]').prop('disabled')).toBeFalsy();
    });

    it('should have "button" type by default', () => {
      expect(component.find('[data-test="primary-test-btn"]').prop('type')).toBe('button');
    });

    it('should render correct text label', () => {
      expect(component.find('[data-test="text-label"]').text()).toEqual(props.textLabel);
    });

    it('should not render a Loader', () => {
      expect(component.find(Loader)).toHaveLength(0);
    });

    it('should have middle size by default', () => {
      expect(component.find('[data-test="primary-test-btn"]').hasClass('Button--size--md')).toEqual(
        true
      );
    });
  });

  describe('Usage cases', () => {
    it('should be disabled when isDisabled={true} prop is passed', () => {
      const props = {
        ...basicMockedProps,
        isDisabled: true,
        buttonContext: ButtonContext.PRIMARY,
        dataTest: 'primary-test-btn'
      };
      const component = mount(<Button {...props} />);
      const button = component.find('[data-test="primary-test-btn"]');
      button.simulate('click');

      expect(button.prop('disabled')).toBeTruthy();
      expect(props.onClick).not.toBeCalled();
    });
  });

  it('should render with the class of secondary context when the secondary context is passed', () => {
    const props = {
      ...basicMockedProps,
      buttonContext: ButtonContext.SECONDARY_ON_DARK,
      dataTest: 'secondary-test-btn'
    };
    const component = shallow(<Button {...props} />);

    expect(
      component
        .find('[data-test="secondary-test-btn"]')
        .hasClass('Button--context--secondary-on-dark')
    ).toEqual(true);
  });

  it('should call a click handler on enabled button click', () => {
    const props = {
      ...basicMockedProps,
      buttonContext: ButtonContext.PRIMARY,
      dataTest: 'primary-test-btn'
    };
    const component = mount(<Button {...props} />);
    const button = component.find('[data-test="primary-test-btn"]');
    button.simulate('click');

    expect(button.prop('disabled')).toBeFalsy();
    expect(props.onClick).toBeCalledTimes(1);
  });

  it('should render Loader component when isLoading and isDisabled props are passed', () => {
    const props = { ...basicMockedProps, isLoading: true, isDisabled: true };
    const component = mount(<Button {...props} />);

    expect(component.find(Loader)).toHaveLength(1);
  });

  it('should have "submit" type when passed as prop', () => {
    const component = mount(<Button {...basicMockedProps} type={'submit'} />);
    expect(component.find('[data-test="primary-test-btn"]').prop('type')).toBe('submit');
  });
});
