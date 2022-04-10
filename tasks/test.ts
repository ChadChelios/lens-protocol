import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types';
import { PostDataStruct } from '../typechain-types/LensHub';
import { getAddrs, initEnv, waitForTx, ZERO_ADDRESS } from './helpers/utils';

task('post', 'publishes a post')
  .setAction(async ({}, hre) => {
    const [governance, , user] = await initEnv(hre);
    const addrs = getAddrs();
    const emptyCollectModuleAddr = addrs['empty collect module'];
    const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governance);
  });

...
  await waitForTx(lensHub.whitelistCollectModule(emptyCollectModuleAddr, true));
...
