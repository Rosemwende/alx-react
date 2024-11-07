import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
  });

  it('calls logOut when control+h is pressed', () => {
    const logOutMock = jest.fn();
    global.alert = jest.fn();

    const wrapper = shallow(<App logOut={logOutMock} />);

    const keydownEvent = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h',
    });
    window.dispatchEvent(keydownEvent);

    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('does not call logOut when control+h is not pressed', () => {
    const logOutMock = jest.fn();
    global.alert = jest.fn();

    shallow(<App logOut={logOutMock} />);

    const keydownEvent = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'a',
    });
    window.dispatchEvent(keydownEvent);

    expect(global.alert).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();
  });
});
