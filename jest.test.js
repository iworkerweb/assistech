function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function reducer(a, b) {
    return function nextWrapper(...args) {
      return a(b(...args));
    };
  });
}

function next(action) {
  console.log("[next]", action);
}

function fooMiddleware(next) {
  console.log("[fooMiddleware] trigger");
  return function next_from_foo(action) {
    console.log("[fooMiddleware] before next");
    next(action);
    console.log("[fooMiddleware] after next");
  };
}

function barMiddleware(next) {
  console.log("[barMiddleware] trigger");
  return function next_from_bar(action) {
    console.log("[barMiddleware] before next");
    next(action);
    console.log("[barMiddleware] after next");
  };
}

function bazMiddleware(next) {
  console.log("[bazMiddleware] trigger");
  return function next_from_baz(action) {
    console.log("[bazMiddleware] before next");
    next(action);
    console.log("[bazMiddleware] after next");
  };
}

const chain = compose(fooMiddleware, barMiddleware, bazMiddleware);
const nextChain = chain(next);
nextChain("{data}");