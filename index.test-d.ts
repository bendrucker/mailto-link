import {expectType} from 'tsd';
import mailto from '.';

expectType<string>(mailto({ to: 'git@github.com' }));
expectType<string>(mailto({
  to: 'git@github.com',
  cc: 'git@github.com',
  bcc: 'git@github.com',
  subject: 'Hello',
  body: 'World'
}));