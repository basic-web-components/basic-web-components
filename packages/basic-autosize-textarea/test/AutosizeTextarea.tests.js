import { assert } from 'chai';
import AutosizeTextarea from '../src/AutosizeTextarea'; // jshint ignore:line


describe('AutosizeTextarea', () => {

  // this.timeout(2000);

  let container;

  before(() => {
    container = document.getElementById('container');
  });

  after(() => {
    container.innerHTML = '';
  });

  it('can be instantiated', () => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    assert(fixture);
  });

  it('sets initial value from initial innerHTML', () => {
    container.innerHTML = '<basic-autosize-textarea>Hello</basic-autosize-textarea>';
    let fixture = container.querySelector('basic-autosize-textarea');
    assert.equal(fixture.value, 'Hello');
  });

  it('updates value when innerHTML changes', done => {
    let fixture = document.createElement('basic-autosize-textarea');
    container.appendChild(fixture);
    fixture.value = 'Initial value';
    let newContent = 'New value';
    fixture.innerHTML = newContent;
    setTimeout(() => {
      assert.equal(fixture.value, newContent);
      done();
    });
  });

  // test('default minimumRows', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   flush(function() {
  //     assert.equal(fixture.minimumRows, 1);
  //     done();
  //   });
  // });
  //
  // test('set minimumRows', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   container.appendChild(fixtureComp);
  //   fixture.minimumRows = 10;
  //   flush(function() {
  //     assert.equal(fixture.minimumRows, 10);
  //     assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //     done();
  //   });
  // });
  //
  // test('set minimumRows declaratively', done => {
  //   container.innerHTML = '<basic-autosize-textarea minimum-rows="10">Hello</basic-autosize-textarea>';
  //   let fixture = container.querySelector('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixtureComp);
  //   flush(function() {
  //     assert.equal(fixture.minimumRows, 10);
  //     assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //     done();
  //   });
  // });
  //
  // test('value', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   fixture.value = 'Hello, world';
  //   flush(function() {
  //     assert.equal(fixture.value, "Hello, world");
  //     assert(fixture.$.textBox.clientHeight > 1);
  //     done();
  //   })
  // });
  //
  // test('minimumRows can make element taller than required to fit content', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   container.appendChild(fixtureComp);
  //   flush(function() {
  //     let content = 'Hello world';
  //     fixture.minimumRows = 10;
  //     fixture.value = content;
  //     flush(function() {
  //       // Confirm minimumRows can make the element taller than is required just to fit the content
  //       assert.equal(fixture.minimumRows, 10);
  //       assert.equal(fixture.value, content);
  //       assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //       done();
  //     });
  //   });
  // });
  //
  // test('value changes', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   let content = 'Hello, world';
  //   fixture.value = content;
  //   flush(function() {
  //     assert.equal(fixture.value, content);
  //     assert(fixture.$.textBox.clientHeight > 1);
  //     let newContent = 'Changed content';
  //     fixture.value = newContent;
  //     flush(function() {
  //       assert.equal(fixture.value, newContent);
  //       assert(fixture.$.textBox.clientHeight > 1);
  //       done();
  //     });
  //   });
  // });
  //
  // test('autosize works when content is HTML', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   container.appendChild(fixtureComp);
  //   // Confirm autosize works when content is HTML
  //   let html = '<html>\n<body>\n<p>\nThis is a test\n</p>\n<div>\nSome more tests\n</div>\n</body>\n</html>';
  //   fixture.value = html;
  //   flush(function() {
  //     assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //     done();
  //   });
  // });
  //
  // test('autosize works with text wrapping', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   container.appendChild(fixtureComp);
  //   let text = 'Lots of words to force wrapping. Lots of words to force wrapping. ' +
  //   'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
  //   'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
  //   'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ' +
  //   'Lots of words to force wrapping. Lots of words to force wrapping. Lots of words to force wrapping. ';
  //   fixture.value = text;
  //   flush(function() {
  //     assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //     done();
  //   });
  // });
  //
  // test('autosize works with long string with no whitespace', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   let fixtureComp = document.createElement('basic-autosize-textarea')
  //   container.appendChild(fixture);
  //   container.appendChild(fixtureComp);
  //   text = 'sadf;lksadfjl;sdfjl;ksjdfkjsd;lfjsdlkfjksdjfosadjflwemrflkwefoawefowmefomwefomowefomweofmwqefmwoqemfowqefomwqefoiwemfomwqeofkmwefomwerfklasjdlmwefoqwkemfwqemfowqmefowqmefowmefowqemfowemfowqemfwoefokwqmefokmwerfokmwefwoqemfowqmefokqwmefowqefowqmefoqwemfowemfomweofijweoirulwemfkwejfoijewtjoiqhewfknwerofijqewrotmerfomoewfqweofmqweofjqweofmweomwqeorjqweoifmqwoefqoewfmoqewfmqwoefmqwefoqwemfoiwejrtomqwdfoiqwemromqweofiwmerowqeoimwqeormwqefom';
  //   fixture.value = text;
  //   flush(function() {
  //     assert(fixture.$.textBox.clientHeight > 2 * fixtureComp.$.textBox.clientHeight);
  //     done();
  //   })
  // });
  //
  // test('placeholder', done => {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   fixture.placeholder = 'Placeholder text';
  //   flush(function() {
  //     assert.equal(fixture.placeholder, "Placeholder text");
  //     assert.notEqual(fixture.value, "Placeholder text");
  //     done();
  //   });
  // });
  //
  // test('change', function (done) {
  //   let fixture = document.createElement('basic-autosize-textarea');
  //   container.appendChild(fixture);
  //   flush(function () {
  //     let newText = 'foo\nbar\nfizbo';
  //
  //     // Ensure we can see the internal textarea element
  //     assert(fixture.$.textBox);
  //
  //     let textBox = fixture.$.textBox;
  //
  //     // Note the initial clientHeight which should be less than when we add lines of text
  //     let clientHeight = textBox.clientHeight;
  //
  //     // Set up the event listener on the change event
  //     fixture.addEventListener('change', function(e) {
  //       // Do we have the new text?
  //       assert.equal(fixture.value, newText);
  //
  //       // The minimumRows property should not have changed
  //       assert.equal(fixture.minimumRows, 1);
  //
  //       // Get the new client height and assert it should be more than twice the old value
  //       let newClientHeight = textBox.clientHeight;
  //       assert(newClientHeight >  2 * clientHeight);
  //
  //       done();
  //     });
  //
  //     // Set the new text and flush the browser
  //     fixture.value = newText;
  //     flush(function() {
  //       fixture.dispatchEvent(new CustomEvent('change'));
  //     });
  //   });
  // });

});
