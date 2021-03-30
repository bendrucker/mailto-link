declare interface Options {
  to?: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject?: string;
  body?: string;
}

export default function(options: Options): string;
