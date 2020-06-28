let range = (start, end, step) => {
  let array = [];
  if (start < end) {
    for (let i = start; i <= end; ) {
      array.push(i);
      i += step;
    }
    console.log(array);
  } else {
    for (let i = start; i >= end; ) {
      array.push(i);
      i += step;
    }
    console.log(array);
  }
};

range(5, 2, -2);
