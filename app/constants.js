export const LIGHT_TYPES = Object.freeze({
  TORCH: 'torch',
  SOS: 'sos',
  MORSE: 'morse',
  STROBE: 'strobe',
});

export const MORSE_DURATIONS = Object.freeze({
  PAUSE: 300,
  SHORT: 200,
  LONG: 600,
});

export const STROBE_DURATION = 200;

export const MORSE_CODES_MAP = Object.freeze({
  a: '._',
  b: '_...',
  c: '_._.',
  d: '_..',
  e: '.',
  f: '.._.',
  g: '__.',
  h: '....',
  i: '..',
  j: '.___',
  k: '_._',
  l: '._..',
  m: '__',
  n: '_.',
  o: '___',
  p: '.__.',
  q: '__._',
  r: '._.',
  s: '...',
  t: '_',
  u: '.._',
  v: '..._',
  w: '.__',
  x: '_.._',
  y: '_.__',
  z: '__..',
  '1': '.____',
  '2': '..___',
  '3': '...__',
  '4': '...._',
  '5': '.....',
  '6': '_....',
  '7': '__...',
  '8': '___..',
  '9': '____.',
  '0': '_____',
});
