export const fulfilled = () => {};

const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise#<Promise>")
    );
  }

  let called = false;

  // 判断x是否为一个Promise对象或者thenable对象
  if ((typeof x === "object" && x != null) || typeof x === "function") {
    try {
      let then = x.then;

      // 如果x有then方法，则将其作为普通函数调用，并传入resolve和reject作为参数
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

class Promise {
  constructor(executor) {
    this.status = PENDING; // 当前状态
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    this.resolveCallbacks = []; // 存储成功回调函数的数组
    this.rejectCallbacks = []; // 存储失败回调函数的数组

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.resolveCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 如果onFulfilled不是函数，则将其设置为返回原值的函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    // 如果onRejected不是函数，则将其设置为抛出错误的函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    let promise2 = new Promise((resolve, reject) => {
      const handleFulfilled = () => {
        setTimeout(() => {
          // 使用setTimeout确保异步执行
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };

      const handleRejected = () => {
        setTimeout(() => {
          // 使用setTimeout确保异步执行
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };

      if (this.status === FULFILLED) {
        // 当前Promise已经成功状态
        handleFulfilled();
      }

      if (this.status === REJECTED) {
        // 当前Promise已经失败状态
        handleRejected();
      }

      if (this.status === PENDING) {
        // 当前Promise还处于等待状态
        this.resolveCallbacks.push(handleFulfilled);
        this.rejectCallbacks.push(handleRejected);
      }
    });

    return promise2;
  }
}
