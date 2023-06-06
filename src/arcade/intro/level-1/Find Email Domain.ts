function solution(address: string): string | undefined {
  let [, ...domain] = address.split('@');
  return domain.pop();
}
