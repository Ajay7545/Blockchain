const sha256=require('sha256')

function Blockchain(){
	this.chain=[];
	this.pendingTransactions=[];
	this.createNewBlock(100,'0','0');
}

Blockchain.prototype.createNewBlock=function(nonce,previousBlockHash,Hash){
	const newBlock={
		index:this.chain.length+1,
		timestamp:Date.now(),
		transaction:this.pendingTransactions,
		nonce:nonce,
		hash:Hash,
		previousBlockHash:previousBlockHash
	}

	this.pendingTransactions=[];
	this.chain.push(newBlock);
	return newBlock;	
}

Blockchain.prototype.getLastBlock=function(){
	return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction=function(amount,sender,recepeint){
	const NewTransaction={
		amount:amount,
		sender:sender,
		recepeint:recepeint
	};
	this.pendingTransactions.push(NewTransaction);
	return this.getLastBlock()['index']+1;
}


Blockchain.prototype.HashBlock=function(previousBlockHash,currentBlockData,nonce)
{
	const dataAsString=previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
	const hash=sha256(dataAsString);
	return hash;
}
Blockchain.prototype.proofOfWork=function(previousBlockHash,currentBlockData)
{
	let nonce=0;
	let hash=this.HashBlock(previousBlockHash,currentBlockData,nonce)
	while(hash.substring(0,4)!='0000'){
		nonce++;
		hash=this.HashBlock(previousBlockHash,currentBlockData,nonce);
		console.log(hash);
	}
	return nonce;
}


module.exports=Blockchain;

