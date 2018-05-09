import {tokenize} from './open-id-connect';

test('token decodes', () => {
  expect(
    tokenize(
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9' +
        '.eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ' +
        '.-xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM'
    )
  ).toEqual({
    encoded:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9' +
      '.eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ' +
      '.-xN_h82PHVTCMA9vdoHrcZxH-x5mb11y1537t3rGzcM',
    decoded: {
      userId: 'b08f86af-35da-48f2-8fab-cef3904660bd',
    },
  });
});
