import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

$('#click-button').click(_.debounce(updateCounter, 500));
