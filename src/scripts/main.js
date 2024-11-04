'use strict';

// function getMaximumProduct(nums) {
//   const multiply = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       multiply.push(nums[i] * nums[j]);
//     }
//   }

//   // eslint-disable-next-line no-console
//   console.log(multiply);
// }
// getMaximumProduct([5, -4, 2, 8, 0]);

// const charlie = { name: 'Charlie' };
// // const joy = { name: 'Joy' };

// charlie.partner = joy.name;
// joy.partner = charlie.name;

// // eslint-disable-next-line no-console
// console.log(charlie);

function upgradeRobot(robot, parts) {
  const assignedObj = Object.assign(robot, parts);

  // eslint-disable-next-line no-console
  console.log(assignedObj.chipVer);
}

upgradeRobot(
  {
    chipVer: 9,
    serialNo: 413,
    wheels: 2,
  },
  [
    { wheels: 6 },
    { chipVer: 16 },
    { displays: 2 },
  ],
);
