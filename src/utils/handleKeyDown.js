export default function handleKeyDown(e, callback) {
  if (e.keyCode === 13) {
    e.preventDefault();
    callback();
  }
}