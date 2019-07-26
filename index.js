/**
 * @name 任务切片
 * @description 一个用来做性能优化的工具
 * @author xichen Liu
 * @version 1.0.0
 */

var raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

var isArray = arg => arg instanceof Array && arg.constructor === Array;

var isFunction = arg => arg instanceof Function && arg.constructor === Function;

function TaskSlice () { }

TaskSlice.prototype = {
	init: function ({ sliceList, callback }) {
		if (!isFunction(callback)) {
			console.error('callback 为必传参数并为 function');
			return;
		}
		// 添加切片队列
		this.generator = this.sliceQueue({
			sliceList,
			callback
		});
		// 开始切片
		this.next();
	},
	/*
	 * next [执行下次队列]
	 * 依次执行切片，理想状态下每一个任务的执行时间不应该超过 16.7ms，如果超过了 16.7ms，就在启一个任务
	 * 详情：https://developers.google.com/web/fundamentals/performance/rail
	*/
	next: function () {
		const { generator } = this;
		const start = performance.now();
		let res = null;
		do {
			res = generator.next();
		}
		while (!res.done && performance.now() - start < 16.7);
		if (res.done) return;
		raf(this.next.bind(this));
	},
	/**
	 * sliceQueue [切片]
	 * @param { number } sliceList [切片次数]
	 * @param { function } callback [切片回调]
	 */
	sliceQueue: function* ({ sliceList, callback }) {
		// 处理次数
		for (let i = 0; i < sliceList; ++i) {
			callback(i);
			yield
		}
	}
}

export default new TaskSlice();