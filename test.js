const Blockchain=require('./blockchain');
const bitcoin=new Blockchain();


bitcoin.createNewBlock(653,'EIUFDGDFSFGGFH','GHGDFGHDFH');
bitcoin.createNewBlock(465,'FDGDFSDGFFGGFH','FGHDDGGDFH');
bitcoin.createNewBlock(4555,'GVH2FSDGFFGGFH','HHFGHDDGGDFH');

bitcoin.createNewTransaction(100,'sdsdsd','sdfgsdfg')

bitcoin.createNewBlock(3865,'UFDGDFSFGGFH','KHDFGHDFH');

bitcoin.createNewTransaction(200,'nsdsd','gsdfg')

bitcoin.createNewBlock(3865,'UFDGDFSFGGFH','KHDFGHDFH');
//console.log(bitcoin);
//console.log(bitcoin.chain[5]);

const previousBlockHash='FDGHFGFCGJFK65H848FH';
 
const currentBlockData=[
    {amount:10,
    sender:'sdkjjns343',
    recepeint:'dfsfdgs34'
    },
    {
    amount:30,
    sender:'jns343',
    recepeint:'dfsfdgs34'
    },
    {
    amount:20,
    sender:'sdkjjns343',
    recepeint:'dfsfdgs34'
    }

];

const nonce=100;

console.log(bitcoin.HashBlock(previousBlockHash,currentBlockData,nonce));
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));
console.log(bitcoin.HashBlock(previousBlockHash,currentBlockData,76849));

console.log(bitcoin);