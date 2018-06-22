#!/usr/bin/env node
// const colors = require('colors');
const clear = require('clear');
const CFonts = require('cfonts');

clear();

const args = process.argv.slice(2);
const dappName = "tokenwallet";

if(args.length === 0){
  CFonts.say(dappName, {colors: ['red']});
  console.log(` Usage:

                    ${dappName} balance
                        Gets balance in token and shows public address

                    ${dappName} send <amount> <address>
                        Send a fixed amount of tokens from your wallet to the specified address

                    ${dappName} wallet create
                        Guide you through creating a new wallet

                    `);

  process.exit();
}

const main = async () =>{
  //check the argument if it balance then do the action
  if(args[0] === 'wallet'){
    if(args[1] === 'create'){
      console.log('Guides you through creating a new wallet');

    }
  }else if (args[0] === 'balance') {
    console.log('Gets balance in tokens and shows public address');

  }else if (args[0] === 'send') {
    console.log('Send a fixed amount of tokens from your wallet to the specified address');
  }else {
    console.log('That was not a valid command. Please try again.');
    process.exit();
  }


};
main();
