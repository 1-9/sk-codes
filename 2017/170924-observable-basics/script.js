window.onload = function () {
  Rx.Observable.fromEvent(document.body, 'mousemove')
    .subscribe(() => console.log('mouse moving'))
};
