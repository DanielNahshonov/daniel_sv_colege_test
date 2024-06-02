var twoSum = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        count += 1;
      }
    }
  }
  return count;
};



let num = [1, 2, 3, 4, 5, 1];
let target = 6;

// console.log(twoSum(num, target));


function twoSum2(num,target){
    let count=0
    let sum=0
    for(let i=0;i<num.length;i++){
        sum=num[i]+num[i+1]
        console.log('sum is '+sum)
        if(sum<target){
            sum+=num[i+2]
            console.log(sum)
        }else if(sum== target){
            count+=1
            console.log(count)
        }else if(sum>target){
            sum=0
        }
    }
    
    return count
}

console.log(twoSum2(num,target))
