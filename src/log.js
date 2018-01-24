export function log(...args) {
  const [label, ...restArgs] = [...args];

  return console.log(`%c${label}:`, 'background: #222; color: #bada55; padding: 3px 5px;', ...restArgs);
};

