import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';

import DiskSotrageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskSotrageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
