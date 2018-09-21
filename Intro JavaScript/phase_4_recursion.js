function range(start, end) {
    if (start === end) {
      return [end];
    } else {
      let new_start = start + 1;
      add_on = range(new_start, end);
      [start] + add_on;
    }
}
