export const fulfilled = () => {};

const PENDING = "PENDING"; // 定义Promise的三种状态：进行中
const FULFILLED = "FULFILLED"; // 已成功
const REJECTED = "REJECTED"; // 已失败

function resolve(value) {
  return value; // 返回传入的value值
}

function reject(err) {
  throw err; // 抛出错误
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    // 如果promise2和x是同一个对象，即形成循环引用，则抛出错误
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  let called;
  if ((typeof x === "object" && x != null) || typeof x === "function") {
    // 判断x是否为对象或函数类型
    try {
      let then = x.then;
      if (typeof then === "function") {
        // 如果x具有then方法，则认为其为一个Promise对象
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); // 对y进行递归处理，直到返回一个非Promise对象
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r); // 如果在调用onRejected时发生错误，则将其作为原因拒绝promise2
          }
        );
      } else {
        resolve(x); // 如果x不是一个thenable对象，则以x的值解析promise2。
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e); // 如果在调用then方法时发生错误，则将其作为原因拒绝promise2
    }
  } else {
    resolve(x); // 如果x是一个普通值，则以x的值解析promise2。
  }
}

class Promise {
    //当new一个promise可以执行一个构造函数，如下:
  constructor(executor) {
    this.status = PENDING; // 初始化Promise的状态为进行中
    this.value = undefined; // 初始化Promise的值为undefined
    this.reason = undefined; // 初始化Promise的原因为undefined
    this.resolveCallbacks = []; // 存储成功回调函数的数组
    this.rejectCallbacks = []; // 存储失败回调函数的数组

    let resolve = (value) => {
      // 定义resolve函数，用于将状态从进行中改变为已成功，并执行成功回调函数
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.resolveCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      // 定义reject函数，用于将状态从进行中改变为已失败，并执行失败回调函数
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject); // 执行executor函数，并传入resolve和reject作为参数
    } catch (error) {
      reject(error); // 如果在executor执行过程中抛出异常，则将Promise状态改为已失败并传入错误原因
    }
  }

  then(onFulfilled, onRejected) {
    // 定义then方法，用于注册成功和失败的回调函数
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : resolve; // 如果onFulfilled不是函数，则将其替换为默认的resolve函数
    onRejected = typeof onRejected === "function" ? onRejected : reject; // 如果onRejected不是函数，则将其替换为默认的reject函数
    let promise2 = new Promise((resolve, reject) => {
      // 创建一个新的Promise对象promise2
      if (this.status === FULFILLED) {
        // 如果当前Promise状态已经是已成功，则异步执行onFulfilled回调，并根据返回值处理promise2的状态
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e); // 如果在执行onFulfilled时发生错误，则将其作为原因拒绝promise2
          }
        }, 0);
      }

      if (this.status === REJECTED) {
        // 如果当前Promise状态已经是已失败，则异步执行onRejected回调，并根据返回值处理promise2的状态
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e); // 如果在执行onRejected时发生错误，则将其作为原因拒绝promise2
          }
        }, 0);
      }

      if (this.status === PENDING) {
        // 如果当前Promise状态还是进行中，则将成功和失败的回调函数存储起来，等待状态改变后再执行
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e); // 如果在执行onFulfilled时发生错误，则将其作为原因拒绝promise2
            }
          }, 0);
        });

        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e); // 如果在执行onRejected时发生错误，则将其作为原因拒绝promise2
            }
          }, 0);
        });
      }
    });

    return promise2; // 返回新的Promise对象promise2，以支持链式调用
  }
}
