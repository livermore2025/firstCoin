function Blockchain() {
  this.chain = []; // 블록체인 코어를 저장하는 리스트, 채굴된 모든 코인들 저장
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  // 새로운 블록 만드는 메소드. 이 블록 안에는 트랜잭션들이 저장되어 있고 이 TX들은 마지막 블록을 채굴한 이후 생성된 TX
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    //
    index: this.chain.length + 1, // newBlock이 몇번째 블록인지 index속성 추가
    timestamp: Date.now(), // 블록 생성 시점
    transactions: this.newTransactions, // 새로운 블록 만들었을 때 모든 새로운 트랜잭션들과 미결 트랜잭션들을 새로운 블록에 추가.
    nonce: nonce, // 자격증명, 단순히 어떤 숫자 값. POW를 통해 적법하게 새로운 블록을 만들었다는 증거.
    hash: hash, // newBlock객체에서 온 값. newTransactions를 해싱 함수에 매개변수로 전달함.
    previousBlockHash: previousBlockHash, // hash와 유사. hash가 현재라면 previousBlockHash는 이전 블록의 데이터, 또는 이전 블록에서 현재 블록까지의 데이터를 해싱한 값을 의미.
  };
  this.newTransactions = []; // 다음 블록 생성을 위해 배열 초기화
  this.chain.push(newBlock); // 블록을 체인에 추가
  return newBlock; // 반환
};
