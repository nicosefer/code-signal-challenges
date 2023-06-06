// https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg/solutions

function solution(votes: number[], k: number): number {
  let maxVoteValue: number;
  let output: number = 0;

  let sortedVotes = votes.sort((a, b) => b - a);
  maxVoteValue = sortedVotes[0];

  if (k === 0) {
    const countWithMaxVote = sortedVotes.filter(
      (vote) => vote === maxVoteValue
    ).length;
    if (countWithMaxVote > 1) {
      return 0;
    }
    return 1;
  }

  for (let i = 0; i < votes.length; i++) {
    const vote = votes[i];
    if (vote + k > maxVoteValue) {
      output += 1;
    }
  }

  return output;
}
