function accum(s) {
	return [...s]
          .map( (elm, idx) => `${elm.toUpperCase()}${elm.repeat(idx).toLowerCase()}`)
          .join('-');
}