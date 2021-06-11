'use strict';
const d = document,
  groupsWords = [
    ['mami', 'bebé', 'princess', 'mami'],
    ['yo quiero', 'yo puedo', 'yo vengo a', 'voy a'],
    ['encenderte', 'amarte', 'ligar', 'jugar'],
    ['suave', 'lento', 'rápido', 'fuerte'],
    [
      'hasta que salga el sol',
      'toda la noche',
      'hasta el amanecer',
      'todo el día',
    ],
    ['sin anestesia', 'sin compromiso', 'feis to feis', 'sin miedo'],
  ],
  $words = d.getElementById('words'),
  $btnCompose = d.getElementById('btnCompose'),
  $lyric = d.getElementById('lyric');

d.addEventListener('DOMContentLoaded', () => {
  eventsListener();
  showWords();
});

const eventsListener = () => $btnCompose.addEventListener('click', getLyric);

const showWords = () => {
  const $caption = d.createElement('caption');
  $caption.textContent = 'palabras base';
  $words.appendChild($caption);
  for (let i = 0; i < groupsWords.length; i++) {
    const $tr = d.createElement('tr');
    for (let j = 0; j < groupsWords.length; j++) {
      const $td = d.createElement('td');
      $td.textContent = groupsWords[j][i];
      $tr.appendChild($td);
    }
    $words.appendChild($tr);
  }
};

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getLyric = () => {
  let lyric = '';
  groupsWords.forEach((group) => {
    const idx = getRandom(0, group.length);
    const word = group[idx];
    lyric += word.replace('r', 'l') + ' ';
  });
  $lyric.textContent = lyric;
};
