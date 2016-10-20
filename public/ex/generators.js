;(function(win, doc) {
  if (win.console) {
    console.log = function (str) {
      doc.getElementById('log').innerHTML += str + '<br>';
    }
  }

  const each = function* (arr) {
    console.log('each start!!');
    for (const v of arr.slice(0)) {
      console.log('each: ' + v);
      yield v;
    }
  }

  const filter = function* (e, f) {
    console.log('filter start!!');
    for (const v of e) {
      if (f(v)) {
        console.log('filter: ' + v);
        yield v;
      }
    }
  }

  const map = function* (e, f) {
    console.log('map start!!');
    for (const v of e) {
      console.log('map: ' + v);
      yield f(v);
    }
  }

  function runTask(taskId) {
    taskId = taskId.slice(-1) * 1;
    doc.getElementById('log').innerHTML = '';

    if (taskId === 1) {
      for (const v of each([1,2,3,4])) {
        console.log(v);
      }
    } else if (taskId === 2) {
      for(const v of filter(each([1,2,3,4]), (v) => v%2 === 0)) {
        console.log(v);
      }
    } else if (taskId === 3) {
      for (const v of map(filter(each([1,2,3,4]), v => v%2 === 0), v => v * 2)) {
        console.log(v);
      }
    }
  }

  const btns = document.getElementsByTagName('button');

  [].map.call(
    btns,
    (ele) => ele.onclick = (event) => runTask(event.target.id) 
  );

  // doc.getElementById('task1').onclick = function() { runTask(1); };
  // doc.getElementById('task2').onclick = function() { runTask(2); };
  // doc.getElementById('task3').onclick = function() { runTask(3); };
})(window, document);
