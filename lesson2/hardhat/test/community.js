const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sign up to community", () => {
     // 1. take 6 accounts
     // 2. transfer usdt to this accounts
     // 3. create Match     
     // 2 user win 1 (100$) 3 user win(2) 50 + 50 (win) = 100 
     // 5. for every account make approve and makeBet (2 like 1 (part1), 3 like 2 (part2))
     // validate this match (part 2 has to win)
     // check how many money they will get (correct or not)
     it("When user calls signUp we need to write it active", async () => {
        const USDT = await ethers.getContractFactory("USDT");
        const usdt = await USDT.deploy(10000000000);
        await usdt.deployed();
        const Community = await ethers.getContractFactory("Community");
        const community = await Community.deploy(usdt.address);
        await community.deployed();
        const [owner, account1, account2, account3, account4, account5, account6] = await ethers.getSigners();
        const signUpTrx = await community.signIn();
        await signUpTrx.wait();
        const giveUSDTToAccount1Trx = await usdt.transfer(account1.address,100000000);
        await giveUSDTToAccount1Trx.wait();
        const giveUSDTToAccount2Trx = await usdt.transfer(
        account2.address,
        100000000
       );
        
        await giveUSDTToAccount2Trx.wait();
        const giveUSDTToAccount3Trx = await usdt.transfer(
        account3.address,
        100000000
       );
        await giveUSDTToAccount3Trx.wait();
      
        const giveUSDTToAccount4Trx = await usdt.transfer(
        account4.address,
        50000000
       );
        await giveUSDTToAccount4Trx.wait();
        const giveUSDTToAccount5Trx = await usdt.transfer(
          account5.address,
          50000000
         );
          await giveUSDTToAccount5Trx.wait();
        const giveUSDTToAccount6Trx = await usdt.transfer(
            account6.address,
            50000000
           );
          await giveUSDTToAccount6Trx.wait();
          const user = await community.Users(owner.address);
          expect(user.active).to.equal(true);
          expect(user.signed).to.equal(true);
          const addMatchTRX = await community.addMatch(
              "firstMatch",
              "command1",
              "command2",
              3,
              100000000
            );
            await addMatchTRX.wait();
            const Match = await community.Matches(1);
            expect(Match.name).to.equal("firstMatch");
             const approveTrx = await usdt.approve(community.address, 100000000);
             await approveTrx.wait();
           expect(await usdt.balanceOf(community.address)).to.equal(0);
             const makeBetTrx = await community.makeBet(1, 100000000, 1);
             await makeBetTrx.wait();
            expect(await usdt.balanceOf(community.address)).to.equal(100000000);
           const approveUSDTAccount1 = await usdt
              .connect(account1)
              .approve(community.address, 100000000);
            await approveUSDTAccount1.wait();
           const makeBetAccount1 = await community
               .connect(account1)
               .makeBet(1, 100000000, 1);
             await makeBetAccount1.wait();
             expect(await usdt.balanceOf(community.address)).to.equal(200000000);

             const approveUSDTAccount2 = await usdt
                 .connect(account2)
                  .approve(community.address, 100000000);
                await approveUSDTAccount2.wait();
                const makeBetAccount2 = await community
                  .connect(account2)
                  .makeBet(1, 100000000, 1);
                await makeBetAccount2.wait();
                expect(await usdt.balanceOf(community.address)).to.equal(300000000);
                
                const approveUSDTAccount3 = await usdt
                .connect(account3)
                 .approve(community.address, 50000000);
               await approveUSDTAccount3.wait();
               const makeBetAccount3 = await community
                 .connect(account3)
                 .makeBet(1, 50000000, 2);
               await makeBetAccount3.wait();
               expect(await usdt.balanceOf(community.address)).to.equal(50000000);

               const approveUSDTAccount4 = await usdt
              .connect(account4)
              .approve(community.address, 50000000);
              await approveUSDTAccount4.wait();
              const makeBetAccount4 = await community
                .connect(account4)
                .makeBet(1, 50000000, 2);
              await makeBetAccount4.wait();
              expect(await usdt.balanceOf(community.address)).to.equal(100000000);

              const approveUSDTAccount5 = await usdt
              .connect(account5)
               .approve(community.address, 50000000);
             await approveUSDTAccount5.wait();
             const makeBetAccount5 = await community
               .connect(account5)
               .makeBet(1, 50000000, 2);
             await makeBetAccount5.wait();
             expect(await usdt.balanceOf(community.address)).to.equal(150000000);

             
      
    
    
    
    
    
    
    });



  
  
  
  
  
  
  
  
  
  
  
  
  
    });



