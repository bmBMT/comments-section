export default function usePostEnter(e, callback) {
  if (e.keyCode === 13) {
    e.preventDefault();
    callback();
  }
}