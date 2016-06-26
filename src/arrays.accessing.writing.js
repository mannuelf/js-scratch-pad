
var nums = ['1','2','3','4','5'];
var sum = 0;
var sum2 = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];

for (var i = 0; i < nums.length; ++i) {
	sum += nums[i];
}

console.log('accessingarrays:', sum);
console.log('accessingarrays:', sum2);
