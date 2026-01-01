/*import { qs } from './lib/dom.js';
import { createCounter } from './modules/counter.js';
import { save, load } from './services/storage.js';

const state = load();
const counter = createCounter(state.count || 0);

const app = qs('#app');
app.innerHTML = `
  <div class="card">
    <p>Count: <strong id="count">${counter.value()}</strong></p>
    <button id="inc">Increase</button>
    <button id="dec">Decrease</button>
  </div>`;

qs('#inc').addEventListener('click', () => {
  qs('#count').textContent = counter.inc();
  save({ count: counter.value() });
});
qs('#dec').addEventListener('click', () => {
  qs('#count').textContent = counter.dec();
  save({ count: counter.value() });
});*/
