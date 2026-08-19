const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

// function runSequence(config, cycles) {
//   if (config.phases.length === 0) {
//     console.log("No phases found");
//     return;
//   }

//   for (let i = 0; i === cycles; i++) {
//     for (let j = 0; j < config.phases.length; j++) {
//       if (config.fault === true) {
//         console.log("Faulted phase!");
//         break;
//       } else if (config.phases.duration <= 0) {
//         console.log("Invalid phase detected");
//       } else {
//         console.log(
//           `Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`,
//         );
//       }
//     }
//   }
// }

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  for (let cycle = 0; cycle < cycles; cycle++) {
    if (config.fault === true) {
      console.log("Faulted phase!");
      return;
    }

    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
        continue;
      }

      console.log(`Switching to ${phase.color} for ${phase.duration} s`);
    }
  }
}

runSequence(config1, 1);
