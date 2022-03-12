function Blockchain() {
  this.chain = []; // 블록체인 코어를 저장하는 리스트, 채굴된 모든 코인들 저장
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    //
    index: this.chain.length + 1, // newBlock이 몇번째 블록인지 index속성 추가
    timestamp: Date.now(), // 블록 생성 시점
    transactions: this.newTransactions, // 새로운 블록 만들었을 때 모든 새로운 트랜잭션들과 미결 트랜잭션들을 새로운 블록에 추가
  };
};
