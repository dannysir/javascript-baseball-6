import { MissionUtils } from "@woowacourse/mission-utils";

export function makeRandomNumber() {
    let setArr = new Set();
    while (setArr.size !== 3) {
        setArr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...setArr];
}

console.log(makeRandomNumber());
