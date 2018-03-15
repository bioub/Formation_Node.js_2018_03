export function toggle(clock) {
  if (clock.id) {
    return clock.stop();
  }
  clock.start();
}
